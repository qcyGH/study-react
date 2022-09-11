import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      someKey: false
    }
  }

  handleClick = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div className="App">
        Welcome from React
        <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
    )
  }
}

export default App