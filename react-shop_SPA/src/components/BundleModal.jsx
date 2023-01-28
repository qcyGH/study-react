import React, { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function BundleModal(props) {

    const [showModal, setShowModal] = useState(false)
    const bundleRef = useRef(null)
    const rootBundleModal = useRef(null)

    const { title, items } = props

    const closeModalOutside = (e) => {
        if (!e.composedPath().includes(bundleRef.current)) {
            setShowModal(false)
        }
    }

    const closeModal = () => {
        if (showModal) {
            setShowModal(false)
        }
    }

    useEffect(() => {
        if (!showModal) return

        const handleClick = (e) => {
            if (!rootBundleModal.current) return
            if (!rootBundleModal.current.contains(e.target)) {
                closeModalOutside(e)
            }
        }

        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    }, [rootBundleModal, showModal, closeModal])

    return (
        <div ref={bundleRef} className='relative text-sm text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in break-words'>
            <button
             onClick={() => setShowModal((prevState) => !prevState)}
             className='opacity-[0.60]'
            >
                { title }
            </button>

            {
                showModal && <div ref={rootBundleModal} className='absolute top-0 left-0 bg-indigo-800 rounded-md z-10 p-1 pl-2 pr-4'>
                                {
                                    items.map(item => {
                                        return <div className='text-gray-50' key={item.id}>{ item.name }</div>
                                    })
                                }
                            </div>
            }
        </div>
    )
}