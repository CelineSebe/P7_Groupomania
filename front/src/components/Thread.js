import React from 'react';
import Card from '../components/Publi/Card';
import styled from 'styled-components'
import CreatePubli from './CreatePubli';
import InfiniteScroll from 'react-infinite-scroller';


const ThreadContainer = styled.div`
  
    width: 70%;
    margin: 0px;
@media screen and (max-width: 1023px){
  width: 60%;}
`

const Thread = () => {

    // const dataUser = {
    //     user: "Choupi",
    //     date: Date(),       
    // }

    return (
        <ThreadContainer>
            <h1 style={{textAlign: "center", fontSize:24}}> News</h1>
            <CreatePubli />
            <div style={{height:"900px", overflow:"auto"}}>
                <InfiniteScroll
                        pageStart={0}
                        loadMore={Card}
                        hasMore={true}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    {<Card/> }
                    {<Card/> }
                    {<Card/> }
                    {<Card/> }
                    {<Card/> }
                    {<Card/> }
                    {<Card/> }
                    {<Card/> }
                </InfiniteScroll>
            </div>
            
{/* <Card user={dataUser.user} date={dataUser.date}/>   */}
            
        </ThreadContainer>
    );
};

export default Thread;