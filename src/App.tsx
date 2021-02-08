import React, { useEffect } from 'react';
import './App.css';
import Main from './components/main/main';
import {Reset} from 'styled-reset';
import { useStores } from './stores/context';
import {observer} from 'mobx-react';

function App() {
    
  return (
    <>
    <Reset/>
    <div className="App">
      <Main/>
    </div>
    </>
  );
}

export default App;
