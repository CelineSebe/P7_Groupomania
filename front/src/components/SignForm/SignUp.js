import React from 'react';
import { useContext, useState } from 'react';
import styled from 'styled-components';
// import colors from '../../utils/style/colors';
import axios from 'axios';
import Button from '../Button';
// import AuthContext from '../../store/authContext';


const Signup = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 300px;
height: 370px;
line-height: 18px;
font-size: 16px;
`
const Checkbox = styled.div`
height: 20px;
width: 300px;
margin: 5px 0px;
line-height: 10px;
font-size: smaller;`


const SignUp = () => {
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ControlPassword, setControlPassword] = useState(''); 

 
//utilisation du contexte
// const authCont = useContext(AuthContext);
// console.log("authCont");
// console.log(authCont)

// console.log(email, password);

  async function handleRegister (e) {
      e.preventDefault();
      const accepted = document.getElementById('accepted');
      const pseudoError = document.querySelector('.pseudo.error');
      const emailError = document.querySelector('.email.error');
      const passwordError = document.querySelector('.password.error');
      const passwordConfirmError = document.querySelector('.passwordConfirm.error');
      const acceptedError = document.querySelector('.accepted.error');

    pseudoError.innerHTML="";
    emailError.innerHTML="";
    passwordError.innerHTML="";
    passwordConfirmError.innerHTML = "";
    acceptedError.innerHTML = "";

      if (password !== ControlPassword || !accepted.checked 
          || pseudo.length === 0 || email.length === 0 || password.length === 0){
          if (password !== ControlPassword)
          passwordConfirmError.innerHTML ="Les mots de passe ne correspondent pas";

          if (!accepted.checked)
          acceptedError.innerHTML = "Veuillez valider les conditions générales";

          if(pseudo.length === 0 )
          pseudoError.innerHTML = "Veuillez remplir le champs requis";
    
          if( email.length === 0 )
          emailError.innerHTML = "Veuillez remplir le champs requis";
   
          if( password.length === 0 )
          passwordError.innerHTML = "Veuillez remplir les informations requises";
      }else {
        
        await axios({
          method: "post",
          url: "http://localhost:5000/api/auth/signup",
          data: ({
            pseudo,
            email,
            password
          })
        })
        .then((res) => {
          
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
                          value={pseudo} 
                          style={{height: 24}}/>
                    <div className="pseudo error" style={{color:"red", fontSize:12, fontWeight:"bold"}}></div>  
                    <br />
                    <label htmlFor='Email'> Email </label>
                    <input type="email" 
                            id='Email' 
                            autoComplete='off' 
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email}
                            style={{height: 24}}/>
                    <div className="email error" style={{color:"red", fontSize:12, fontWeight:"bold"}}></div>
                    <br />
                    <label htmlFor='password'> Mot de passe </label>
                    <input type="password" 
                            id='password' 
                            autoComplete='off' 
                            onChange={(e) => setPassword(e.target.value)} 
                            value={password}
                            style={{height: 24}}/>
                    <div className="password error" style={{color:"red", fontSize:12, fontWeight:"bold"}}></div>
                    <br />
                    <label htmlFor="ControlPassword"> Confirmer le mot de passe </label>
                    <input type="password" 
                            id="ControlPassword" 
                            autoComplete='off' 
                            onChange={(e) => setControlPassword(e.target.value)} 
                            value={ControlPassword} 
                            style={{height: 24}}/>
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
                    <Button type={"submit"} onClick={ () => {} } >
                        Créer mon compte 
                    </Button>
                
                </form>                            
            </Signup>
        </>
    );
};

export default SignUp;