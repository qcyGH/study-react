import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: '',
        }
        this.func = props.func
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value}) // використовуємо [e.target.name], щоб динамічно пов'язувати input з state, та не писати для кожного input свою функцію
    }

    render () {
        const {inputText} = this.state
        return (
            <div>
                <input
                    className='font-mono text-zinc-900 bg-neutral-50 rounded-lg p-1'
                    onChange={e => this.handleChange(e)}
                    type='text'
                    name='inputText'
                    placeholder='Task text'
                    value={inputText}
                />
                <button
                    onClick={() => this.func(inputText)}
                    className="font-mono text-2xl bg-sky-50 text-slate-900 mx-3 py-1 px-4 rounded-lg hover:rounded-xl shadow shadow-sky-50/50 transition-all duration-150  ease-in hover:shadow-sky-50/80 hover:bg-sky-50 active:shadow-none"
                >
                    Add
                </button>
            </div>
        )
    }
}

export {Form}