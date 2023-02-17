import React, { useState } from 'react'
import styled from 'styled-components'
import './index.css'
import logo from '../../assets/Logos/icon-left-font-monochrome-black.png'
import colors from '../../utils/style/colors'
import SignUp from '../../components/SignForm/SignUp'
import SignIn from '../../components/SignForm/SignIn'
import bg from './bg.jpeg'

const Bg = styled.div`
  width: 100%;
  height: 100%;
`
const BgLeft = styled.img`
  /* max-width: 1512px; */
  /* display: flex; */
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: absolute;
`
const Connection = styled.div`
  display: flex;
  justify-content: center;

  /* flex-direction: column; */
  /* background-color: ${colors.secondary}; */
  /* position: relative; */
  /* top: 50%; */
  /* left: 50%; */

  /* color: transparent; */
`
const LogoContainer = styled.div`
  position: absolute;
  opacity: 0.9;
`
const Logo = styled.img`
  width: 170px;
  padding: 10px 0px;
  position: relative;
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

function SignupLogin(props) {
  const [signUpModal, setSignUpModal] = useState(true)
  const [signInModal, setSignInModal] = useState(false)

  const handleModals = (e) => {
    if (e.target.id === 'register') {
      setSignInModal(false)
      setSignUpModal(true)
    } else if (e.target.id === 'login') {
      setSignInModal(true)
      setSignUpModal(false)
    }
  }
  return (
    <>
      <Bg>
        <BgLeft src={bg} />
        <Connection>
          <LogoContainer>
            <Logo src={logo} alt="logo entreprise" />
            <ConnectContent>
              <ul>
                <li
                  onClick={handleModals}
                  id="register"
                  className={signUpModal ? 'active-btn' : null}
                >
                  S'inscrire
                </li>
                <li
                  onClick={handleModals}
                  id="login"
                  className={signInModal ? 'active-btn' : null}
                >
                  Se connecter
                </li>
              </ul>
              {signUpModal && <SignUp />}
              {signInModal && <SignIn />}
            </ConnectContent>
          </LogoContainer>
        </Connection>
      </Bg>
    </>
  )
}

export default SignupLogin
