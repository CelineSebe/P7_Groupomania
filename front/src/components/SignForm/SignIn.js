import React, { useState } from 'react'
import styled from 'styled-components'
// import AuthContext from '../../store/authContext';
// import Test from '../Test';
import Button from '../Button'
import axios from 'axios'

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

const SignIn = () => {
  const [pseudo, setPseudo] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //utilisation du contexte
  // const authCont = useContext(AuthContext);
  // console.log("authCont");
  // console.log(AuthContext);
  console.log(email, password)

  async function handleLogin(e) {
    e.preventDefault()
    const accepted = document.getElementById('accepted')
    const emailError = document.querySelector('.email.error')
    const passwordError = document.querySelector('.password.error')
    const acceptedError = document.querySelector('.accepted.error')

    emailError.innerHTML = ''
    passwordError.innerHTML = ''
    acceptedError.innerHTML = ''

    if (!accepted.checked)
      acceptedError.innerHTML = 'Veuillez valider les conditions générales'

    if (email.length === 0)
      emailError.innerHTML = 'Veuillez remplir le champs requis'

    if (password.length === 0)
      passwordError.innerHTML = 'Veuillez remplir les informations requises'

    if (accepted.checked && email.length > 0 && password.length > 0) {
      // se connecter pour récupérer l'userId et le token
      await axios({
        method: 'post',
        url: 'http://localhost:5000/api/auth/login',
        data: {
          email,
          password,
        },
      })
        .then((res) => {
          localStorage.setItem('pseudo', JSON.stringify(res.data.pseudo))
          localStorage.setItem('userId', JSON.stringify(res.data.userId))
          localStorage.setItem('token', JSON.stringify(res.data.token))
          localStorage.setItem('role', JSON.stringify(res.data.role))
          console.log('role', res.data)
          window.location = './Home'
        })
        .catch((error) => {
          window.location = `*`
          console.log(error)
        })
    }
  }

  return (
    <>
      <Signin>
        <h1 style={{ fontSize: 26, textAlign: 'center', padding: 20 }}>
          {' '}
          Welcome back!{' '}
        </h1>
        <form action="" onSubmit={handleLogin} id="sign-up-form">
          <label htmlFor="email"> Email </label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            style={{ height: 28 }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div
            className="email error"
            style={{ color: 'red', fontSize: 12, fontWeight: 'bold' }}
          ></div>
          <br />
          <label htmlFor="password"> Mot de passe </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            style={{ height: 28 }}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div
            className="password error"
            style={{ color: 'red', fontSize: 12, fontWeight: 'bold' }}
          ></div>
          <br />
          <Checkbox
            style={{
              display: 'inline-flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <input
              autoComplete="on"
              type="checkbox"
              id="accepted"
              style={{
                display: 'inline-flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: 30,
              }}
            />
            <label
              htmlFor="accepted"
              style={{
                display: 'inline-flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: 300,
              }}
            >
              <span>
                J'accepte les{' '}
                <a href="/" target="_blank" rel="noopener noreferrer">
                  conditions générales
                </a>
              </span>
            </label>
          </Checkbox>
          <div
            className="accepted error"
            style={{
              display: 'flex',
              color: 'red',
              fontSize: 12,
              fontWeight: 'bold',
            }}
          ></div>
          <br />
          <Button type={'submit'} onClick={() => {}}>
            Se connecter
          </Button>
        </form>
      </Signin>
    </>
  )
}

export default SignIn
