// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Routes from "./components/Routes";
import { createGlobalStyle } from 'styled-components';
import { UidContext } from './components/AppContext';
import axios from 'axios';

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0px;
      font-family: "Lato", sans-serif;
      box-sizing: border-box;
    }
`

const App = () => {
    
//     const [uid, setUid] = useState(null);

//     useEffect( () => {
//         const fetchToken = async() => {
//         await axios({
//             method:"post",
//             url: `${process.env.REACT_APP_API_URL}api/auth/Login`,
//         })
//         .then((res) => setUid(res.data.json()))
//         .catch((err) => console.log("No token"))
//     };
//     fetchToken();
// }, []);

    return (
        <> 
        
        <GlobalStyle />     
        <Routes />
        
        </>

    );
};

export default App;