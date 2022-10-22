import React, { useState, useEffect, useContext } from 'react'
import { Icon, IconButton } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
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
            <div className='pl-2 pr-4 py-1 bg-zinc-200/30 dark:bg-zinc-900/30 hover:bg-zinc-200/90 dark:hover:bg-zinc-900/90 rounded-md transition-color duration-100'>
                {name}
            </div>
            <div className='pl-2 pr-4 py-1 bg-zinc-200/30 dark:bg-zinc-900/30 hover:bg-zinc-200/90 dark:hover:bg-zinc-900/90 rounded-md transition-color duration-100'>
                {description}
            </div>
            <div className='pl-2 pr-4 py-1 bg-zinc-200/30 dark:bg-zinc-900/30 hover:bg-zinc-200/90 dark:hover:bg-zinc-900/90 rounded-md transition-color duration-100'>
                {finalPrice}
            </div>
            <div className='relative'>
                <input onChange={(e) => setCount(e.target.value)}
                    className='pl-2 pr-4 py-1 border-none bg-zinc-200/30 dark:bg-zinc-900/30 hover:bg-zinc-200/90 dark:hover:bg-zinc-900/90 rounded-md transition-color duration-100'
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
        </>
    )
}