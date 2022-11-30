import React, { useEffect } from 'react';
// import colors from '../utils/style/colors';
import Card from '../components/Publi/Card';
import styled from 'styled-components';
import CreatePubli from './CreatePubli';
// import InfiniteScroll from 'react-infinite-scroller';
// import Loading from '../components/Loading'
import { useState } from 'react';
import axios from 'axios';

const ThreadContainer = styled.div`
    width: 60%;
    margin: 0px;
    @media screen and (max-width: 1023px){
    width: 70%;}
    @media screen and (max-width: 730px){
    width: 90%;
    }
`
const H1Thread = styled.h1`
    text-align: center;
    font-size:18px;
    @media screen and (max-width: 730px){
    display: none;
    }
`
const MapData = () => {
    
    let token = JSON.parse(localStorage.getItem('token'));
    
    // se connecter pour récupérer l'userId et le token
    const [postData, setPostData] = useState()

     useEffect(() => {
        axios({
            method:"get",
            url: `http://localhost:5000/api/publis`,
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                },
        })
            .then((res) => {
                setPostData(res.data);
                // console.log(res.data)
            })
            
            .catch((error) => {
                console.log(error);
                alert(
                    'Toutes nos excuses, impossible de se connecter à la base de données'
                  )})
    }
 ,[postData])
console.log(postData)
   if(postData)return(
                <>
                    {postData.map((card) => (
                        <Card image={card.imageUrl} description={card.description} />
                        // <ul key={card._id} style={{flexDirection:"column"}}>
                        // {/* <li> {card.userId} </li> */}
                        // <li style={{width: "100%"}}><img src={card.imageUrl}></img> </li>
                        // <li style={{width: "100%"}}> {card.description} </li>
                        
                        // </ul>
                    ))}
                </>
        
        );
}

function Feed() {
    const [apiCalled, setApiCalled] = useState()

  
    return (
        <ThreadContainer>
            <H1Thread> News</H1Thread>
            <CreatePubli setApiCalled={setApiCalled}/>
            <div style={{height:"900px", overflow:"auto", width:"100%"}}>
                <MapData apiCalled={apiCalled} setApiCalled={setApiCalled} />
            </div>
        </ThreadContainer>
    )
  }

export default Feed