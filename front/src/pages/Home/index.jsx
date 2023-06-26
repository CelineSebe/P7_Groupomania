import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import Thread from '../../components/Thread'
import AuthContext from '../../store/authContext'
import { useContext } from 'react'



const FeedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 60px;
  width: 100%;
  background-color: #f4f3f3;

  @media screen and (max-width: 1023px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media screen and (max-width: 730px) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }
`


const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 10px 10px;
  @media screen and (max-width: 1023px) {
    margin: 0px 0px;
    width: 100%;
    &:nth-child(2) {
      order: 3;
    }
  }
`


function Home(props) {
  const authCont = useContext(AuthContext)
  const isLoggedIn = authCont.isLoggedIn

  return (
    <>
      <Header />
      <FeedContainer>
        <PostContainer>
          <Thread />
        </PostContainer>
      </FeedContainer>
    </>
  )
}

export default Home
