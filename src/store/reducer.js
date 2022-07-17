const reducer = (state, { type, payLoad }) => {
    if (type === 'updateUser') {
        return {
            ...state,
            user: {
                ...state.user,
                ...payLoad
            }
        }
    } else if (type === 'updateHistory') {
        return {
            ...state,
            history: payLoad.history
        }
    } else if (type === 'updateStepCount') {
        return {
            ...state,
            stepCount: payLoad.stepCount
        }
    } else if (type === 'updateSquares') {
        return {
            ...state,
            squares: payLoad.squares
        }
    } else if (type === 'updateWinner') {
        return {
            ...state,
            winner: payLoad.winner
        }
    } else if (type === 'updateIsOver') {
        return {
            ...state,
            isOver: payLoad.isOver
        }
    }
    else {
        return state
    }
}
  export default reducer