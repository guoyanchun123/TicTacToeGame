import {connect} from '../../redux'
const squaresSelector = state => {
    return {squares: state.squares}
}
const squaresDispatcher = (dispatch) => {
  return {
    updateSquares: (attrs) => dispatch({type: 'updateSquares', payLoad: attrs})
  }
}
export const connectToSquares = connect(squaresSelector, squaresDispatcher)