import React, { useContext } from 'react'
import { OrderContext } from '../hooks/OrderContext'
import { CartItem } from './CartItem'

export function CartModal(props) {
    const { items = [] } = props

    return (
        <div className='absolute bottom-[-1rem] right-0 translate-y-[100%] w-max
                        bg-zinc-300/90 dark:bg-zinc-800/90 p-2 rounded-md backdrop-blur-xl
                        text-zinc-900 dark:text-zinc-200
        '>
            <div className='grid auto-rows-max grid-cols-4 gap-x-4 gap-y-2.5 py-2 px-4'>
                <div>Name</div>
                <div>Description</div>
                <div>Price</div>
                <div>Quantity</div>
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
        </div>
    )
}