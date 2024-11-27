import Router from 'express'
import todoRouter from './todo/todoRouter.js'

const mainRouter = new Router()

mainRouter.use('/todo', todoRouter)

export default mainRouter