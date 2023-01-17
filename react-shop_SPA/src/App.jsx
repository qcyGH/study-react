import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Shop } from './pages/Shop'
import { CartPage } from './pages/Cart'
import { FAQPage } from './pages/FAQ'
import { NotFound } from './pages/404'

export function App() {


    return (
        <main className='bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300'>
            <Routes>
                <Route path='/' element={<Shop />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/faq' element={<FAQPage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
    )
}