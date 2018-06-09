import React from 'react';
import ReactDOM from 'react-dom';
// import './titlestyle.scss';
import '.src/style.css';
import Picture from '.src/picture.png';
import Data from '.src/data.xml';
import {cube} from '.src/math.js';

function App() {
  return (
    <div className="container">
      <h1 className="titlestyle">Hello React!</h1>
      <img src=Picture>
    </div>
  );
}
const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);
