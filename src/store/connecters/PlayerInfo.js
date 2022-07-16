import {connect} from '../../redux'
const stepCountSelector = state => {
    return {stepCount: state.stepCount}
}
export const connectToPlayerInfo = connect(stepCountSelector, null)