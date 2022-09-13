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
  }

  stopTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimerWorks: false})
  }

  resetTimer = () => {
    this.setState({seconds: 0})
    localStorage.removeItem('timerSeconds')
  }

  keyboardControl = (e) => {
    if (e.code === 'Space') {
      if (this.state.isTimerWorks) {
        this.stopTimer()
      } else {
        this.startTimer()
      }
    }

    if (e.code === 'Backspace') {
      this.resetTimer()
    }
  }

  showHint = (e) => {
    e.target.innerHTML = 'Space = start/stop<br>Backspace = reset'
  }

  // Time format

  humanReadable (seconds) {
    let pad = function(x) { return (x < 10) ? "0"+x : x; }
    return pad(parseInt(seconds / (60*60))) + ":" +
           pad(parseInt(seconds / 60 % 60)) + ":" +
           pad(seconds % 60)
  }

  // Time format


  render() {
    return (
      <section onKeyDown={(e) => this.keyboardControl(e)} className='Timer h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500' tabIndex="0">
        <div className='relative timer-wrapper flex flex-col items-center w-11/12 sm:w-9/12 h-3/5 min-w-max py-4 bg-stone-900 text-slate-50 rounded-3xl shadow-2xl shadow-black/50'>
          <h1 className='font-mono text-5xl tracking-wide text-inherit mt-2'>React Timer</h1>
          <div className='flex flex-col my-auto'>
            <span className='font-mono text-5xl my-5 text-inherit bg-blue-700 px-3 py-1 rounded-full shadow-sm shadow-blue-900'>{this.humanReadable(this.state.seconds)}</span>
            <div className='timer__buttons-wrapper w-full flex flex-row justify-center mt-4'>
              {this.state.isTimerWorks ?
                <button className='font-mono text-lg bg-blue-900 text-slate-100 py-1 px-4 rounded-lg hover:rounded-xl shadow shadow-blue-900/50 transition-all duration-150  ease-in hover:shadow-blue-900/80 hover:bg-blue-800 active:shadow-none' onClick={this.stopTimer}>Stop</button>
                :
                <button className='font-mono text-lg bg-blue-800 text-slate-100 py-1 px-4 rounded-lg hover:rounded-xl shadow shadow-blue-800/50 transition-all duration-150  ease-in hover:shadow-blue-800/80 hover:bg-blue-700 active:shadow-none' onClick={this.startTimer}>Start</button>
              }
              <button className='font-mono text-lg bg-indigo-50 text-black py-1 px-4 rounded-lg hover:rounded-xl ml-3 shadow shadow-indigo-50/50 transition-all duration-150 ease-in hover:shadow-indigo-100/80 hover:bg-white active:shadow-none' onClick={this.resetTimer}>Reset</button>
            </div>
          </div>
          <span
            onMouseEnter={(e) => this.showHint(e)}
            onMouseLeave={(e) => e.target.innerHTML = '?'}
            className='absolute top-6 right-7 rounded-full bg-white text-black px-2 hover:py-1 hover:rounded-xl'
          >?</span>
        </div>
      </section>
    )
  }
}

export default Timer