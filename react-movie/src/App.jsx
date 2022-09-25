import React from 'react'
import {List} from './components/List'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieList: [],
        }
    }

    fetchMovies = (movieName) => {
        let apiKey = '328a7cff'
        let url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`

        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({movieList: data.Search})
            })
    }

    componentDidMount() {
        this.fetchMovies('matrix')
    }

    render() {
        return (
            <section className='movie-app bg-zinc-100 py-5 px-10'>
                <List cards={this.state.movieList}></List>
            </section>
        )
    }
}

export default App