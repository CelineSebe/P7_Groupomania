import React from 'react'
// import DefaultImage from '../../assets/profile.jpg'
import styled from 'styled-components'
import Publi from '../../components/Publi/index'
import ProfilInfo from '../../components/ProfilInfo/index'
import Header from '../../components/Header'
// import PropTypes from 'prop-types'

const FeedContainer= styled.div`
display: flex;
justify-content: space-between;
// background-color: #F4F3F3;
       `

const ProfilContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width: 200px;
height: 100%;
border: 2px solid #FFD7D7;
border-radius: 15px;
margin: 25px;
padding: 5px;
`
const PostContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
width: 1100px;
background-color:  #ffe1d9;
height: 100vh;
border: 2px solid #FFD7D7;
border-radius: 15px;
margin: 25px 25px 0 25px;
padding: 5px;
`
const TrendContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width: 230px;
height: 80vh;
border: 2px solid #FFD7D7;
border-radius: 15px;
margin: 25px;
padding: 5px;
`
function Home() {
  
  return (
  <>
    <Header />
    <FeedContainer >
      <ProfilContainer style= {{height: "80vh"}} >
        <h1> Profil </h1>
        <div className='Profil'>
          < ProfilInfo />
        </div>
      </ProfilContainer>
      <PostContainer>
        <h1> Fil d'actualités </h1>
        <div className='Publi'>
          <Publi />
        </div>
      </PostContainer>
      <TrendContainer>
        <h1> Trending</h1>
        <div className='Video'>  
          <Publi />
        </div>
      </TrendContainer>
      </FeedContainer>
    </>
    );
}




export default Home
