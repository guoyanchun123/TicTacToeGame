import React from 'react'
import './Square.css';
const Square = ({pos, info, winPos, clickSquare}) => {
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
  console.log(winPos)
  if (winPos.indexOf(pos) > -1) {
    return (
      <span className='square winner' onClick={clickFun}>
        {getSquareTitle()}
      </span>
    )
  }
  return (
    <span className='square' onClick={clickFun}>
      {getSquareTitle()}
    </span>
  )
}
export default Square;