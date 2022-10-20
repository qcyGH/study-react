import React from 'react'

export function CartItem(props) {
    const {
        name,
        id,
        description,
        finalPrice,
        quantity,
    } = props

    // <ul className= 'grid grid-flow-col grid-col-5 gap-4 py-2 px-4 mb-2 bg-zinc-200/30 dark:bg-zinc-900/30 hover:bg-zinc-200/90 dark:hover:bg-zinc-900/90 rounded-md'>
    return (
        <>
            <div className='pl-2 pr-4 py-1 bg-zinc-200/30 dark:bg-zinc-900/30 hover:bg-zinc-200/90 dark:hover:bg-zinc-900/90 rounded-md'>{name}</div>
            <div className='pl-2 pr-4 py-1 bg-zinc-200/30 dark:bg-zinc-900/30 hover:bg-zinc-200/90 dark:hover:bg-zinc-900/90 rounded-md'>{description}</div>
            <div className='pl-2 pr-4 py-1 bg-zinc-200/30 dark:bg-zinc-900/30 hover:bg-zinc-200/90 dark:hover:bg-zinc-900/90 rounded-md'>{finalPrice}</div>
            <div className='pl-2 pr-4 py-1 bg-zinc-200/30 dark:bg-zinc-900/30 hover:bg-zinc-200/90 dark:hover:bg-zinc-900/90 rounded-md'>{quantity}</div>
        </>
    )
}