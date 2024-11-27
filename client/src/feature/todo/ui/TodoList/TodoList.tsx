import { FC, JSX } from 'react'
import { TodoCard, useTodosQuery } from '@/feature/todo'
import { RequestStatus } from '@/shared/ui/RequestStatus'
import { axiosErrorHandler } from '@/shared/libraries/axios'
import styles from './TodoList.module.scss'


const TodoList: FC = (): JSX.Element => {
    const {
        data: todos,
        isLoading,
        error
    } = useTodosQuery()

    return (
        <RequestStatus isLoading={isLoading} errorMessage={axiosErrorHandler(error, true)}>
            {(todos?.length > 0) ? (
                <ul className={styles.todosList}>
                    {todos?.map((todo, index) => (
                        <TodoCard key={index} todo={todo} />
                    ))}
                </ul>
            ) : <div>Задач нет...</div>}
        </RequestStatus>
    )
}

export default TodoList