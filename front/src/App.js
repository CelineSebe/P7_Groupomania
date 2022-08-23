// import axios from 'axios';
import React from 'react';
import Routes from "./components/Routes";
import useFindUser from './components/useFindUser';
import { createGlobalStyle } from 'styled-components';
import { UserContext } from './components/UserContext';

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0px;
      font-family: "Lato", sans-serif;
      box-sizing: border-box;
    }
`

const App = () => {
    
    return (
        <>
        <GlobalStyle />
        <React.StrictMode>      
            <Routes />
        </React.StrictMode>
        </>
    );
};

export default App;