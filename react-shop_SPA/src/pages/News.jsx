import React, { useState, useEffect, useContext } from 'react'
import { API_KEY, API_URL_NEWS } from '../config'

import { Preloader } from '../components/Preloader'
import { NewsList } from '../components/NewsList'

export function NewsPage() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(function getItems() {
        fetch(API_URL_NEWS, {
            headers: {
                Authorization: API_KEY,
            }
        })
            .then(response => response.json())
            .then(data => {
                data.status === 200 && setItems(data.data)
                console.log(data.data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <h1 className='text-center text-3xl font-semibold text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                News
            </h1>

            {
                loading ? <Preloader /> : <NewsList items={items.stw.messages} />
            }
        </>
    )
}