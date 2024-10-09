import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [hello, setHello] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8080/api/hello')
      .then(response => setHello(response.data))
      .catch(error => console.log(error))
  }, []);


  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-blue-600">React + Vite + JavaScript + Tailwind</h1>
        <h2>{hello}</h2>
      </div>
    </>
    
  )
}

export default App
