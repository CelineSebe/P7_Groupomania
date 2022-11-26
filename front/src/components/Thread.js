import React, { useEffect } from 'react';
// import colors from '../utils/style/colors';
import Card from '../components/Publi/Card';
import styled from 'styled-components';
import CreatePubli from './CreatePubli';
import InfiniteScroll from 'react-infinite-scroller';
import Loading from '../components/Loading'
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


const MapData = ({ apiCalled, setApiCalled }) => {
    
    let token = JSON.parse(localStorage.getItem('token'));
    
    // se connecter pour récupérer l'userId et le token
    const [postData, setPostData] = useState([])

     useEffect(() => {
        axios({
            method:"get",
            url: `http://localhost:5000/api/publis`,
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
                },
         
            
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }
 ,[apiCalled])

    const isNoPost = postData.length !== 0 ? true : false
    return isNoPost ? (
                <InfiniteScroll>
                    {postData.map((card, index) => (
                    <Card
                        _id = {card._id}
                        userId = {card.userId}
                        description={card.description}
                        imageUrl={card.imageUrl}
                        date={card.date}
                        likes={card.likes}
                        dislikes={card.dislikes}
                        usersLikes={card.usersLikes}
                        usersDislikes={card.usersDislikes}
                        setApiCalled={setApiCalled}
                        index={index}
                    />
                    ))}
                </InfiniteScroll>
        
        ) : (
            <InfiniteScroll>
                {<Card/> }
                {<Card/> }
                {<Card/> }
                {<Card/> }
                {<Card/> }
                {<Card/> }
                {<Card/> }
                {<Card/> }
            </InfiniteScroll>
        )
}

function Feed() {
    const [apiCalled, setApiCalled] = useState(null)
  
    let login = JSON.parse(localStorage.getItem('login'))
  
    // if (!login) {
    //   return <Navigate to="/" />
    // }
  
    return (
        <ThreadContainer>
            <H1Thread> News</H1Thread>
            <CreatePubli setApiCalled={setApiCalled}/>
            <div style={{height:"900px", overflow:"auto"}}>
                <MapData apiCalled={apiCalled} setApiCalled={setApiCalled} />
            </div>
        </ThreadContainer>
      
    )
  }

export default Feed