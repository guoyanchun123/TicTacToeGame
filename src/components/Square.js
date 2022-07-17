import React from 'react'
import './Square.css';
const Square = ({pos, info, clickSquare}) => {
  function getSquareTitle() {
    let title = pos
    if (info) {
      title = info
      return <span>{title}</span>
    }
    return <span className='hidden'>{title}</span>
  }
  function clickFun() {
    clickSquare(pos, info)
  }
  return (
    <span className='square' onClick={clickFun}>
      {getSquareTitle()}
    </span>
  )
}
export default Square;