import React, {useState, useEffect} from 'react';
let state = undefined
let reducer = undefined
let listeners = []
const setState = (newState) => {
  state = newState
  listeners.forEach(fn => fn(state))
}
const store = {
    getState() {
      return state
    },
    dispatch: (action) => {
      setState(reducer(state, action))
    },
    subscribe: (fn) => {
      listeners.push(fn)
      return () => {
        const index = listeners.index(fn)
        listeners.splice(index, 1)
      }
    }
}
export const createStore = (_reducer, initState) => {
  state = initState
  reducer = _reducer
  return store
}
const changed = (oldState, newState) => {
  let result = false
  Object.keys(newState).forEach(key => {
    if (newState[key] !== oldState[key]) {
      result = true
    }
  })
  Object.keys(oldState).forEach(key => {
    if (oldState[key] !== newState[key]) {
      result = true
    }
  })
  return result
}
let  dispatch = store.dispatch
const prevDispatch = dispatch
dispatch = (action) => {
  if (action instanceof Function) {
    action(dispatch) // dispatch既可以处理函数，又可以处理对象
  } else {
    prevDispatch(action)
  }
}
const prevDispatch2 = prevDispatch
dispatch = (action) => {
  if (action.payLoad instanceof Promise) {
    action.payLoad.then(data => {
      dispatch({...action, payLoad: data}) // data还是dispatch
    })
  } else {
    prevDispatch2(action)
  }
}
export const connect = (selector, dispatchSelector) => (Component) => {
    const Wrapper = (props) => {
      // const {state, setState} = useContext(appContext)
      // const {setState} = useContext(appContext)
  
      const [, update] = useState({})
      const data = selector ? selector(state) : {state}
      const dispatchers = dispatchSelector ? dispatchSelector(dispatch) : {dispatch}
      // 强制刷新wrapper组件，每次dispatch就刷新dispatch的组件。
      useEffect(() => 
        store.subscribe(() => {
          const newData = selector ? selector(state) : {state: state}
          if (changed(data, newData)) {
            console.log('update')
            update({})
          }
        }),[selector])  // eslint-disable-line react-hooks/exhaustive-deps
      return <Component {...props} {...data} {...dispatchers}/>
    }
    return Wrapper
}
const appContext = React.createContext(null)

export const Provider = ({store, children}) => {
  return (
    <appContext.Provider value={store}>
      {children}
    </appContext.Provider>
  )
}
