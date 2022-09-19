import React from 'react'
import {Tasks} from './components/Tasks'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: '',
            tasks: null,
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value}) // використовуємо [e.target.name], щоб динамічно пов'язувати input з state, та не писати для кожного input свою функцію
    }

    doneTask = (id) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(post => post.id !== id)
        }))
    }

    addTask = () => {
        let {tasks} = this.state
        let newTask = {id: Date.now(), name: this.state.inputText}
        let newTasks = (tasks === null) ? [newTask] : tasks.concat(newTask)
        this.setState({tasks: newTasks})
        this.setState({inputText: ''})
        localStorage.setItem('todo_list', JSON.stringify(newTasks))
    }

    componentDidMount() {
        let todoList = localStorage.getItem('todo_list')
        if (todoList) {
            this.setState({tasks: JSON.parse(todoList)})
        }
    }

    render() {
        return (
            <section className='List h-screen flex items-center justify-center bg-gradient-to-r from-pink-600 to-rose-600'>
                <div className='relative timer-wrapper flex flex-col items-center justify-center w-11/12 sm:w-9/12 h-3/5 min-w-max py-4 bg-stone-900 text-slate-50 rounded-3xl shadow-2xl shadow-black/50'>
                    <Tasks func={this.doneTask} tasks={this.state.tasks}/>
                    <div>
                        <input
                            className='font-mono text-zinc-900 bg-neutral-50 rounded-lg p-1'
                            onChange={e => this.handleChange(e)}
                            type='text'
                            name='inputText'
                            placeholder='Task text'
                            value={this.state.inputText}
                        />
                        <button
                            onClick={this.addTask}
                            className="font-mono text-2xl bg-sky-50 text-slate-900 mx-3 py-1 px-4 rounded-lg hover:rounded-xl shadow shadow-sky-50/50 transition-all duration-150  ease-in hover:shadow-sky-50/80 hover:bg-sky-50 active:shadow-none"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Todo