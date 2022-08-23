import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import PrivateRoute from '../../pages/PrivateRoute';
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

    < GlobalStyle > 
          <Routes>
              <Route path="/"
                exact element= { <Login/> }
                  />
              <PrivateRoute path="/Home"
                exact element= { <Home /> }
              />
              <PrivateRoute path="/Profil"
                exact element= {<Profil />}
              />
              <PrivateRoute path="/Trending"
                exact element= {<Trending />}
              />
          </Routes>
    </GlobalStyle>
    
    );
};

export default routes;

