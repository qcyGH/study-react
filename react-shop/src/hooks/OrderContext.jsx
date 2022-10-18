import React, {createContext, useState} from 'react'

export const OrderContext = createContext()

export function Context(props) {
    const [orderList, setOrderList] = useState([])

    const addItem = (item) => {
        setOrderList([...orderList, item])
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