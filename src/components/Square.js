import React from 'react'
import './Square.css';
const Square = ({pos, info}) => {
  function getSquareTitle() {
    let title = pos
    if (info) {
      title = info
    }
    return title
  }
  return (
    <div className='square'>
      {getSquareTitle()}
    </div>
  )
}
export default Square;