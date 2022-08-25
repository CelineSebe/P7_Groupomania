import React, { useState } from 'react';
import styled from 'styled-components'
import './index.css'
import logo from '../../assets/Logos/icon-left-font-monochrome-black.png'
import colors from '../../utils/style/colors'
import SignUp from '../../components/SignForm/SignUp';
import SignIn from '../../components/SignForm/SignIn';


const ConnectionForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: ${colors.secondary};
align-items: center;
height:100vh;
`
const LogoContainer = styled.div`
position: absolute;
opacity: 95%;
`
const Logo = styled.img`
width: 170px;
padding: 10px 0px;
position:relative;
left: 30px;
`
const ConnectContent = styled.div`
display: flex;   
flex-direction: column;
align-items: center;
background-color: white;
border-radius: 8px;
color: black;
height: 550px;
width: 500px;
`

function SignupLogin (props) {
   
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
                <Logo src={logo} alt="logo entreprise"/>
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