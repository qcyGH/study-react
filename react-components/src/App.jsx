import React from 'react'

class App extends React.Component {
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
      this.setState({seconds: localStorage.getItem('timerSeconds')})
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
      <div className="App">
        React Timer
        <span>{this.state.seconds}</span>
        {this.state.isTimerWorks ?
          <button  onClick={this.stopTimer}>Stop</button>
          :
          <button  onClick={this.startTimer}>Start</button>
        }
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    )
  }
}

export default App