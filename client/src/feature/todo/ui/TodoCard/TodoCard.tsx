import {FC, JSX} from 'react'
import {TypeTodo, useTodoRemoveQuery} from '@/feature/todo'
import {Link} from 'react-router-dom'
import {appPaths} from '@/app/routes/router'
import styles from './TodoCard.module.scss'


type States = {
    todo: TypeTodo
}


const TodoCard: FC<States> = (props): JSX.Element => {

    const { todo } = props

    const todoRemoveMutation = useTodoRemoveQuery()

    return (
        <li className={styles.todoView}>
            <Link to={appPaths.todo + todo._id} className={styles.todoInfo}>
                <p>{todo.title}</p>
                <p>{todo.description}</p>
            </Link>
            <button onClick={() => todoRemoveMutation.mutate(todo._id)}>
                {todoRemoveMutation.isPending
                    ? 'loading...'
                    : 'remove'
                }
            </button>
        </li>
    )
}

export default TodoCard