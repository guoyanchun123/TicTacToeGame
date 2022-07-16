import React from 'react';
import './App.css';
import store from './store/index'
import {Provider} from './redux'
import Board from './components/Board'

function App() {
  return (
    <Provider store={store}>
      Tic Tac Toe Game
      <Board/>
    </Provider>
  );
}

export default App;
