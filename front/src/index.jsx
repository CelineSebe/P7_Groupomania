import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import './index.css';
import './utils/style/colors'
import { AuthContextProvider } from './store/authContext';

// import { Provider } from 'react-redux';
// import {configureStore} from '@reduxjs/toolkit';
// import allReducers from './reducers';


// import colors from './utils/style/colors';

// const store = configureStore(
//  {reducer: allReducers}
// )

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(

  
  <React.StrictMode >
    <AuthContextProvider>
      <App />
    </AuthContextProvider>  
  </React.StrictMode>
)



