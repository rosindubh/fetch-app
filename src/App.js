import React from 'react';
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

class App extends React.Component {
  state ={
    data: [],
    loading: true,
    error: false
  }

handleFetch = async () => {
  try{
    const response = await fetch("https://api.adviceslip.com/advice")
    if (response.status !== 200) {
      throw new Error(`${response.status} Error`)
    }
    const data = await response.json()
    this.setState({ data: data.slip, loading: false})
  } catch (error){
      console.log(error)
      this.setState({error: true})
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
    const { loading, error } = this.state

    if(error) {
      return <h1>There was an error...</h1>
    }
    else if(loading) {
      return<h1>loading...</h1>
    }
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <Link to='/'>Home</Link>
            </ul>
            <ul>
              <Link to='/aboutus'>AboutUs</Link>
            </ul>
            <ul>
              <Link to='/contactus'>ContactUs</Link>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path='/aboutus'>
            <AboutUs />
          </Route>
          <Route path='/contactus'>
            <ContactUs />
          </Route>
          <Route path='/'>
            <Home data={this.state.data} handleFetch={this.handleFetch} />
          </Route>
        </Switch>
      <div>

      </div>
      </Router>
    )
  }
}

export default App;
