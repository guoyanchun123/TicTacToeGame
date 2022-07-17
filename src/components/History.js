import React from 'react'
import './History.css';
import {connectToHistory} from '../store/connecters/History'
const History = connectToHistory(({history, updateHistory, updateSquares, updateStepCount, updateWinner, updateIsOver}) => {
  function restart() {
    updateHistory({
      history: []
    })
    updateStepCount({
      stepCount: 0
    })
    updateSquares({
      squares: new Array(9).fill(null)
    })
    updateWinner({
      winner: ''
    })
    updateIsOver({
      isOver: false
    })
  }
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
        break
      }
    }
    return winPlay
  }
  function goBack(historyItem, index) {
    const newHistory = history.slice(0, index + 1)
    updateHistory({
      history: newHistory
    })
    updateStepCount({
      stepCount: historyItem.stepCount + 1
    })
    const newSquares = new Array(9).fill(null)
    newHistory.forEach(item => {
      newSquares[item.pos] = item.player
    })
    updateSquares({
      squares: newSquares
    })
    updateWinner({
      winner: getWinner(newSquares)
    })
    if (getWinner(newSquares) !== '') {
      updateIsOver({
        isOver: true
      })
    } else {
      if (newHistory.length < 9) {
        updateIsOver({
          isOver: false
        })
      } else {
        updateIsOver({
          isOver: true
        })
      }
    }
  }
  if (history.length === 0) {
    return (
      <div className='history-class'>
         The game hasn't started yet
      </div>
    )
  }
  return (
    <ul className='history-class'>
       <li onClick={restart}>Restart</li>
       {
        history.map((item, index) => {
          return <li key={index} onClick={() => {
            debugger
            const message = window.confirm(`Are you sure you want to go back to step ${index + 1}`)
            if (message === true) {
              goBack(item, index)
            }
          }}>
            #{item.stepCount + 1}:Player {item.player} play to position {item.pos + 1}
          </li>
        })
       }
    </ul>
  )
})
export default History;