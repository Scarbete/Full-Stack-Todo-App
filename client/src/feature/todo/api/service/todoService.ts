import {axiosErrorHandler, requester} from '@/shared/libraries/axios.ts'
import {AxiosResponse} from 'axios'
import {TypeTodo} from '@/feature/todo'


class TodoService {

    async create(todo: Omit<TypeTodo, '_id'>) {
        try {
            const response: AxiosResponse<TypeTodo> = await requester.post('todo', todo)
            return response.data
        }
        catch (e) {
            return axiosErrorHandler(e)
        }
    }

    async getAll() {
        try {
            const response: AxiosResponse<TypeTodo[]> = await requester.get('todo')
            return response.data
        }
        catch (e) {
            return axiosErrorHandler(e)
        }
    }

    async delete(id: string) {
        try {
            const response: AxiosResponse<TypeTodo> = await requester.delete(`todo/${id}`)
            return response.data
        }
        catch (e) {
            return axiosErrorHandler(e)
        }
    }

}

export default new TodoService()