import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import axios from 'axios';

const Signin = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 300px;
height: 330px;
line-height: 30px;
`

const Checkbox = styled.div`
height: 20px;
width: 300px;
margin: 20px 0px;
line-height: 20px;
font-size: smaller;
`


const FormSubmit = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`
const HideButton = styled.div`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`
const LabelForButton = styled.label`
  width: 200px;
  padding: 10px 0px;
  text-align: center;
  font-size: 18px;
  border-radius: 100px;
  border: 1px solid ${colors.secondary};
  &:hover {
    cursor: pointer;
    background-color: ${colors.secondary};
  }
`

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin (e) {
        e.preventDefault();
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');

        console.log(email, password);
        await axios({
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}api/auth/login`,
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                email,
                password
            },
        })
        .then((res) => {
            console.log(res);
            if(res.data.error) {
                emailError.innerHTML = res.data.error;
                passwordError.innerHTML = res.data.error;
            } else {
                window.location ='/Home';
            }
        })
        .catch((error) => {
            console.log(error.response);
        })
    }
    return (
        
            <Signin>
                <h1 style={{ fontSize: 26, textAlign:"center", padding: 20}}> Welcome back! </h1>
                <form action="" onSubmit={handleLogin} id="sign-up-form">
                    <label htmlFor="email"> Email </label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        autoComplete='off'
                        style={{height: 28}}
                        onChange ={(e) => setEmail(e.target.value)} 
                        value={email} 
                    />
                    <div className="email error"></div>
                    <br />
                    <label htmlFor="password"> Mot de passe </label>
                    <input  type="password" 
                            name="password" 
                            id="password"
                            autoComplete='off' 
                            style={{height: 28}}
                            onChange={(e) => setPassword(e.target.value)} 
                            value={password}/>
                    <div className="password error"></div>
                    <br />
                    <Checkbox style={{display:"inline-flex",flexDirection: "row",alignItems:"center"}}>
                        <input autoComplete="on" 
                               type="checkbox" 
                               id="accepted" 
                               style={{display:"inline-flex",flexDirection: "row", justifyContent:"center", width: 30}}/>
                        <label htmlFor="accepted" 
                               style={{display:"inline-flex",flexDirection: "row", justifyContent:"center", width: 300}}>
                                <span>J'accepte les <a href ="/" target="_blank" rel="noopener noreferrer">
                                conditions générales</a></span></label>
                                <div className="accepted error"></div>
                                <br />
                    </Checkbox>

                    <FormSubmit>
                        <HideButton>
                            <input type="submit" id="connectAccount" autoComplete='off' style={{border: "none", backgroundColor: "white"}}/>
                        </HideButton>
                            <LabelForButton htmlFor="connectAccount" value ="Se connecter">Se connecter</LabelForButton>
                    </FormSubmit>
                </form>
            </Signin>
        
    );
};



export default SignIn;