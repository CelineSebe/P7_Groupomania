import React from 'react';
import Card from '../components/Publi/Card';
import styled from 'styled-components'
import CreatePubli from './CreatePubli';


const ThreadContainer = styled.div`
  
    width: 80%;
    margin: 10px;;
`

const Thread = () => {

    const dataUser = {
        user: "Choupi",
        date: Date(),       
    }

    return (
        <ThreadContainer>
            <h1 style={{textAlign: "center"}}> Fil d'actu</h1>
            <CreatePubli />
            <Card user={dataUser.user} date={dataUser.date}/>
            <Card user={dataUser.user} date={dataUser.date}/>
           
            
        </ThreadContainer>
    );
};

export default Thread;