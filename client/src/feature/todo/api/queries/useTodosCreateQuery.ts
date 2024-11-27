import {useMutation, useQueryClient} from '@tanstack/react-query'
import {TodoService} from '@/feature/todo'
import {queryKeys} from '@/shared/libraries/tanstack'


export const useTodosCreateQuery = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: TodoService.create,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKeys.todos]
            })
        }
    })
}