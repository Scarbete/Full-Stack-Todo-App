import { FC, JSX } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { EnumTodoFormKeys, TypeTodoFormState, useTodosCreateQuery } from '@/feature/todo'
import styles from './TodoForm.module.scss'


const TodoForm: FC = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<TypeTodoFormState>({
        mode: 'onChange'
    })

    const todoMutation = useTodosCreateQuery()

    const todoFormSubmit: SubmitHandler<TypeTodoFormState> = (todoData) => {
        const newTodo = {
            ...todoData,
            completed: false
        }
        todoMutation.mutate(newTodo)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(todoFormSubmit)} className={styles.form}>
            <label>
                {errors.title && <span>{errors.title.message}</span>}
                <input
                    {...register(EnumTodoFormKeys.TITLE, {required: 'Введите название'})}
                    type={'text'}
                    placeholder={'Enter title'}
                    maxLength={40}
                />
            </label>
            <label>
                {errors.description && <span>{errors.description.message}</span>}
                <input
                    {...register(EnumTodoFormKeys.DESCRIPTION, {required: 'Введите описание'})}
                    type={'text'}
                    placeholder={'Enter description'}
                    maxLength={200}
                />
            </label>
            {todoMutation.isError && (
                <p className={styles.errorMessage}>
                    {todoMutation.error.message}
                </p>
            )}
            <button disabled={todoMutation.isPending}>
                {todoMutation.isPending ? 'Loading...' : 'Create'}
            </button>
        </form>
    )
}

export default TodoForm