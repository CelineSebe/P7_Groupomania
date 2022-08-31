import React, { useContext } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import ProfilInfo from '../../components/ProfilInfo/ProfilInfo';
import UpdateProfil from '../../components/ProfilInfo/UpdateProfil';
import AuthContext from '../../store/authContext';
import colors from '../../utils/style/colors';

const ProfilInfoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    @media screen and (max-width: 1023px){
    display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}
`
const ProfilPage = styled.div`

display:flex; 
flex-direction: column;
justify-content: flex-start; 
align-items:center; 
margin: 150px 30px;
position: fixed; 
width: 100%;
height: 50%;

`


function Profil (props){
//  const authCont = useContext(AuthContext)
// console.log(props);

let userId = JSON.parse(localStorage.getItem('userId'));
let token= JSON.parse(localStorage.getItem('token'))





    return(
        <>
        <Header />
				<ProfilPage>

                {/* <h1> Bienvenue {props.user} !</h1> */}
                
                    <ProfilInfoContainer>
                            <UpdateProfil />
                            <ProfilInfo/>
                    </ProfilInfoContainer>
                    {/* <p> Nous sommes le {props.date}</p> */}
                </ProfilPage>

        </>

    )
}

export default Profil