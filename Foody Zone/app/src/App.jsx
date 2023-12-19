import { useState } from 'react'
import './App.css'
import TopSection from './components/topSection'
import ButtomSection from './components/ButtomSection'

function App() {
  let [filterData, setFilterData] = useState()
  
  let searchValue = (e) => {
    setFilterData(e)
  }

  return (
    <>
      <TopSection searchValue={searchValue}/>
      <ButtomSection filterData={filterData}/>
    </>
  )
}

export default App
