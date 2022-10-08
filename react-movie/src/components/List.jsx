import { Card } from './Card'
import { Preloader } from './Preloader'

export function List(props) {
    return (
            <div className='mt-6 grid justify-items-center grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                {
                    props.cards.map(card => (
                        <Card id={card.imdbID} key={card.imdbID} name={card.Title} image={card.Poster} isLoading={props.skeleton}/>
                    ))
                }
                <Preloader isLoading={props.skeleton}/>
            </div>
    )
}