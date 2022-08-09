import React from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/Logos/icon-left-font-monochrome-black.png'
import colors from '../../utils/style/colors'

const Connection= styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: ${colors.secondary};
width: 100vh;
height: 100vh;
`
const LogoContainer = styled.div`
display: flex;   
flex-direction: column;
align-items: center;
width: 50vh;
opacity: 80%;
`
const Logo = styled.img`
    width: 150px;
    position: absolute;
    top: 30px;
    left: 160px;
`
const ConnectContent = styled.div`
        display: flex;   
        flex-direction: column;
        align-items: center;
     background-color: white;
     color: ${colors.tertiary};
     height: 500px;
     width: 500px;
     padding: 20px;
`
const Signup = styled.div`
    width: 300px;
    height: 100px;
`
const LogIn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
                            {/* <label> Identifiant </label>
                                <input ></input>
                            <label> Mot de passe </label>
                                <input type="password" ></input>
                            <label> Confirmer le mot de passe </label>
                                <input type="password" ></input> */}
                        </Signup>
                        <LogIn>
                            <label> Identifiant </label>
                            <input ></input>
                            <label> Mot de passe </label>
                            <input type="password" ></input>
                        </LogIn>
                </ConnectContent>
            </LogoContainer>
        </Connection>
    );

}

export default SignupLogin