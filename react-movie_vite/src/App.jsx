import React, {useState} from 'react'
import {List} from './components/List'
import useSound from 'use-sound'
import clickSfx from './sounds/sine-click.mp3'

// You can get your API key on this site: https://www.omdbapi.com/apikey.aspx
function App() {
    const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY
    const [movieList, setMovieList] = useState([])
    const [movieName, setMovieName] = useState('')
    const [currentSearch, setCurrentSearch] = useState('')
    const [isMovieFound, setMovieFound] = useState(true)
    const [isLoading, setLoading] = useState(false)

    const fetchMovies = () => {
        let url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`

        if (movieName !== '' && movieName !== currentSearch) {
            setLoading(true)
            setMovieList([])

            fetch(url)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    if (data.Search !== undefined) {
                        setMovieList(data.Search)
                        setMovieFound(true)
                        searchNotification('searchNotification')
                        setCurrentSearch(movieName)
                    } else {
                        setMovieFound(false)
                    }
                })

            setLoading(false)
        }
    }

    const keyPress = (e) => {
        if (e.code === 'Enter') {
            fetchMovies()
        }
    }

    const searchNotification = (id) => {
        if (id) {
           let notification = document.querySelector(`#${id}`)
           notification.classList.remove('opacity-0')

           setTimeout(() => {
            notification.classList.add('opacity-0')
           }, 3000)
        }
    }

    const [playActive] = useSound(
        clickSfx,
        { volume: 0.5 }
    )


    return (
        <section className='relative movie-app bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300 py-5 px-5 lg:px-10'>
            <div className='flex items-center justify-center'>
                <label className='relative w-4/5 xl:w-1/5 lg:w-2/5 h-[36px] flex items-center justify-center divide-x divide-zinc-600 bg-zinc-800 dark:bg-zinc-200 rounded-lg shadow shadow-zinc-400/50 transition-all duration-200 ease-in focus-within:w-full xl:active:w-3/6 xl:focus-within:w-2/5 lg:focus-within:w-3/5 lg:active:w-4/6'>
                    <input
                        className='peer absolute left-1/2 w-full translate-x-[-50%] text-center text-xl text-zinc-50 bg-transparent dark:text-zinc-800 rounded-lg border-none py-1 px-2 focus:border-none focus:shadow-none focus:ring-0'
                        onChange={e => setMovieName(e.target.value)}
                        onKeyDown={e => keyPress(e)}
                        onClick={playActive}
                        type='text'
                        name='movieName'
                        placeholder='Search'
                        value={movieName}
                    />
                    <button
                        onClick={fetchMovies}
                        className='absolute right-0 invisible opacity-0 peer-focus-visible:visible peer-focus-visible:opacity-100 duration-200 ease text-slate-200 dark:text-slate-800 py-1 px-3'
                    >
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />
                        </svg>
                    </button>
                </label>
            </div>
            { !isMovieFound &&
                <div className='text-2xl text-zinc-600 dark:text-zinc-400 text-center mt-10'>No movies for your request 😒</div>
            }
            <List cards={movieList} skeleton={isLoading}></List>

            <div id='searchNotification' className='sticky left-0 bottom-5 text-left opacity-0 transition-opacity ease duration-500'>
                {
                    isMovieFound &&
                    <div className='py-2 px-4 bg-emerald-600 items-center text-zinc-100 leading-none rounded-xl flex lg:inline-flex' role='alert'>
                        <span className='mr-2 text-left flex-auto'>Find {movieList.length} movies</span>
                        <svg  className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                }
            </div>
        </section>
    )
}

export default App