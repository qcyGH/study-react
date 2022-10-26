import React from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'

import { Shop } from './pages/Shop'
import { NotFound } from './pages/404'

export function App() {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Shop />} errorElement={<NotFound />}/>
    ))

    return (
        <main className='bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300'>
            <RouterProvider router={router}/>
        </main>
    )
}