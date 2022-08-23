import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContext } from '../UserContext';
import PrivateRoute from '../../pages/PrivateRoute';
import useFindUser from '../useFindUser';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Login from '../../pages/Login';
import Trending from '../../pages/Trending';



function Routing () {

  const { user, setUser, isLoading } = useFindUser();

    return (
      <Router>

          <UserContext.Provider value={{ user, setUser, isLoading }}>
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
          </UserContext.Provider>
      </Router>
    );
};

export default Routing;

