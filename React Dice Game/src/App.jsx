import { useState } from 'react'
import StartGame from './Components/StartGame'
import GamePlay from './Components/GamePlay'

function App() {
  let [isGameStarted, setGameStarted] = useState(false)

  const playGame = () => {
    setGameStarted((prev) => !prev)
  }

  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={playGame} /> }
    </>
  )
}

export default App
