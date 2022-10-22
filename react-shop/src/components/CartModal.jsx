import React, { useEffect, useRef, useContext } from 'react'
import { OrderContext } from '../hooks/OrderContext'
import { CartItem } from './CartItem'

export function CartModal(props) {
    const { items = [], show, closeModal } = props
    const rootCartModal = useRef(null)

    useEffect(() => {
        if (!show) return

        const handleClick = (e) => {
            if (!rootCartModal.current) return
            if (!rootCartModal.current.contains(e.target)) {
                closeModal(e)
            }
        }

        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    }, [rootCartModal, show, closeModal])

    if (!show) return null

    return (
        <div ref={rootCartModal}
            className=' absolute bottom-[-1rem] right-0 translate-y-[100%] w-max
                        bg-zinc-300/90 dark:bg-zinc-800/90 p-2 rounded-md backdrop-blur-xl backdrop-saturate-150
                        shadow-lg shadow-zinc-400/50 dark:shadow-zinc-900/50
                        text-zinc-900 dark:text-zinc-200
                        transition-color duration-300
            '>
            {
                items.length > 0
                ? <div className='grid auto-rows-max grid-cols-4 gap-x-4 gap-y-2.5 py-2 px-4'>
                    <div className='pl-1'>Name</div>
                    <div className='pl-1'>Description</div>
                    <div className='pl-1'>Price</div>
                    <div className='pl-1'>Quantity</div>
                    {
                        items.map(item => (
                            <CartItem
                            item={item}
                            key={item.id}
                            />
                        ))
                    }
                </div>
                : <span>Cart is empty</span>
            }
        </div>
    )
}