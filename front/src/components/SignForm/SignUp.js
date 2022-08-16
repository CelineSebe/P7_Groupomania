import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors'
import axios from 'react';

const Signup = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
width: 300px;
height: 170px;
line-height: 30px;
margin-top: 90px;

`
const Checkbox = styled.div`
height: 20px;
width: 300px;
margin: 20px 0px;
line-height: 20px;
font-size: smaller;`

// const Input = styled.input`
// height: 14px;
// `

const FormSubmit = styled.div`
  display: flex;
  justify-content: center;
  line-height: 50px;;
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

const SignUp = () => {
  const [pseudo, setPseudo] =useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ControlPassword, setControlPassword] = useState(''); 

  const handleRegister = async (e) => {

  }
 
    return (
        <>
            <Signup>
            <h1 style={{ fontSize: 26, textAlign:"center"}}> Welcome ! </h1>
                <form action="" onSubmit={handleRegister} id = "signup-form">
                    <label htmlFor='Pseudo'> Pseudo </label>
                    <input type="text" 
                          id='Pseudo' 
                          autoComplete='off' 
                          onChange={(e) => setPseudo(e.target.value)} 
                          value={pseudo}/>
                    <label htmlFor='Email'> Email </label>
                    <input type="email" 
                            id='Email' 
                            autoComplete='off' 
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email}/>
                    <label htmlFor='password'> Mot de passe </label>
                    <input type="password" id='password' 
                            autoComplete='off' 
                            onChange={(e) => setPassword(e.target.value)} 
                            value={password}/>
                    <label htmlFor="controlPassword"> Confirmer le mot de passe </label>
                    <input type="password" 
                            id="controlPassword" 
                            autoComplete='off' 
                            onChange={(e) => setControlPassword(e.target.value)} 
                            value={ControlPassword} />

                    <Checkbox style={{display:"inline-flex",flexDirection: "row",alignItems:"center"}}>
                        <input type="checkbox" 
                               id="accepted" 
                               style={{display:"inline-flex",flexDirection: "row", justifyContent:"center", width: 30}}/>
                        <label htmlFor="accepted" 
                                style= {{display:"inline-flex",flexDirection: "row", justifyContent:"center", width: 300}}>
                                <span>J'accepte les <a href ="/" target="_blank" rel="noopener noreferrer">conditions générales</a></span></label>
                    </Checkbox>
                    <FormSubmit>
                        <HideButton>
                            <input type="submit" value="Valider l'inscription" id="createAccount" autoComplete='off' style={{border: "none", backgroundColor: "white"}}/>
                        </HideButton>
                            <LabelForButton htmlFor="createAccount">Créer mon compte</LabelForButton>
                    </FormSubmit>
                </form>
                            
            </Signup>
        </>
    );
};

export default SignUp;