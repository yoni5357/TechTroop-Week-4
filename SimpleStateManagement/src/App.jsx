import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingCart from './components/ShoppingCart'
import { SettingsProvider } from './SettingsProvider'
import Layout from './components/Layout'

function App() {
  
  return (
    <SettingsProvider>
      <Layout/>
    </SettingsProvider>
  )
}


export default App
