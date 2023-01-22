import React, { useState, useEffect, useContext } from 'react'
import { API_KEY, API_URL_SHOP } from '../config'
import { OrderContext } from '../hooks/OrderContext'

import {Preloader} from '../components/Preloader'
import {List} from '../components/List'

export function Shop() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { orderList } = useContext(OrderContext)

    useEffect(function getItems() {
        fetch(API_URL_SHOP, {
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
        <>
            {
                loading ? <Preloader isLoading={loading} /> : <List items={items} />
            }
        </>
    )
}