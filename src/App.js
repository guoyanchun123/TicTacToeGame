import React from 'react';
import './App.css';
import store from './store/index'
import {Provider} from './redux'
import Board from './components/Board'
import PlayerInfo from './components/PlayerInfo'
import History from './components/History'

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <div className='header'>
          Tic Tac Toe Game
        </div>
        <div className='body'>
          <div className='leftPanel'>
            <Board/>
          </div>
          <div className='rightPanel'>
            <PlayerInfo />
            <History/>
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
