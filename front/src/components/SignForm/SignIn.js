import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import colors from '../../utils/style/colors';
import AuthContext from '../../store/authContext';
import Test from '../Test';
import Button from '../Button';
import Home from '../../pages/Home'

const Signin = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 300px;
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

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [data, setData] = useState();
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


//utilisation du contexte
const authCont = useContext(AuthContext);
console.log("authCont.login");
console.log(authCont)

    async function handleLogin (e) {
        e.preventDefault();
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');
        const acceptedError = document.querySelector('.accepted.error');
        
        // emailError.innerHTML = data.error;
        //         passwordError.innerHTML = data.error;
        
        // if (setEmail().length === 0 || setError().length === 0){
        //     return
        // }
        // const regExEmail = (value) =>{
        //     return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
        // }

        // if(!regExEmail(setEmail)){
        //     return;
        // }

        // if (!acceptedError.checked)
        // {
        //     return acceptedError.innerHTML = "Veuillez valider les conditions générales";
        // }
         

        console.log(email, password);
        // await axios({
        //     method: 'post',
        //     url: `${process.env.REACT_APP_API_URL}api/auth/login`,
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     data: {
        //         email,
        //         password
        //     },
        // })
        // .then((res) => {
        //     console.log(res);
        //     if(res.data.error) {
        //         emailError.innerHTML = res.data.error;
        //         passwordError.innerHTML = res.data.error;
        //     } else {
                
        //         window.location ='/Home';
        //     }
        // })
        // .catch((error) => {
        //     console.log(error.response);
        // })
        
        // se connecter pour récupérer l'userId et le token

        const fetchHandler = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                body: JSON.stringify({
                    email,
                    password,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

        const dataResponse = await response.json();

        setIsLoading(false);

            if(response.ok){
        
                console.log("dataresponse");
                console.log(dataResponse);

                setData(dataResponse);

                console.log("token");
                console.log(dataResponse.token);
                authCont.login(dataResponse.token, dataResponse.userId);

            }else{
                
                setError(
                    {
                        title: "echec de l'authentification",
                        message: dataResponse.error,
                    });
                             
            }
        }catch{ 
                console.log("-->error");  
                console.log(error);   
                
        }};
        fetchHandler();
        
    }

   
    return (
        
        <>
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
                        {/* <HideButton>
                            <input type="submit" id="connectAccount" autoComplete='off' style={{border: "none", backgroundColor: "white"}}/>
                        </HideButton> */}
                            {/* <LabelForButton htmlFor="connectAccount" value ="Se connecter">Se connecter</LabelForButton> */}
                        <Link to="/Home">
                            <Button 
                            type={"submit"}
                            onClick={authCont.login}> Se connecter </Button>
                        </Link>
                    </FormSubmit>
                </form>
                
            </Signin>
            </>
        
    );
};



export default SignIn;