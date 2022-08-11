import React from 'react';
import styled from 'styled-components';


const Signin = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 300px;
height: 100px;
line-height: 50px;
margin:50px;`

const SignIn = () => {
    return (
        <div>
            <Signin>
                <h1> Welcome back! </h1>
                <label> Identifiant </label>
                        <input type="text" ></input>
                <label> Mot de passe </label>
                        <input type="password" ></input>
            </Signin>
        </div>
    );
};

export default SignIn;