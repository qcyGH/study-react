import React from 'react'
import {
    Route,
    BrowserRouter as Router,
    Routes} from "react-router-dom";
import { Shop } from './components/Shop'

export function App() {

    return (
        <main className='bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300'>
            <Router>
                <Routes >
                    <Route path='/' element={<Shop />} />
                </Routes>
            </Router>
        </main>
    )
}