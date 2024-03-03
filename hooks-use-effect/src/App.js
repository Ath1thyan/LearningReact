// import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [resourceType, serResourceType] = useState('posts')
  const [items, setItems] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect( () => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])

  useEffect( () => {
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div className="App">
      <h1>{windowWidth}</h1>
      <div>
        <button onClick={ () => serResourceType('posts')} >Posts</button>
        <button onClick={ () => {serResourceType('users')}} >Users</button>
        <button onClick={ () => serResourceType('comments')} >Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map( item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </div>
  );
}

export default App;
