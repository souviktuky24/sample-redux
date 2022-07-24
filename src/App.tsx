import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import store from './redux/store/store';
import ChildApp from './containers/rotateApp';

function App() {
  return (
    <Provider store={store}  >
      <ChildApp />
    </Provider>
    
  );
}

export default App;