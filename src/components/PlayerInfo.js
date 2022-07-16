import React from 'react'
import './PlayerInfo.css';
import {connectToPlayerInfo} from '../store/connecters/PlayerInfo'
const PlayerInfo = connectToPlayerInfo(({stepCount}) => {
  const curPlayer = stepCount % 2 === 0 ? 'X' : 'O'
  return (
    <div className='playerInfo'>
      Next Palyer:{curPlayer}
    </div>
  )
})
export default PlayerInfo;