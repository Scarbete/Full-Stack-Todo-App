import {useQuery} from '@tanstack/react-query'
import {queryKeys} from '@/shared/libraries/tanstack'
import {TodoService} from '@/feature/todo'


export const useTodosQuery = () => useQuery({
    queryKey: [queryKeys.todos],
    queryFn: () => TodoService.getAll(),
    refetchOnWindowFocus: true,
})