import React from 'react'
import './PlayerInfo.css';
import {connectToPlayerInfo} from '../store/connecters/PlayerInfo'
const PlayerInfo = connectToPlayerInfo(({stepCount, winner, isOver}) => {
  const curPlayer = stepCount % 2 === 0 ? 'X' : 'O'
  const info = winner === '' ? 'Next Palyer' : 'Winner'
  if (isOver && winner === '') {
    return (<div className='playerInfo'>
      The game is over, but there is no winner
    </div>)
  } else {
    return (
      <div className='playerInfo'>
        {info}:{winner === '' ? curPlayer : winner}
      </div>
    )
  }
})
export default PlayerInfo;