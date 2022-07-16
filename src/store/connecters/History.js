import {connect} from '../../redux'
const historySelector = state => {
    return {history: state.history}
}
export const connectToHistory = connect(historySelector, null)