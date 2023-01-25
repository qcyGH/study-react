import { ChakraProvider } from '@chakra-ui/react'

import { Card } from './Card'

export function List(props) {
    const { items = [] } = props

    return (
        <ChakraProvider>
            <h2 className='text-2xl font-semibold text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                Daily
            </h2>
            <div className='mt-3 grid justify-items-center grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                {
                    items.daily?.entries?.map(item => (
                        item.items[0] && <Card
                                            image={item.items[0].images.featured}
                                            key={item.offerId} id={item.offerId}
                                            description={item.items[0].description}
                                            name={item.items[0].name}
                                            finalPrice={item.finalPrice}
                                        />
                    ))
                }
            </div>

            <h2 className='mt-6 text-2xl font-semibold text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                Featured
            </h2>
            <div className='mt-3 grid justify-items-center grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                {
                    items.featured?.entries?.map(item => (
                        item.bundle && <Card
                                            image={item.bundle.image}
                                            key={item.offerId}
                                            id={item.offerId}
                                            description={item.bundle.info}
                                            name={item.bundle.name}
                                            finalPrice={item.finalPrice}
                                        />
                    ))
                }
                {
                    items.featured?.entries?.map(item => (
                        (!item.bundle && item.items[0]) && <Card
                                                                image={item.items[0].images.featured}
                                                                key={item.offerId} id={item.offerId}
                                                                description={item.items[0].description}
                                                                name={item.items[0].name}
                                                                finalPrice={item.finalPrice}
                                                            />
                    ))
                }
            </div>

            <h2 className='mt-6 text-2xl font-semibold text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                Special featured
            </h2>
            <div className='mt-3 grid justify-items-center grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                {
                    items.specialFeatured?.entries?.map(item => (
                        item.bundle && <Card
                                            image={item.bundle.image}
                                            key={item.offerId}
                                            id={item.offerId}
                                            description={item.bundle.info}
                                            name={item.bundle.name}
                                            finalPrice={item.finalPrice}
                                        />
                    ))
                }
                {
                    items.specialFeatured?.entries?.map(item => (
                        !item.bundle && <Card
                                            image={item.items[0].images.featured}
                                            key={item.offerId} id={item.offerId}
                                            description={item.items[0].description}
                                            name={item.items[0].name}
                                            finalPrice={item.finalPrice}
                                        />
                    ))
                }
            </div>
        </ChakraProvider>
    )
}