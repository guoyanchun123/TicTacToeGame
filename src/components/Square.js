import React from 'react'
import './Square.css';
const Square = ({pos, info, clickSquare}) => {
  function getSquareTitle() {
    let title = pos
    if (info) {
      title = info
    }
    return title
  }
  function clickFun() {
    clickSquare(pos, info)
  }
  return (
    <div className='square' onClick={clickFun}>
      {getSquareTitle()}
    </div>
  )
}
export default Square;