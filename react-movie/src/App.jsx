import React from 'react'
import {List} from './components/List'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieList: [],
            movieName: '',
        }
    }

    fetchMovies = () => {
        let apiKey = '328a7cff'
        let url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${this.state.movieName}`

        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({movieList: data.Search})
            })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value}) // використовуємо [e.target.name], щоб динамічно пов'язувати input з state, та не писати для кожного input свою функцію
    }

    render() {
        return (
            <section className='movie-app bg-zinc-100 py-5 px-10'>
                <div className='flex items-center justify-center'>
                    <input
                        className='font-mono text-xl text-zinc-50 bg-zinc-800 rounded-lg border-none py-1 px-2 focus-visible:outline focus-visible:outline-sky-500 focus:outline-4 focus:border-none focus:shadow-none focus:ring-0 focus:outline-offset-0'
                        onChange={e => this.handleChange(e)}
                        type='text'
                        name='movieName'
                        placeholder='Task text'
                        value={this.movieName}
                    />
                    <button
                        onClick={this.fetchMovies}
                        className="font-mono text-2xl bg-zinc-200 text-slate-900 mx-3 py-1 px-4 rounded-lg hover:rounded-xl shadow shadow-sky-50/50 transition-all duration-150 ease-in hover:shadow-sky-50/80 hover:bg-sky-200 active:shadow-none focus-visible:outline focus-visible:outline-sky-500 outline-4 outline-offset-0"
                    >
                        Search
                    </button>
                </div>
                <List cards={this.state.movieList}></List>
            </section>
        )
    }
}

export default App