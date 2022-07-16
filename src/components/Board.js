import React from 'react'
import './Board.css';
import Square from './Square'
import {connectToBoard} from '../store/connecters/Board'
const Board = connectToBoard(({squares, updateSquares}) => {
  console.log(squares)
  console.log(updateSquares)
  function getSquareUI(pos) {
    return (<Square pos={pos} info={squares[pos]}/>)
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