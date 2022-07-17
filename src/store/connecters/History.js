import {connect} from '../../redux'
const historySelector = state => {
    return {history: state.history}
}
const historyDispatcher = (dispatch) => {
  return {
    updateHistory: (attrs) => dispatch({type: 'updateHistory', payLoad: attrs})
    }
  }
export const connectToHistory = connect(historySelector, historyDispatcher)