import React from 'react'

export function CartItem(props) {
    const {
        name,
        id,
        description,
        finalPrice,
        quantity,
    } = props

    return (
        <div className='flex'>
            <span>{name}</span>
            <span>{description}</span>
            <span>{finalPrice}</span>
            <span>{quantity}</span>
        </div>
    )
}