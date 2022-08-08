import React from 'react'
// import DefaultImage from '../../assets/profile.jpg'
import styled from 'styled-components'
import Publi from '../../components/Publi/index'
// import Profil from '../Profil/index'
// import Header from '../../components/Header'
// import Footer from '../../components/Footer'
// import PropTypes from 'prop-types'

const Page = styled.div`
display: flex;
flex-direction: column;
`

const FeedContainer= styled.div`
display: inline-flex;
justify-content: space-around;
background-color: #F4F3F3;

       `


function Home() {
  
  return (
  <Page >
    <FeedContainer >
      <div className='ProfilContainer'>
        <h1> Profil </h1>
        <div className='Profil'>
        </div>
      </div>
      <div className='PostContainer'>
        <h1> Fil d'actualités </h1>
        <div className='Publi'>
          <Publi />
          <Publi />
          <Publi />
          <Publi />
        </div>
      </div>
      <div className='VideoContainer'>
        <h1> Features videos </h1>
        <div className='Video'>  
        </div>
      </div>
      </FeedContainer>
    </Page>
    );
}




export default Home
