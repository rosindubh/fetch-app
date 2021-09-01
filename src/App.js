import React from 'react';
import './App.css';

class App extends React.Component {
  state ={
    data: [],
    loading: true
  }

handleFetch = async () => {
  try{
  const response = await fetch("https://api.adviceslip.com/advice")
  if (response.status !== 200) {
    throw new Error(`${response.status} Error`)
  }
  const data = await response.json()
  this.setState({ data: data.slip  })
  } catch (error){
      console.log(error)
  }
}
componentDidMount() {
  this.handleFetch()
  setTimeout(() => {
    this.setState({loading: false})
  }, 2000)
  console.log("component did mount")
}

componentDidUpdate () {
  console.log("------------------")
  console.log("component did update")
}

  render() {
    const { data, loading } = this.state

    if(loading) {
      return<h1>loading...</h1>
    }
    return (
      <div>
        <h1>hello there</h1>
        <h3>{ data.advice }</h3>
        <button onClick={this.handleFetch}>get data</button>
      </div>
    )
  }
}

export default App;
