
import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const TrendingContainer =styled.div`
align-items: center;
background-color: ${colors.secondary};
opacity: 60%;
text-align: center;
width: 100%;
height: 50vh;
border: solid 2px ${colors.secondary};
border-radius: 5px;
margin: 20px;
`


function TrendingInfo () {
    return (
        <TrendingContainer>
            <h1 style=
                {{fontSize: '15px', 
                padding:5}}> Tendances
            </h1>      
        </TrendingContainer>
    );
};

export default TrendingInfo