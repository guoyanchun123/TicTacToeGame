import React from 'react';
import './App.css';
import store from './store/index'
import {Provider} from './redux'

function App() {
  return (
    <Provider store={store}>
      Tic Tac Toe Game
    </Provider>
  );
}

export default App;
