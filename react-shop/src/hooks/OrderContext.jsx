import React, {createContext, useState} from 'react'
import { useToast } from '@chakra-ui/react'

export const StoreProvider = createContext()

export function Context(props) {
    const [orderList, setOrderList] = useState([])
    const notification = useToast()

    const addItem = (item) => {
        const itemIndex = orderList.findIndex(orderItem => orderItem.id === item.id)

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            showNotification(item.name)
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

    const changeQuantity = (item, count) => {
        const itemIndex = orderList.findIndex(orderItem => orderItem.id === item.id)


        const newOrder = orderList.map((orderItem, index) => {
            if (index === itemIndex) {
                return {
                    ...orderItem,
                    quantity: count
                }
            } else {
                return orderItem
            }
        })

        setOrderList(newOrder)
    }

    const showNotification = (name) => {
        console.log('Toast')
        notification({
            title: `Successful added ${name} to cart`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
    }

    return (
        <StoreProvider.Provider value={{orderList, addItem, removeItem, changeQuantity}}>
            {props.children}
        </StoreProvider.Provider>
    )
}