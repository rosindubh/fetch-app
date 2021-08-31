import react from 'react';
import './App.css';

class App extends react.Component {
  state ={
    data: []
  }

handleFetch = async () => {
  const response = await fetch("https://api.adviceslip.com/advice")
  console.log(response)
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
