import  React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import axios from 'react';

const Signup = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
width: 300px;
height: 370px;
line-height: 20px;
font-size: 18px;;

`
const Checkbox = styled.div`
height: 20px;
width: 300px;
margin: 5px 0px;
line-height: 10px;
font-size: smaller;`


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
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ControlPassword, setControlPassword] = useState(''); 


  async function handleRegister (e) {
      e.preventDefault();
      const accepted = document.getElementById('accepted');
      const pseudoError = document.querySelector('.pseudo.error');
      const emailError = document.querySelector('.email.error');
      const passwordError = document.querySelector('.password.error');
      const passwordConfirmError = document.querySelector('.passwordConfirm.error');
      const acceptedError = document.querySelector('.accepted.error');

    passwordConfirmError.innerHTML = "";
    acceptedError.innerHTML = "";

      if (password !== ControlPassword || !accepted.checked){
          if (password !== ControlPassword)
          passwordConfirmError.innerHTML ="Les mots de passe ne correspondent pas";

          if (!accepted.checked)
          acceptedError.innerHTML = "Veuillez valider les conditions générales";
      }else {
        console.log(axios);
        await axios({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}api/auth/signup`,
          data: {
            email,
            password,
          }
        })
        .then((res) => {
          console.log(res); 
          if (res.data.errors){
            pseudoError.innerHTML = res.data.errors.pseudo;
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML =res.data.errors.password;
          }
        })
        .catch((err) => console.log(err));
      }
  };
 
    return (
        <>
            <Signup>
            <h1 style={{ fontSize: 26, textAlign:"center", padding: 15}}> Welcome ! </h1>
                <form action="" onSubmit={handleRegister} id = "signup-form">
                    
                    <label htmlFor='Pseudo'> Pseudo </label>
                    <input type="text" 
                          id='Pseudo' 
                          autoComplete='off' 
                          onChange={(e) => setPseudo(e.target.value)} 
                          value={pseudo}/>
                    <div className="pseudo error"></div>  
                    <br />
                    <label htmlFor='Email'> Email </label>
                    <input type="email" 
                            id='Email' 
                            autoComplete='off' 
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email}/>
                    <div className="email error"></div>
                    <br />
                    <label htmlFor='password'> Mot de passe </label>
                    <input type="password" 
                            id='password' 
                            autoComplete='off' 
                            onChange={(e) => setPassword(e.target.value)} 
                            value={password}/>
                    <div className="password error"></div>
                    <br />
                    <label htmlFor="ControlPassword"> Confirmer le mot de passe </label>
                    <input type="password" 
                            id="ControlPassword" 
                            autoComplete='off' 
                            onChange={(e) => setControlPassword(e.target.value)} 
                            value={ControlPassword} />
                    <div className="passwordConfirm error" style={{color:"red", fontSize:12, fontWeight:"bold"}}></div>
                    <br />
                    <Checkbox style={{display:"inline-flex",flexDirection: "row",alignItems:"center"}}>
                        <input type="checkbox" 
                               id="accepted" 
                               style={{display:"inline-flex",flexDirection: "row", justifyContent:"center", width: 30}}/>
                        <label htmlFor="accepted" 
                                style= {{display:"inline-flex",flexDirection: "row", justifyContent:"center", width: 300}}>
                                <span>J'accepte les <a href ="/" target="_blank">conditions générales</a></span></label>
                    </Checkbox>
                    <div className="accepted error" style={{color:"red", fontSize:12, fontWeight:"bold"}}></div>
                    <br />                   
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