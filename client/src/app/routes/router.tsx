import {createBrowserRouter} from 'react-router-dom'
import {MainPage} from '@/pages/MainPage'
import {TodoPage} from '@/pages/TodoPage'


export const appPaths = {
    main: '/',
    todo: '/todo/',
    todoDynamic: '/todo/:id',
}


export const router = createBrowserRouter([
    {
        path: appPaths.main,
        element: <MainPage/>
    },
    {
        path: appPaths.todoDynamic,
        element: <TodoPage/>
    }
])