import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Shop } from './pages/Shop'
import { CartPage } from './pages/Cart'
import { FAQPage } from './pages/FAQ'
import { NotFound } from './pages/404'

import { Layout } from './components/Layout'

export function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Shop />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='/faq' element={<FAQPage />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </>
    )
}