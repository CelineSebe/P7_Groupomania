import React from 'react'
// import DefaultImage from '../../assets/profile.jpg'
import styled from 'styled-components'
// import Publi from '../../components/Publi/index'
import ProfilInfo from '../../components/ProfilInfo/ProfilInfo'
import Header from '../../components/Header'
import TrendingInfo from '../../components/TrendingInfo/TrendingInfo'
import Thread from '../../components/Thread'
import AuthContext from '../../store/authContext'
import { useContext } from 'react'

// import PropTypes from 'prop-types'

const FeedContainer= styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
position: fixed;
top:60px;
width: 100%;
height: 100%;
background-color: #F4F3F3;

  @media screen and (max-width: 1023px){
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}

  @media screen and (max-width: 730px){
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}
`
const ProfilContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 300px;
height: 60vh;
margin: 25px 10px;
  @media screen and (max-width: 1023px)
  {
    height:12%;
    font-size: 8px;
    margin: 0px;
    &:nth-child(1)
    {
        order: 1;
    }
  }
  @media screen and (max-width: 730px){
    display: none;
  }
  `

const PostContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width:70%;
margin: 10px 20px;
@media screen and (max-width: 1023px){
  margin: 0px 0px;
  width: 100%;
    &:nth-child(2)
    {
        order: 3;
    }
}

`
const TrendContainer = styled.div `
display: none;
flex-direction: column;
align-items: center;
width: 300px;
height: 50vh;
margin: 25px 50px;
@media screen and (max-width: 1023px){
  display:flex;
  height:12%;
    font-size: 8px;
    margin: 0px;
&:nth-child(3)
{
    order: 2;
}
}
`


function Home(props) {

  // const authCont = useContext(AuthContext);
  // const isLoggedIn = authCont.isLoggedIn;

  return (
  <> 
    <Header/>
      <FeedContainer >

        <ProfilContainer > 
            < ProfilInfo/>
        </ProfilContainer>

        <PostContainer>
          < Thread />
        </PostContainer>
        
        <TrendContainer>
            <TrendingInfo />
        </TrendContainer>

      </FeedContainer> 
  </>
    );
}

export default Home


