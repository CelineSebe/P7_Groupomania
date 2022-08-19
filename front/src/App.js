import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Routes from "./components/Routes";
import { IdContext } from "./components/AppContext";
import { useDispatch } from 'react-redux';
import { getUser } from "./actions/user.actions";


const App = () => {
    const [id, setId] = useState(null);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const fetchToken = async (id) => {
            
    //         await axios({
    //             method: "get",
    //             url: `${process.env.REACT_APP_API_URL}`,
    //         })
    //         .then((res) => {
    //             setId (res.data);
    //         })
    //         .catch((err) => console.log(err));
    //     };
    //     fetchToken();

    //     if(id) dispatch(getUser(id))
    // }, [id]);

    return (
        <IdContext.Provider value={id}>
            <Routes />
        </IdContext.Provider>
    );
};

export default App;