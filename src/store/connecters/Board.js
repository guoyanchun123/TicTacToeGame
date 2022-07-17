import {connect} from '../../redux'
const squaresSelector = state => {
    return {
      squares: state.squares,
      stepCount: state.stepCount,
      history: state.history
    }
}
const squaresDispatcher = (dispatch) => {
  return {
    updateSquares: (attrs) => dispatch({type: 'updateSquares', payLoad: attrs}),
    updateHistory: (attrs) => dispatch({type: 'updateHistory', payLoad: attrs}),
    updateStepCount: (attrs) => dispatch({type: 'updateStepCount', payLoad: attrs}),
  }
}
export const connectToBoard = connect(squaresSelector, squaresDispatcher)