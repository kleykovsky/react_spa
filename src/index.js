import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Button} from "./App";
import {StrictMode} from "react";
import styled from "styled-components";

import 'bootstrap/dist/css/bootstrap.min.css';
import CheckButton from "./Check-Button";
import * as PropTypes from "prop-types";
import AppForm from "./AppForm";
import AppPortals from "./AppPortals";

// import reportWebVitals from './reportWebVitals';
// import TestApp from "./TestApp";
// import {Header} from "./App";


// const txt = 'Hello World!'
// const  btn = 'btn'
// const elem = (
//     <div>
//         <h2>{txt}</h2>
//         <input type="text" name="" id=""/>
//         <button className={btn} tabIndex={0}>submit</button>
//         <Header/>
//     </div>
// );

// const elem = React.createElement(
//     'h2', {className: 'newClass'}, 'Hello world!',
// );
const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
  text-align: center;
  cursor: pointer;
  
`;
const root = ReactDOM.createRoot(document.getElementById('root'));

const Wrapper = styled.div`
  display: block;
  flex-direction: column;
  max-width: 600px;
  margin: 80px auto 0 auto;
`;

Wrapper.propTypes = {children: PropTypes.node};
root.render(
    <StrictMode>
        <Wrapper>
            <App/>
            <BigButton as={'a'}>Click me</BigButton>
            <CheckButton/>
            <AppForm/>
            <AppPortals/>
        </Wrapper>

    </StrictMode>

    // TestApp(),
 //    elem,
);
// reportWebVitals();
