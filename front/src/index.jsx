import React from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from "react-dom/client";
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Login from './pages/Login';
import Error from './components/Error';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement);

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0px;
      font-family: 'Lato', sans-serif;
      box-sizing: border-box;
    }
   
  
`

root.render(

  <React.StrictMode>
    < GlobalStyle />
    <Router>
        <Routes>
            <Route exact path="/"
              element= { <div><Header /><Home /></div> }
            />
            <Route path="/Login"
              element= { <Login/> }
            />
            <Route path="/Profil"
              element= {<div><Header /><Profil /></div>}
            />
            <Route path="*"
              element= {<div><Header /><Error /></div>}
            />
        </Routes>
    </Router>
  </React.StrictMode>

)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


