import React, {createContext, useState} from 'react'

export const OrderContext = createContext()

export function Context(props) {
    const [orderList, setOrderList] = useState([])

    const addItem = (item) => {
        const itemIndex = orderList.findIndex(orderItem => orderItem.id === item.id)

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }

            setOrderList([...orderList, newItem])
        } else {
            const newOrder = orderList.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem
                }
            })

            setOrderList(newOrder)
        }
    }

    const removeItem = (id) => {
        setOrderList(orderList.filter((item) => item.id !== id))
    }

    return (
        <OrderContext.Provider value={{orderList, addItem, removeItem}}>
            {props.children}
        </OrderContext.Provider>
    )
}