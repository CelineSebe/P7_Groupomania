import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Login from '../../pages/Login';
import Trending from '../..//pages/Trending';

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
              <Route path="/"
                exact element= { <Login/> }
                  />
              <Route path="/Home"
                exact element= { <Home /> }
              />
              <Route path="/Profil"
                exact element= {<Profil />}
              />
              <Route path="/Trending"
                exact element= {<Trending />}
              />
          </Routes>
      </Router>
    </React.StrictMode>
    );
};

export default routes;

