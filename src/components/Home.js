const Home = ({ data, handleFetch }) => {
    return(
        <>
        <h1>This is App.js</h1>
        <h3>{ data.advice }</h3>
        <button onClick={handleFetch}>get data</button>
        </>        
    )
}

export default Home