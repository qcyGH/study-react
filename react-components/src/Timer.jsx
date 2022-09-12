import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      seconds: 0,
      isTimerWorks: false,
    }
  }

  startTimer = () => {
    this.setState({isTimerWorks: true})
    console.log('Timer works')
    this.timerId = setInterval(() => {
      let second = this.state.seconds + 1
      this.setState({seconds: second})
      localStorage.setItem('timerSeconds', second)
    }, 1000)
  }

  componentDidMount() {
    if (localStorage.getItem('timerSeconds')) {
      this.setState({seconds: parseInt(localStorage.getItem('timerSeconds'))})
    }
    console.log('componentDidMount')
  }

  stopTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimerWorks: false})
  }

  resetTimer = () => {
    this.setState({seconds: 0})
    localStorage.removeItem('timerSeconds')
  }


  render() {
    return (
      <section className='Timer h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500'>
        <div className='timer-wrapper flex flex-col items-center w-11/12 sm:w-9/12 min-w-max py-40 bg-stone-900 text-slate-50 rounded-3xl shadow-2xl'>
          <h1 className='font-mono text-4xl tracking-wide text-inherit'>React Timer</h1>
          <span className='font-mono text-2xl my-5 text-inherit bg-blue-700 px-3 py-1 rounded-full'>{this.state.seconds}</span>
          <div className='timer__buttons-wrapper w-full flex flex-row justify-center mt-4'>
            {this.state.isTimerWorks ?
              <button className='font-mono text-lg bg-blue-900 text-slate-100 py-1 px-4 rounded-lg shadow shadow-blue-900/50 transition-all duration-150  ease-in hover:shadow-blue-900/80 hover:bg-blue-800 active:shadow-none' onClick={this.stopTimer}>Stop</button>
              :
              <button className='font-mono text-lg bg-blue-800 text-slate-100 py-1 px-4 rounded-lg shadow shadow-blue-800/50 transition-all duration-150  ease-in hover:shadow-blue-800/80 hover:bg-blue-700 active:shadow-none' onClick={this.startTimer}>Start</button>
            }
            <button className='font-mono text-lg bg-indigo-50 text-black py-1 px-4 rounded-lg ml-3 shadow shadow-indigo-50/50 transition-all duration-150 ease-in hover:shadow-indigo-100/80 hover:bg-white active:shadow-none' onClick={this.resetTimer}>Reset</button>
          </div>
        </div>
      </section>
    )
  }
}

export default Timer