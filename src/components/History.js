import React from 'react'
import './History.css';
import {connectToHistory} from '../store/connecters/History'
const History = connectToHistory(({history}) => {
  return (
    <div className='history'>
      {history}
    </div>
  )
})
export default History;