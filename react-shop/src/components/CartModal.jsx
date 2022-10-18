import React, { useContext } from 'react'
import { OrderContext } from '../hooks/OrderContext'
import { CartItem } from './CartItem'

export function CartModal(props) {
    const { items = [] } = props

    return (
        <div>
            {
                items.map(item => (
                    <CartItem
                     name={item.name}
                     id={item.id}
                     key={item.id}
                     description={item.description}
                     finalPrice={item.finalPrice}
                     quantity={item.quantity}
                    />
                ))
            }
        </div>
    )
}