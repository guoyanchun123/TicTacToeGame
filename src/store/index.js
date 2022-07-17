import {createStore} from '../redux'
import reducer  from './reducer'
const state = {
    user: {name: 'frank', age: 10},
    group: {name: 'web前端'},
    squares: new Array(9).fill(null), // 棋盘信息
    stepCount: 0, // 走的第几步
    winner: '',
    isOver: false,
    history: [] // 走的详细信息
}
const store = createStore(reducer, state)
export default store