import { useState } from "react"
import { useEffect } from "react"
import './components/AboutUs'
import './components/ContactUs'

const App = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

 const handleFetch = async () => {
    try{
        const response = await fetch("https://api.adviceslip.com/advice")
        if (response.status !== 200) {
            throw new Error(`${response.status} Error`)
        }
        const data = await response.json()
        setData(data.slip)
        setLoading(false)
        } catch (error){
            console.log(error)
            setError(true)
        }
    }
    //useEffect does the same job as componentDidMount and componentDidUpdate combined
    useEffect(() => {
        handleFetch()
    },[])

    if(error) {
        return <h1>There was an error...</h1>
      }
      else if(loading) {
        return<h1>loading...</h1>
      }
      return (
        <div>
          <h1>This is App2.js</h1>
          <h3>{ data.advice }</h3>
          <button onClick={handleFetch}>get data</button>
        </div>
      )
}

export default App