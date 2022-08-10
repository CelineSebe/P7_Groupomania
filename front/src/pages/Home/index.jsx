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
background-color: #F4F3F3;
       `

const ProfilContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width: 200px;
height: 80vh;
margin: 40px;`

const ProfilContent = styled.div`
border: 2px solid #FFD7D7;
border-radius: 15px;
margin: 25px;
padding: 5px;`


const PostContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
width: 1100px;
margin: 25px 25px 0 25px;
padding: 5px;`
  
const PubliContent= styled.div`
background-color:  #ffe1d9;
height: 100vh;
border: 2px solid #FFD7D7;
border-radius: 15px;
`
const TrendContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
margin: 25px;
padding: 5px;
`
const TrendContent = styled.div`
width: 230px;
height: 80vh;
border: 2px solid #FFD7D7;
border-radius: 15px;`


function Home() {
  
  return (
  <>
    <Header />
    <FeedContainer >
      <ProfilContainer style= {{height: "80vh"}} >
        <h1> Profil </h1>
        <ProfilContent>
          < ProfilInfo />
        </ProfilContent>
      </ProfilContainer>
      <PostContainer>
        <h1> Fil d'actualités </h1>
        <PubliContent>
          <Publi />
        </PubliContent>
      </PostContainer>
      <TrendContainer>
        <h1> Trending</h1>
        <TrendContent>  
          <Publi />
        </TrendContent>
      </TrendContainer>
      </FeedContainer>
    </>
    );
}




export default Home
