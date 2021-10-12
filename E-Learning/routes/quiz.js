
import Router from 'koa-router'

const router = new Router({ prefix: '/'})

import GitQuiz from '../modules/gitQuiz.js'
const dbName = 'website.db'

async function checkAuth(ctx, next) {
	console.log('secure router middleware')
	console.log(ctx.hbs)
	if(ctx.hbs.authorised !== true) return ctx.redirect('/login?msg=you need to log in&referrer=/secure')
	await next()
}

router.use(checkAuth)


////A get function to allow for quiz counter to be converted to percentage////
/**
	 * gets results page via post method
	 * @param {Integer} Grade based off calculation of grade (qCounter)
	 * @returns {Object} grade as a percentage
	 */
router.get('quiz/results', async ctx => {
	//const gitQuiz = await new GitQuiz(dbName)
	const numOfQuestions = 5
	const calcPercentage = 100
	try {
		ctx.hbs.grade = ctx.session.qCounter / `${numOfQuestions}`*`${calcPercentage}`
		console.log(`Grade ${ctx.hbs.grade}%`)
		await ctx.render('results', ctx.hbs)
	} catch(err) {
		ctx.hbs.error = err.message
		await ctx.render('error', ctx.hbs)
		console.error(err)
	}
})

////A get function for specific page from row to be pulled from db based on id.
/**
	 * gets quiz page via id
	 * @param {Integer} records for table data
	 * @returns {Object} renders specific record id
	 */
router.get('quiz/:id', async ctx => {
	const gitQuiz = await new GitQuiz(dbName)
	try {
		const id = ctx.params.id
		console.log(`Current page id: ${id}`)
		const records = await gitQuiz.getid(id)
		console.log(`Records: ${records}`)
		ctx.hbs.Equiz = records
		ctx.hbs.qCounter = ctx.session.qCounter
		console.log(ctx.hbs)

		await ctx.render('quiz', ctx.hbs)
	} catch(err) {
		ctx.hbs.error = err.message
		await ctx.render('error', ctx.hbs)
	}
})

////Post function - Score incremented by 1 on the counter if correct, then next question is displayed////
/**
	 * fetches learning page via id
	 * @param {Integer} records for table data
	 * @returns {Object} renders specific record id
	 */
router.post('quiz/:id', async ctx => {
	const gitQuiz = await new GitQuiz(dbName)
	ctx.hbs.body = ctx.request.body
	console.log(`answer submitted ${ctx.hbs.body.userAnswer}`)
	console.log(ctx.session.qCounter)
	const id = ctx.params.id
	const qAnswer = await gitQuiz.getid(id)
	const body = ctx.request.body
	if (body.userAnswer === qAnswer.correct) {
		ctx.session.qCounter++
	}
	console.log(`counter: ${ctx.session.qCounter}`)
	ctx.hbs.qCounter = ctx.session.qCounter
	if(qAnswer.nextpage) {
		return ctx.redirect(`/quiz/${qAnswer.nextpage}`, ctx.hbs)
	} else {
		return ctx.redirect('/quiz/results', ctx.hbs)
	}
})

export default router
