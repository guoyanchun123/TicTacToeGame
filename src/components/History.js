import React from 'react'
import './History.css';
import {connectToHistory} from '../store/connecters/History'
const History = connectToHistory(({history}) => {
  if (history.length === 0) {
    return (
      <div className='history-class'>
         The game hasn't started yet
      </div>
    )
  }
  return (
    <ul className='history-class'>
       {
        history.map((item, index) => {
          return <li key={index}>
            #{item.stepCount}:Player {item.player} play to position {item.pos}
          </li>
        })
       }
    </ul>
  )
})
export default History;