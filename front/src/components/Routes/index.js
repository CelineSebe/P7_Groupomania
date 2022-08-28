import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { UserContext } from '../UserContext';
// import PrivateRoute from '../PrivateRoute';
// import useFindUser from '../useFindUser';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Login from '../../pages/Login';
import Trending from '../../pages/Trending';
import Error from '../../components/Error/index'
import AuthContext from '../../store/authContext';


function Routing () {

  const authCont = useContext(AuthContext);

  const isLoggedIn = authCont.isLoggedIn;

    return (
      <Router>
          {/* <UserContext.Provider value={{ user, setUser, isLoading }}> */}
            <Routes>
            {!isLoggedIn &&
              <Route exact path="/"
                element= { <Login/> }
                  />
            }
            {isLoggedIn &&
              <Route exact path="/Home" element=
                {
                  // <PrivateRoute>
                    <Home/>
                  // </PrivateRoute>
                }
              />}
              {isLoggedIn &&
              <Route exact path="/Profil" element= 
                {
                // <PrivateRoute>
                  <Profil />
                // </PrivateRoute>
                }
              />}
              {isLoggedIn &&
              <Route exact path="/Trending"
                element= {
                  // <PrivateRoute>
                    <Trending />
                  // </PrivateRoute>
                  }
              />}
            {!isLoggedIn &&
              <Route exact path="*"
                element= {<Error />}
              />
            }
            
          </Routes>
          
          {/* </UserContext.Provider> */}
      </Router>
    );
};

export default Routing;

