import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Login from '../../pages/Login';
import Error from '../Error';

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0px;
      font-family: "Lato", sans-serif;
      box-sizing: border-box;
    }
`

const routes = () => {
    return (
    <React.StrictMode>
    < GlobalStyle />
      <Router>
          <Routes>
              <Route exact path="/"
                element= { <Login/> }
                  />
              <Route path="/Home"
                element= { <Home /> }
              />
              <Route path="/Profil"
                element= {<Profil />}
              />
              <Route path="*"
                element= {<Error />}
              />
          </Routes>
      </Router>
    </React.StrictMode>
    );
};

export default routes;

