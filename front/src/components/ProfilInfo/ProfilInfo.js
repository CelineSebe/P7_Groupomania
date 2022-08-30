import React from 'react-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ProfilContainer = styled.div`
border-color: ${colors.secondary};
width: 100%;
height: 50vh;
border: solid 2px ${colors.secondary};
border-radius: 5px;
margin: 20px;
&:hover{
    background-color:white ;
    cursor: pointer;
}
`

function ProfilInfo(props){


    return(
    <>
        <ProfilContainer>
            <h1 style=
                {{textAlign:"center", 
                padding: 20, 
                fontSize: '24px', 
                }}> Profil
            </h1>
        </ProfilContainer>

    </>
    )
}
export default ProfilInfo