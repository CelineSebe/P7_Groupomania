import React from 'react';
import colors from '../../utils/style/colors';
import styled from 'styled-components';

const TrendingContainer =styled.div`

background-color: ${colors.secondary};
width: 40vh;
height: 100vh;
border: solid 2px ${colors.secondary};
margin: 20px;
border-radius: 10px;
`


const index = () => {
    return (
        <TrendingContainer>
            
        </TrendingContainer>
    );
};

export default index;