const StatusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard

  const noMovesLeft = squares.every((el) => el !== null)
  const nextPlayer = isXNext ? 'X' : 'O'

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <div>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </div>
      )
    } else if (noMovesLeft) {
      return (
        <div>
          <span className='text-green'>X</span> and{' '}
          <span className='text-orange'>O</span> tied
        </div>
      )
    } else {
      return (
        <div>
          Next player is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </div>
      )
    }
  }

  return <h2 className='status-message'>{renderStatusMessage()}</h2>
}

export default StatusMessage
