import React from 'react';
import styled from 'styled-components';

const Signup = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 300px;
height: 100px;
line-height: 40px;
margin: 50px;
`



const SignUp = () => {
    return (
        <>
            <Signup>
            <h1> Welcome ! </h1>
            <label> Identifiant </label>
                                <input ></input>
                            <label> Mot de passe </label>
                                <input type="password" ></input>
                            <label> Confirmer le mot de passe </label>
                                <input type="password" ></input>
            </Signup>
        </>
    );
};

export default SignUp;