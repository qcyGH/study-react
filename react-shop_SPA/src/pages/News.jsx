import React, { useState, useEffect } from 'react'
import { API_KEY, API_URL_NEWS } from '../config'

import { NewsList } from '../components/NewsList'
import { PreloaderNews } from '../components/Preloader'

export function NewsPage() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(function getItems() {
        fetch(API_URL_NEWS, {
            headers: {
                Authorization: API_KEY,
            }
        })
            .then(response => response.json())
            .then(data => {
                data.status === 200 && setItems(data.data)
                //console.log(data.data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <h1 className='mb-10 text-center text-3xl font-semibold text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                News
            </h1>

            {
                !loading ? <>
                    {
                        (items.br?.image || items.br?.messages) && <h2 className='mt-10 text-center text-2xl font-semibold text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                            Battle Royale
                        </h2>
                    }
                    {
                        items.br?.image && <img className='mt-5 rounded-lg shadow-lg shadow-zinc-400/50 dark:shadow-zinc-900/50 w-max h-max hover:shadow-none hover:scale-95 transition-all duration-150 ease-in' src={items.br.image} alt='fortnite battle pass'/>
                    }
                    {
                        items.br?.messages &&<NewsList items={items.br.messages} />
                    }
                </> : <PreloaderNews isLoading={loading} />
            }

{
                !loading ? <>
                    {
                        (items.stw?.image || items.stw?.messages) && <h2 className='mt-10 text-center text-2xl font-semibold text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                            Save the World
                        </h2>
                    }
                    {
                        items.stw?.image && <img className='mt-5 rounded-md' src={items.stw.image} alt='fortnite save the world'/>
                    }
                    {
                        items.stw?.messages &&<NewsList items={items.stw.messages} />
                    }
                </> : <PreloaderNews isLoading={loading} />
            }
        </>
    )
}