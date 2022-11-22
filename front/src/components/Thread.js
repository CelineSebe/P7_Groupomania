import React from 'react';
import Card from '../components/Publi/Card';
import styled from 'styled-components'
import CreatePubli from './CreatePubli';
import InfiniteScroll from 'react-infinite-scroller';
import Loading from '../components/Loading'

const ThreadContainer = styled.div`
    width: 60%;
    margin: 0px;
    @media screen and (max-width: 1023px){
    width: 70%;}
    @media screen and (max-width: 730px){
    width: 90%;
    }
`


const Thread = () => {


    return (
        <ThreadContainer>
            <h1 style={{textAlign: "center", fontSize:18}}> News</h1>
            <CreatePubli />
            <div style={{height:"900px", overflow:"auto"}}>
                <InfiniteScroll
                        pageStart={0}
                        loadMore={Card}
                        hasMore={true}
                        loader={<div className="loader" key={0}><Loading/></div>}
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