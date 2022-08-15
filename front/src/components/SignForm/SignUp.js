import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors'

const Signup = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
width: 300px;
height: 100px;
line-height: 30px;
margin-top: 90px;

`
const Checkbox = styled.div`
height: 20px;
margin: 20px 0px;
font-size: smaller;`

// const Input = styled.input`
// height: 14px;
// `

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
    return (
        <>
            <Signup>
            <h1 style={{ fontSize: 26, textAlign:"center"}}> Welcome ! </h1>
                <form>
                    <label htmlFor='identifiant'> Identifiant </label>
                    <input type="text" id='identifiant' autoComplete='off'></input>
                    <label htmlFor='password'> Mot de passe </label>
                    <input type="password" id='password' autoComplete='off' ></input>
                    <label htmlFor="confirmation"> Confirmer le mot de passe </label>
                    <input type="password" id="confirmation" autoComplete='off' ></input>

                    <Checkbox style={{display:"inline-flex",flexDirection: "row",alignItems:"center"}}>
                        <input type="checkbox" id="accepted" autoComplete="off" style={{display:"inline-flex",flexDirection: "row", justifyContent:"center", width: 30}}/>
                            <label htmlFor="accepted" style={{display:"inline-flex",flexDirection: "row", justifyContent:"center", width: 300}}>J'accepte les conditions générales</label>
                    </Checkbox>
                    <FormSubmit>
                        <HideButton>
                            <input type="submit" id="createAccount" autoComplete='off' style={{border: "none", backgroundColor: "white"}}/>
                        </HideButton>
                            <LabelForButton htmlFor="createAccount">Créer mon compte</LabelForButton>
                    </FormSubmit>
                </form>
                            
            </Signup>
        </>
    );
};

export default SignUp;