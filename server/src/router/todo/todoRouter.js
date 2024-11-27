import Router from 'express'
import TodoService from './TodoController.js'

const todoRouter = new Router()

const todoPaths = {
    main: '/',
    dynamic: '/:id'
}

todoRouter.post(todoPaths.main, TodoService.create)
todoRouter.get(todoPaths.main, TodoService.getAll)
todoRouter.get(todoPaths.dynamic, TodoService.getOne)
todoRouter.put(todoPaths.main, TodoService.update)
todoRouter.delete(todoPaths.dynamic, TodoService.delete)

export default todoRouter