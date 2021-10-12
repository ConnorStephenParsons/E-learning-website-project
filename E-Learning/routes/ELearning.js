
import Router from 'koa-router'

const router = new Router({ prefix: '/'})

import LearningContent from '../modules/learningContent.js'

const dbName = 'website.db'

async function checkAuth(ctx, next) {
	console.log('secure router middleware')
	console.log(ctx.hbs)
	if(ctx.hbs.authorised !== true) return ctx.redirect('/login?msg=you need to log in&referrer=/secure')
	await next()
}

router.use(checkAuth)

////A get runction which allows a specific E-learning page to be pulled ready for the handlebars based on the id////
/**
	 * gets learning page via id
	 * @param {Integer} records for table data
	 * @returns {Object} renders specific record id
	 */
router.get('ELearning/:id', async ctx => {
	const learningContent = await new LearningContent(dbName)
	try {
		const id = ctx.params.id
		console.log(`Current page id: ${id}`)
		const records = await learningContent.getid(id)
		console.log(`Records: ${records}`)
		ctx.hbs.learning = records
		console.log(ctx.hbs)
		await ctx.render('ELearning', ctx.hbs)
	} catch(err) {
		ctx.hbs.error = err.message
		await ctx.render('error', ctx.hbs)
	}
})


export default router
