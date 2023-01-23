import React, { useState, useEffect, useContext } from 'react'
import { IconButton } from '@chakra-ui/react'
import { AddIcon, MinusIcon, CloseIcon } from '@chakra-ui/icons'
import { OrderContext } from '../hooks/OrderContext'

export function CartItem(props) {
    const { removeItem, changeQuantity } = useContext(OrderContext)
    const { item } = props
    const {
        name,
        id,
        description,
        finalPrice,
        quantity,
    } = item

    const [count, setCount] = useState(quantity)

    useEffect(() => {
        if (count > 0) {
            changeQuantity(item, count)
        } else {
            setCount(1)
        }

    }, [count])

    return (
        <>
            <div className='col-span-3 pl-2 pr-4 py-1 bg-zinc-200/30 dark:bg-zinc-900/30 hover:bg-zinc-200/90 dark:hover:bg-zinc-900/90 rounded-md transition-color duration-100'>
                {name}
            </div>
            <div className='col-span-3 pl-2 pr-4 py-1 bg-zinc-200/30 dark:bg-zinc-900/30 hover:bg-zinc-200/90 dark:hover:bg-zinc-900/90 rounded-md transition-color duration-100'>
                {description}
            </div>
            <div className='col-span-2 pl-2 pr-4 py-1 bg-zinc-200/30 dark:bg-zinc-900/30 hover:bg-zinc-200/90 dark:hover:bg-zinc-900/90 rounded-md transition-color duration-100'>
                {finalPrice} * {quantity} = {finalPrice * quantity}
            </div>
            <div className='col-span-2 relative bg-zinc-200/30 dark:bg-zinc-900/30 hover:bg-zinc-200/90 dark:hover:bg-zinc-900/90 rounded-md transition-color duration-100'>
                <input onChange={(e) => setCount(e.target.value)}
                    className='pl-2 pr-4 py-1 border-none outline-none focus:ring-transparent bg-transparent transition-color duration-100'
                    type="text" name="quantity" value={count}
                />
                <div className='flex absolute top-[50%] translate-y-[-50%] right-4'>
                    <IconButton
                        aria-label='Increment count'
                        icon={<MinusIcon w={12} h={12}/>}
                        onClick={() => setCount((prevCount) => prevCount-1)}
                    >
                    </IconButton>
                    <IconButton
                        aria-label='Increment count'
                        className='ml-4'
                        icon={<AddIcon w={12} h={12}/>}
                        onClick={() => setCount((prevCount) => prevCount+1)}
                    >
                    </IconButton>
                </div>
            </div>
            <IconButton
                aria-label='Remove item'
                icon={<CloseIcon w={12} h={12}/>}
                className='text-zinc-200 bg-rose-800 hover:bg-rose-900 rounded-md'
                onClick={() => removeItem(id)}
            >
            </IconButton>
        </>
    )
}