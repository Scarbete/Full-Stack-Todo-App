import {Suspense} from 'react'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {RouterProvider} from 'react-router-dom'
import {createRoot} from 'react-dom/client'
import {router} from '@/app/routes/router'
import './styles/core.scss'

const root = document.getElementById('root')

if (!root) {
    throw new Error('root is not defined!')
}

const queryClient = new QueryClient()

createRoot(root).render(
    <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>LOADING...</div>}>
            <RouterProvider router={router}/>
        </Suspense>
    </QueryClientProvider>
)
