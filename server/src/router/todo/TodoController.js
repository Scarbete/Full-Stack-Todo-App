import Todo from '../../models/Todo.js'
import FileService from '../../service/FileService.js'


class TodoController {

    async create(req, res) {
        try {
            const fileName = FileService.saveFile(req.files.image)
            const createdTodo = await Todo.create({ ...req.body, image: fileName })
            res.json(createdTodo)
        }
        catch (e) { res.status(500).json(e) }
    }

    async getAll(req, res) {
        try {
            const todos = await Todo.find()
            res.json(todos)
        }
        catch (e) { res.status(500).json(e) }
    }

    async getOne(req, res) {
        try {
            const id = req.params.id

            if (!id) return res.status(400).json({ message: 'ID не указан' })

            const todo = await Todo.findById(id)
            res.json(todo)
        }
        catch (e) { res.status(500).json(e) }
    }

    async update(req, res) {
        try {
            const todo = req.body
            const id = todo._id

            if (!id) return res.status(400).json({ message: 'ID не указан' })

            const newTodo = await Todo.findByIdAndUpdate(id, todo, { new: true })
            res.json(newTodo)
        }
        catch (e) { res.json(500).json(e) }
    }

    async delete(req, res) {
        try {
            const id = req.params.id

            if (!id) return res.status(400).json({ message: 'ID не указан' })

            const todo = await Todo.findByIdAndDelete(id)
            res.json(todo)
        }
        catch (e) { res.status(500).json(e) }
    }

}

export default new TodoController()