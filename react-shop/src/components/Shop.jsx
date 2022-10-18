import React, {useState, useEffect, useContext} from 'react'
import {API_KEY, API_URL} from '../config'
import { OrderContext } from '../hooks/OrderContext'

import {Preloader} from './Preloader'
import {List} from './List'

export function Shop() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { orderList } = useContext(OrderContext)

    useEffect(function getItems() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            }
        })
            .then(response => response.json())
            .then(data => {
                data.status === 200 && setItems(data.data.featured.entries)
                //console.log(data.data.featured.entries)
                setLoading(false)
            })
    }, [])

    return (
        <section className='content'>
            {
                loading ? <Preloader /> : <List items={items} />
            }
        </section>
    )
}