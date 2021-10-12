
import Router from 'koa-router'
import bodyParser from 'koa-body'

import publicRouter from './public.js'
import ELearningRouter from'./ELearning.js'
import quizRouter from './quiz.js'

const mainRouter = new Router()
mainRouter.use(bodyParser({multipart: true}))
////I have nested the routers for the routes, modules and handlebars to handle the datw with////
const nestedRoutes = [publicRouter, ELearningRouter, quizRouter]
for (const router of nestedRoutes) {
	mainRouter.use(router.routes())
	mainRouter.use(router.allowedMethods())
}

export default mainRouter
