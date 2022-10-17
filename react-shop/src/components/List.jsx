import { Card } from './Card'
import { Preloader } from './Preloader'

export function List(props) {
    const { items = [] } = props

    return (
            <div className='mt-6 grid justify-items-center grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                {
                    items.map(item => (
                        item.bundle && <Card image={item.bundle.image} key={item.offerId} id={item.offerId} description={item.bundle.info} name={item.bundle.name} finalPrice={item.finalPrice}/>
                    ))
                }
            </div>
    )
}