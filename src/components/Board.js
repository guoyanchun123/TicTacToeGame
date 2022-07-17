import React from 'react'
import './Board.css';
import Square from './Square'
import {connectToBoard} from '../store/connecters/Board'
const Board = connectToBoard(({squares,stepCount,history, updateHistory, updateSquares, updateStepCount}) => {
  console.log(squares)
  console.log(updateSquares)
  console.log(history)
  function clickSquare(pos, info) {
    if (info === null) {
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
    }
  }
  function getSquareUI(pos) {
    return (<Square pos={pos} info={squares[pos]} clickSquare={clickSquare}/>)
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