import React, { useState } from 'react'
import styled from 'styled-components'
import './index.css'
import logo from '../../assets/Logos/icon-left-font.png'
import colors from '../../utils/style/colors'
import SignUp from '../../components/SignForm/SignUp'
import SignIn from '../../components/SignForm/SignIn'


const Container = styled.div`
  width: 100%;
`

const Connection = styled.div`
  display: flex;
  justify-content: center;
`
const LogoContainer = styled.div`
  position: absolute;
  opacity: 0.9;
`
const Logo = styled.img`
  width: 200px;
  position: relative;
  left: 20px;
  top: 70px;
`
const ConnectContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.seco};
  border-radius: 8px;
  color: black;
  height: 550px;
  width: 500px;
  border: 2px solid ${colors.primary};
  margin-top:70px;
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
      <Container>
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
      </Container>
    </>
  )
}

export default SignupLogin
