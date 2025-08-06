import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hudini from './comonents/Hudini'
import Home from './comonents/Home'
import Landing from './comonents/Landing'

function App() {
  const [data, setData] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
  })

  const formatItem = (store) => {
    let filteredStore = store.filter(item => item.hottest === true);
    return filteredStore[0]; // Return the first (and likely only) hottest item
  }

  const switchPage = (pageName) => {
    let newData = {...data};
    newData.currentPage = pageName;
    setData(newData);
  }


  const displayCurrent = () => {
    if(data.currentPage === "Landing"){
      return <Landing name={data.user} hottest={formatItem(data.store).item} price={formatItem(data.store).price}  />
    }
    return <Home store={data.store}/>
  }

  return (
    <div>
      <Hudini/>
      {displayCurrent()}
      <div>
        <button onClick={() => switchPage("Home")}>Home</button>
        <button onClick={() => switchPage("Landing")}>Landing</button>
      </div>
    </div>

  )
}

export default App
