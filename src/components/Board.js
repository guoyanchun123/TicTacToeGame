import React from 'react'
import './Board.css';
import {connectToSquares} from '../store/connecters/Board'
const Board = connectToSquares(({squares, updateSquares}) => {
  console.log(squares)
  console.log(updateSquares)
  return (
    <div>
      Board
    </div>
  )
})
export default Board;