import React from 'react';
import Header from '../../components/Header';
import TrendingInfo from '../../components/TrendingInfo/TrendingInfo';
import styled from 'styled-components';

const ContainerTrends= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 150px;

`

const index = () => {
    return (
    <>
        <Header />
            <ContainerTrends>
                <Header />
                <TrendingInfo />
            </ContainerTrends>
    </>

    );
};

export default index