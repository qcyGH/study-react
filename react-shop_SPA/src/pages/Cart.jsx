import { useState, useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'

import { OrderContext } from '../hooks/OrderContext'

import { CartItem } from '../components/CartItem'

export function CartPage() {

    const { orderList } = useContext(OrderContext)

    const [totalPrice, setTotalPrice] = useState(0)

    const calcTotalPrice = () => {
        let newTotalPrice = 0

        orderList.forEach(item => {
            newTotalPrice += item.finalPrice * item.quantity
        })

        setTotalPrice(newTotalPrice)
    }

    useEffect(() => {
        calcTotalPrice()
    }, [orderList])

    return (
        <>
            <h1 className='text-center text-3xl font-semibold text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                Cart
            </h1>

            {
                orderList.length > 0
                ? <div className='w-full p-2 pr-4 mt-10
                    bg-zinc-300/90 dark:bg-zinc-800/90 rounded-md backdrop-blur-xl backdrop-saturate-150
                    shadow-lg shadow-zinc-400/50 dark:shadow-zinc-900/50
                    text-zinc-900 dark:text-zinc-200
                    transition-color duration-300
                    '>
                    <div className='pb-2'>
                        <div className='grid auto-rows-max grid-cols-11 gap-x-4 gap-y-2.5 py-4 px-4'>
                            <div className='pl-1 col-span-3'>Name</div>
                            <div className='pl-1 col-span-3'>Description</div>
                            <div className='pl-1 col-span-2'>Price</div>
                            <div className='pl-1 col-span-2'>Quantity</div>
                            <div className='col-span-1'></div>
                            {
                                orderList.map(item => (
                                    <CartItem
                                    item={item}
                                    key={item.id}
                                    />
                                ))
                            }
                        </div>
                        <span className='block text-right pr-2'>Total price: {totalPrice}</span>
                    </div>
                </div>
            : <div className='flex flex-col justify-center items-center'>
                <span className='p-2 pr-4 mt-10 text-xl text-center text-zinc-900 dark:text-zinc-200
                transition-color duration-150'>
                    Cart is empty
                </span>
                <Link to='/' className='opacity-100 text-slate-100 bg-orange-600 width-max px-6 py-2 my-2 rounded-md hover:scale-95 active:scale-90 transition-all ease duration-200'>Go to store page</Link>
            </div>
            }
        </>
    )
}