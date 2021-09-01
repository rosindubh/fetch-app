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
}

  render() {
    return (
      <div>
        <h1>hello there</h1>
        <button onClick={this.handleFetch}>get data</button>
      </div>
    )
  }
}

export default App;
