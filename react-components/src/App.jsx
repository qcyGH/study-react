import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      someKey: false
    }
  }

  handleClickPlus = () => {
      this.setState({count: this.state.count + 1})
  }
  handleClickMinus = () => {
    this.setState({count: this.state.count - 1})
}

  render() {
    return (
      <div className="App">
        Welcome from React
        <button onClick={this.handleClickMinus}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleClickPlus}>+</button>
      </div>
    )
  }
}

export default App