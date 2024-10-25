import '../styles/GameWidget.css'
import { useState } from 'react'
import Board from './components/Board'
import StatusMessage from './components/StatusMessage'
// import History from './components/History';
import { calculateWinner } from './winner'

const NEWGAME = [{ squares: Array(9).fill(null), isXNext: false }]
function App () {
  const [history, setHistory] = useState(NEWGAME)
  const [currentMove, setCurrentMove] = useState(0)

  const gamingBoard = history[currentMove]
  const { winner, winningSquares } = calculateWinner(gamingBoard.squares)

  // console.log({ history, currentMove });
  const handleSquareClick = (position) => {
    if (gamingBoard.squares[position] || winner) {
      return
    }

    setHistory((prev) => {
      const isTraversing = prev.length - 1 !== currentMove

      const last = isTraversing ? prev[currentMove] : prev[prev.length - 1]
      const nextSquareState = last.squares.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O'
        }
        return square
      })

      const base = isTraversing ? prev.slice(0, currentMove + 1) : prev

      return base.concat({
        squares: nextSquareState,
        isXNext: !last.isXNext
      })
    })

    setCurrentMove((prev) => prev + 1)
  }

  const moveTo = (move) => {
    setCurrentMove(move)
  }

  const onNewGameStart = () => {
    setHistory(NEWGAME)
    setCurrentMove(0)
  }
  return (
    <div className='app'>
      <h1>
        TIC <span className='text-green'>TAC </span> TOE
      </h1>

      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board
        squares={gamingBoard.squares}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />

      <button
        type='button'
        className={`btn-reset ${winner ? 'active' : ''}`}
        onClick={onNewGameStart}
      >
        start new game
      </button>
    </div>
  )
}

export default App
