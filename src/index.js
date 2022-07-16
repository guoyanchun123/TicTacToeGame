import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  //jsx语法
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// function clock(){
//   let time = new Date().toLocaleTimeString()
//   let element = (<h1>现在的时间是：{time}</h1>)
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
//react函数式组件
// function clock1(props){
//   return (
//     <h1>现在的时间是：{props.time}</h1>
//   )
// }
// function run(){
//   ReactDOM.render(
//     <clock1 time={new Date().toLocaleTimeString()}/>,
//     document.getElementById('root')
//   )
// }
// setInterval(() => {
//   clock()
// }, 1000)

