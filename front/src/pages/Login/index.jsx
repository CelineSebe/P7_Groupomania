import React from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/Logos/icon-left-font-monochrome-black.png'

const Connection= styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #FFD7D7;
width: 100vh;
height: 100vh;
`
const LogoContainer = styled.div
`display: flex;   
flex-direction: column;
align-items: center;
width: 50vh;
opacity: 80%
`
const Logo = styled.img`
    width: 150px;
`
const ConnectContent = styled.div`
display: flex;   
flex-direction: column;
align-items: center;
     background-color: white;
     color: #4E5166;
     height: 500px;
     width: 500px;
`
const Signup = styled.div`
    width: 300px;
    height: 100px;
`
const LogIn = styled.div`
    width: 300px;
    height: 100px;
`

function SignupLogin(){
    const { signOrLogin } = useParams () 

    return(
        <Connection>
            <LogoContainer>
                <Link to="">
                    <Logo src={logo} alt="logo entreprise"/>
                </Link>
                <ConnectContent>
                    <h1> Welcome back! </h1>
                        <Signup>
                            
                        </Signup>
                        <LogIn>

                        </LogIn>
                    <Link to="*" style={{ textDecoration: 'none', color: 'black'}}> Se connecter {signOrLogin} </Link>
                    <Link to="*" style={{ textDecoration: 'none', color:'black'}}> S'inscrire {signOrLogin} </Link>
                </ConnectContent>
            </LogoContainer>
        </Connection>
    );

}

export default SignupLogin