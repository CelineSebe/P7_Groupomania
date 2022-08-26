import React from 'react-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
// import User from '../../../../back/models/User'

const ProfilContainer = styled.div`
background-color: ${colors.secondary};
width: 40vh;
height: 100vh;
border: solid 2px ${colors.secondary};
margin: 20px;
border-radius: 5px;
`

function ProfilInfo(){


    return(
    <>
        <ProfilContainer>
            <h1 style={{fontSize: '18px', padding:5}}> Profil </h1>
        </ProfilContainer>

    </>
    )
}
export default ProfilInfo