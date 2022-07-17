import {connect} from '../../redux'
const squaresSelector = state => {
    return {
      squares: state.squares,
      stepCount: state.stepCount,
      history: state.history,
      winner: state.winner
    }
}
const squaresDispatcher = (dispatch) => {
  return {
    updateSquares: (attrs) => dispatch({type: 'updateSquares', payLoad: attrs}),
    updateHistory: (attrs) => dispatch({type: 'updateHistory', payLoad: attrs}),
    updateStepCount: (attrs) => dispatch({type: 'updateStepCount', payLoad: attrs}),
    updateWinner: (attrs) => dispatch({type: 'updateWinner', payLoad: attrs}),
    updateIsOver: (attrs) => dispatch({type: 'updateIsOver', payLoad: attrs})
  }
}
export const connectToBoard = connect(squaresSelector, squaresDispatcher)