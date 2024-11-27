import {FC, JSX} from 'react'
import {Container} from '@/shared/ui/Container'
import {TodoForm, TodoList} from '@/feature/todo'
import styles from './TodoWidget.module.scss'


const TodoWidget: FC = (): JSX.Element => {
    return (
        <div className={styles.todoWidget}>
            <Container className={styles.container}>
                <TodoForm/>
                <TodoList/>
            </Container>
        </div>
    )
}

export default TodoWidget