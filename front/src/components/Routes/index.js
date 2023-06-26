import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Login from '../../pages/Login';
import Settings from '../../pages/Settings';
import Error from '../../components/Error/index'
import AuthContext from '../../store/authContext';


function Routing () {

  const pseudo = localStorage.getItem('pseudo');
  const authCont = useContext(AuthContext);

  const isLoggedIn = authCont.isLoggedIn;

    return (
      <Router>

            <Routes>
            {!isLoggedIn &&
              <Route exact path="/"
                element= { <Login/> }
                  />
             }
            {isLoggedIn &&
              <Route exact path="/" element=
                {
                  <Home/>
                }
              />
              } 
            {isLoggedIn &&
              <Route exact path="/Home" element=
                {
                  <Home/>
                }
              />
              } 
              {isLoggedIn &&
              <Route exact path="/Profil" element= 
                {
                  <Profil user={pseudo}/>
                }
              />
              }
              {isLoggedIn &&
              <Route exact path="/Settings"
                element= {
                    <Settings />
                  }
              />
              }
            {!isLoggedIn &&
              <Route exact path="*"
                element= {<Error />}
              />
            }
          </Routes>
      </Router>
    );
};

export default Routing;

