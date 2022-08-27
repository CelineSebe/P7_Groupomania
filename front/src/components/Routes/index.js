import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { UserContext } from '../UserContext';
// import PrivateRoute from '../PrivateRoute';
// import useFindUser from '../useFindUser';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Login from '../../pages/Login';
import Trending from '../../pages/Trending';
import Error from '../../components/Error/index'


function Routing () {

  // const { user, setUser, isLoading } = useFindUser();

    return (
      <Router>
          {/* <UserContext.Provider value={{ user, setUser, isLoading }}> */}
            <Routes>
              <Route exact path="/"
                element= { <Login/> }
                  />
              <Route exact path="/Home" element=
                {
                  // <PrivateRoute>
                    <Home/>
                  // </PrivateRoute>
                }
              />   
              <Route exact path="/Profil" element= 
                {
                // <PrivateRoute>
                  <Profil />
                // </PrivateRoute>
                }
              />
              <Route exact path="/Trending"
                element= {
                  // <PrivateRoute>
                    <Trending />
                  // </PrivateRoute>
                  }
              />
              <Route exact path="*"
                element= {<Error />}
              />
            </Routes>
          {/* </UserContext.Provider> */}
      </Router>
    );
};

export default Routing;

