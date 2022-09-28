import React from 'react'
import {List} from './components/List'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieList: [],
            movieName: '',
            isMovieFound: true,
        }
    }

    fetchMovies = () => {
        let apiKey = '328a7cff'
        let url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${this.state.movieName}`

        if (this.state.movieName !== '') {
            fetch(url)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    if (data.Search !== undefined) {
                        this.setState({movieList: data.Search})
                        this.setState({isMovieFound: true})
                    } else {
                        this.setState({movieList: []})
                        this.setState({isMovieFound: false})
                    }
                })
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    keyPress = (e) => {
        if (e.code === 'Enter') {
            this.fetchMovies()
        }
    }


    render() {
        return (
            <section className='movie-app bg-zinc-100 py-5 px-10'>
                <div className='flex items-center justify-center'>
                    <label className='relative w-4/5 lg:w-1/5 h-[36px] flex items-center justify-center divide-x divide-zinc-600 bg-zinc-800 rounded-lg shadow shadow-zinc-400/50 transition-all duration-200 ease-in focus-within:w-full lg:focus-within:w-3/5'>
                        <input
                            className='peer absolute left-1/2 w-full lg:w-3/5 translate-x-[-50%] text-center text-xl text-zinc-50 bg-zinc-800 rounded-lg border-none py-1 px-2 focus:border-none focus:shadow-none focus:ring-0'
                            onChange={e => this.handleChange(e)}
                            onKeyDown={e => this.keyPress(e)}
                            type='text'
                            name='movieName'
                            placeholder='Search'
                            value={this.movieName}
                        />
                        <button
                            onClick={this.fetchMovies}
                            className="absolute right-0 invisible peer-focus-visible:visible text-slate-200 py-1 px-3"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </label>
                </div>
                { !this.state.isMovieFound &&
                 <div className='text-2xl text-zinc-600 text-center mt-10'>No movies for your request 😒</div>
                }
                <List cards={this.state.movieList}></List>
            </section>
        )
    }
}

export default App