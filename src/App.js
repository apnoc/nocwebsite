import React from 'react';
import Main from './Layout/MainConponent';
import {BrowserRouter} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Main/>   
    </BrowserRouter>
  );
}

export default App;
