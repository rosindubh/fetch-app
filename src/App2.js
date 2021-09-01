import { useState } from "react"

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

    if(error) {
        return <h1>There was an error...</h1>
      }
      else if(loading) {
        return<h1>loading...</h1>
      }
      return (
        <div>
          <h1>hello there</h1>
          <h3>{ data.advice }</h3>
          <button onClick={handleFetch}>get data</button>
        </div>
      )
}

export default App