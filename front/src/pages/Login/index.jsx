import React, { useState } from 'react';
// import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './index.css'
import logo from '../../assets/Logos/icon-left-font-monochrome-black.png'
import colors from '../../utils/style/colors'
import SignUp from '../../components/SignForm/SignUp';
import SignIn from '../../components/SignForm/SignIn';

const ConnectionForm = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: ${colors.secondary};
height: 100vh;
`
const LogoContainer = styled.div`
display: flex;   
flex-direction: column;
align-items: center;
width: 50vh;
opacity: 95%;
`
const Logo = styled.img`
width: 170px;
position: absolute;
top: 10px;
left: 550px;
`
const ConnectContent = styled.div`
display: flex;   
flex-direction: column;
align-items: center;
background-color: white;
border-radius: 8px;
color: black;
height: 500px;
width: 500px;
padding: 20px;
`


function SignupLogin () {
    // const { signOrLogin } = useParams () 
    const [signUpModal, setSignUpModal] = useState(true);
    const [signInModal, setSignInModal] = useState(false);

    const handleModals = (e) => {
        if (e.target.id === "register"){
            setSignInModal(false);
            setSignUpModal(true);
        }else if (e.target.id === "login"){
            setSignInModal(true);
            setSignUpModal(false);
        }       
    }

    return(
        <ConnectionForm>
            <LogoContainer>
                <Link to="/">
                    <Logo src={logo} alt="logo entreprise"/>
                </Link>
                <ConnectContent>
                        <ul>
                            <li onClick={handleModals} id="register" className={signUpModal ? "active-btn" : null}>S'inscrire</li>
                            <li onClick={handleModals} id="login" className={signInModal ? "active-btn" : null}>Se connecter</li>
                        </ul>
                        {signUpModal && < SignUp />}
                        {signInModal && < SignIn />}
                </ConnectContent>
            </LogoContainer>
        </ConnectionForm>
    );
}

export default SignupLogin