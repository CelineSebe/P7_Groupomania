// import axios from 'axios';

import Routes from "./components/Routes";
import { createGlobalStyle } from 'styled-components';


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
            <Routes />
        </>
    );
};

export default App;