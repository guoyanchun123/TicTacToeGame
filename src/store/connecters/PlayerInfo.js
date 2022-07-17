import {connect} from '../../redux'
const stepCountSelector = state => {
    return {
      stepCount: state.stepCount,
      winner: state.winner,
      isOver: state.isOver
    }
}
export const connectToPlayerInfo = connect(stepCountSelector, null)