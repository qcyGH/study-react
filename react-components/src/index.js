import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Timer from './Timer';
// import List from './List'
import Todo from './Todo'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
)