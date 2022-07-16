const reducer = (state, { type, payLoad }) => {
    if (type === 'updateUser') {
        return {
        ...state,
        user: {
            ...state.user,
            ...payLoad
        }
        }
    } else {
        return state
    }
}
  export default reducer