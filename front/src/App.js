// import axios from 'axios';
import React from 'react';
import Routes from "./components/Routes";
import useFindUser from './components/useFindUser';
import { UserContext } from './components/UserContext';

const App = () => {

    const {
        user,
        setUser,
        isLoading
    } = useFindUser();
    
    return (
        <React.StrictMode>
            <UserContext.Provider value={{ user, setUser, isLoading}}>
                <Routes />
            </UserContext.Provider>
        </React.StrictMode>
    );
};

export default App;