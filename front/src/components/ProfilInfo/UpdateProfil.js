import React from 'react';
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ProfilContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: ${colors.secondary};
width: 600px;
height: 50vh;
/* width: 100%;
height: 100%; */
border: solid 2px ${colors.secondary};
border-radius: 5px;
margin: 20px;
`
const ImgContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width:100%;

`

const UpdateProfil = ({imageUrlUser}) => {
    return (
        <ProfilContainer>
			<h1 style={{fontSize:"24px", padding:20, textAlign: "center"}}> 
			Photo de profil </h1>
            <ImgContainer>
                <img src={imageUrlUser} alt="photo de profil"></img>
                <button style={{position:'absolute', bottom: 0}}> Modifier </button>
            </ImgContainer>
        </ProfilContainer>
    );
};

export default UpdateProfil;