import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const txt = 'Hello World'
const  btn = 'btn'
const elem = (
    <div>
        <h2>{txt}</h2>
        <input type="text" name="" id=""/>
        <button className={btn} tabIndex={0}>submit</button>
    </div>
);


// const elem = React.createElement('h2', {className: 'newClass'}, 'Hello world!');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem,
);

// reportWebVitals();