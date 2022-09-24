import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            subscription: false,
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleCheckboxChange = (e) => {
        this.setState({[e.target.name]: e.target.checked})
    }

    validateEmail = () => {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)
    }

    verifyForm = (e) => {
        e.preventDefault()
        if (this.validateEmail() && this.state.subscription) {
            e.target.querySelector('button').classList.add('bg-emerald-500', 'shadow-emerald-500/50', 'hover:shadow-emerald-500/80', 'hover:bg-emerald-600', 'focus-visible:outline-emerald-900')
        } else if (this.validateEmail()) {
            alert('Dont agree terms and conditions')
        } else if (this.state.subscription) {
            alert('Incorrect email!')
        } else {
            alert('Dont agree with terms and conditions and incorrect email')
        }
    }

    render() {
        const {email, subscription} = this.state
        return (
            <section className='Form h-screen flex items-center justify-center bg-gradient-to-r from-violet-500 to-purple-500'>
                <div className='relative wrapper flex flex-col items-center justify-center w-11/12 sm:w-9/12 min-h-[60%] h-max min-w-max py-4 bg-stone-900 text-slate-50 rounded-3xl shadow-2xl shadow-black/50'>
                    <h1 className='font-mono absolute top-6 text-5xl tracking-wide text-inherit mt-2'>Subscribe form</h1>
                    <form onSubmit={e => this.verifyForm(e)} action="submit" className='flex flex-col items-start'>
                        <input
                        className='font-mono text-xl text-zinc-900 bg-neutral-50 rounded-lg border-none p-1 focus-visible:outline focus-visible:outline-indigo-500 focus:outline-4 focus:border-none focus:shadow-none focus:ring-0 focus:outline-offset-0'
                        onChange={this.handleChange}
                        type='email'
                        name='email'
                        placeholder='email'
                        value={email}
                        />
                        <label className='mt-1 mb-4'>
                            <input
                            className='w-4 h-4 text-indigo-500 bg-gray-100 rounded border-gray-300 focus:ring-indigo-600 focus:ring-2 focus:ring-offset-0 mr-2'
                            onChange={this.handleCheckboxChange}
                            type='checkbox'
                            name='subscription'
                            checked={subscription}
                            />
                        I agree with terms and conditions
                        </label>
                        <button
                         className='font-mono text-2xl bg-sky-50 text-slate-900 py-1 px-4 rounded-lg hover:rounded-xl shadow shadow-sky-50/50 transition-all duration-150  ease-in hover:shadow-sky-50/80 hover:bg-sky-100 active:shadow-none focus-visible:outline focus-visible:outline-indigo-500 outline-offset-0'
                         type="submit"
                         >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Form