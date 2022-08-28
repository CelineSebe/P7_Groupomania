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


function Profil (){
//  const authCont = useContext(AuthContext)


    return(
        <>
        <Header />
				<ProfilPage>

                <h1> Profil de</h1>
                <ProfilInfoContainer>
                        <UpdateProfil />
                    
                        <ProfilInfo />
                </ProfilInfoContainer>
                </ProfilPage>

        </>

    )
}

export default Profil