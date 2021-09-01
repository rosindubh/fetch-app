import React from 'react';
import './App.css';

class App extends React.Component {
  state ={
    data: []
  }

handleFetch = async () => {
  const response = await fetch("https://api.adviceslip.com/advice")
  const data = await response.json()
  console.log(data)
  this.setState({ data: data.slip  })
}

  render() {
    const { data } = this.state
    return (
      <div>
        <h1>hello there</h1>
        <h3>{data.advice}</h3>
        <button onClick={this.handleFetch}>get data</button>
      </div>
    )
  }
}

export default App;
