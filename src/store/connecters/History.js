import {connect} from '../../redux'
const historySelector = state => {
    return {
      history: state.history,
      winner: state.winner
    }
}
const historyDispatcher = (dispatch) => {
  return {
    updateHistory: (attrs) => dispatch({type: 'updateHistory', payLoad: attrs}),
    updateSquares: (attrs) => dispatch({type: 'updateSquares', payLoad: attrs}),
    updateStepCount: (attrs) => dispatch({type: 'updateStepCount', payLoad: attrs}),
    updateWinner: (attrs) => dispatch({type: 'updateWinner', payLoad: attrs}),
    updateIsOver: (attrs) => dispatch({type: 'updateIsOver', payLoad: attrs}),
    updateWinPos: (attrs) => dispatch({type: 'updateWinPos', payLoad: attrs})
    }
  }
export const connectToHistory = connect(historySelector, historyDispatcher)