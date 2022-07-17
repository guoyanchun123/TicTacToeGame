import React from 'react'
import './Board.css';
import Square from './Square'
import {connectToBoard} from '../store/connecters/Board'
const Board = connectToBoard(({squares,stepCount,history,winner,winPos, updateHistory, updateSquares, updateStepCount, updateWinner, updateIsOver, updateWinPos}) => {
  function getWinner(squaresNew) {
    const winConditions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    let winPlay = ''
    for (let i = 0; i < winConditions.length; i++) {
      let curCondition = winConditions[i]
      let first = squaresNew[curCondition[0]]
      let second = squaresNew[curCondition[1]]
      let third = squaresNew[curCondition[2]]
      if (null !== first && first === second && second === third) {
        winPlay = first
        updateWinPos({
          winPos: [
            curCondition[0],
            curCondition[1],
            curCondition[2]
          ]
        })
        break
      }
    }
    return winPlay
  }
  console.log(winPos)
  function clickSquare(pos, info) {
    if (info === null && winner !== '') {
      alert('The game has won, and the game is over!')
    }
    if (info === null && winner === '') {
      const newHistory = JSON.parse(JSON.stringify(history))
      newHistory.push({
        stepCount,
        pos,
        player: stepCount % 2 === 0 ? 'X' : 'O'
      })
      updateHistory({
        history: newHistory
      })
      updateStepCount({
        stepCount: stepCount + 1
      })
      const newSquares = JSON.parse(JSON.stringify(squares))
      newSquares[pos] = stepCount % 2 === 0 ? 'X' : 'O'
      updateSquares({
        squares: newSquares
      })
      const winPlayer = getWinner(newSquares)
      if (winPlayer !== '') {
        updateWinner({
          winner: winPlayer
        })
        updateIsOver({
          isOver: true
        })
      }
      if (newHistory.length === 9) {
        updateIsOver({
          isOver: true
        })
      }
    }
  }
  function getSquareUI(pos) {
    return (<Square pos={pos} info={squares[pos]} winPos={winPos} clickSquare={clickSquare}/>)
  }
  return (
    <div className='board'>
      <div className='row'>
        {getSquareUI(0)}
        {getSquareUI(1)}
        {getSquareUI(2)}
      </div>
      <div className='row'>
        {getSquareUI(3)}
        {getSquareUI(4)}
        {getSquareUI(5)}
      </div>
      <div className='row'>
        {getSquareUI(6)}
        {getSquareUI(7)}
        {getSquareUI(8)}
      </div>
    </div>
  )
})
export default Board;