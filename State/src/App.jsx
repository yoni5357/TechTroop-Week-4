import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hudini from './comonents/Hudini'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Hudini/>
  )
}

export default App
