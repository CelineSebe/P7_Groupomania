import React from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function SignupLogin(){
    const { signOrLogin } = useParams () 

    return(
        <div>
            <h1> Welcome back </h1>
            <Link to="*" style={{ textDecoration: 'none', color: 'black'}}> Se connecter {signOrLogin} </Link>
            <Link to="*" style={{ textDecoration: 'none', color:'black'}}> S'inscrire {signOrLogin} </Link>
        </div>
    );

}

export default SignupLogin