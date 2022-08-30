import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Login from '../../pages/Login';
import Trending from '../../pages/Trending';
import Error from '../../components/Error/index'
import AuthContext from '../../store/authContext';


function Routing () {

  const dataUser = {
    user: "Choupi",
    date: Date(),  
}
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
              <Route exact path="/Home" element=
                {
                  <Home/>
                }
              />}
              {isLoggedIn &&
              <Route exact path="/Profil" element= 
                {
                  <Profil user={dataUser.user} date={dataUser.date}/>
                }
              />}
              {isLoggedIn &&
              <Route exact path="/Trending"
                element= {
                    <Trending />
                  }
              />}
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

