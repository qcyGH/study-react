import React from 'react'
import {Posts} from './components/Posts'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [
                {id: 'jsBasics', name: 'JS Basics'},
                {id: 'jsAdvanced', name: 'JS Advanced'},
                {id: 'reactJS', name: 'React JS'},
            ],
        }
    }

    deleteComponent = (id) => {
        this.setState(prevState => ({
            posts: prevState.posts.filter(post => post.id !== id)
        }))
    }

    render() {
        return (
            <section className='List h-screen flex items-center justify-center bg-gradient-to-r from-pink-600 to-rose-600'>
                <div className='relative timer-wrapper flex flex-col items-center justify-center w-11/12 sm:w-9/12 h-3/5 min-w-max py-4 bg-stone-900 text-slate-50 rounded-3xl shadow-2xl shadow-black/50'>
                    <Posts func={this.deleteComponent} posts={this.state.posts}/>
                </div>
            </section>
        )
    }
}

export default List