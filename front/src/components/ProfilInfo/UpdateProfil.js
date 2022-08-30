import React from 'react';
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ProfilContainer = styled.div`
background-color: ${colors.secondary};
width: 600px;
height: 50vh;
border: solid 2px ${colors.secondary};
border-radius: 5px;
margin: 20px;
`

const UpdateProfil = () => {
    return (
        <ProfilContainer>
			<h1 style={{fontSize:"24px", padding:20, textAlign: "center"}}> 
			Photo de profil </h1>           
        </ProfilContainer>
    );
};

export default UpdateProfil;