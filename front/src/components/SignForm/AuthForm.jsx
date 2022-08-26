import React from 'react';
import {useRef, useState} from "react";
import Loading from '../Loading';
import { useContext } from 'react';
import AuthContext from '../../store/authContext';

const AuthForm = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [data, setData] = useState();
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //utilisation du contexte
const authCont = useContext(AuthContext);
console.log(authCont.token);

    if(error){
        console.log("true");
    }else{
        console.log("false")
    }

    // return (
    //     <div>
            
    //     </div>
    // );
};

export default AuthForm;


