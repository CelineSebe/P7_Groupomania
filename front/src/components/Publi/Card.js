import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import assets from '../../assets/user-solid.svg'
import { dateFormat } from '../../utils/DateFormat'
import {
  MDBCard,
  MDBCardBody,
  //   MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit'
import ButtonSuppr from '../ButtonSuppr'
import ButtonModify from '../ButtonModify'

const CardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: max-content;
  border: solid 3px ${colors.secondary};
  margin: 20px 0px;
  padding: 0px;
  border-radius: 20px;
  background-color: white;
`
const Head = styled.header`
  display: flex;
  width: 100%;
  height: 30px;
  margin: 8px;
  padding-right: 10px;
  border-radius: 20px 20px 0px 0px;
`

const ProfilImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  border-radius: 50px;
`

const LabelPostImg = styled.img`
  height: 100%;
  border-radius: 50px;
`
const Main = styled.div`
  width: 100%;
  height: auto;
  border-radius: 15px;
  &:hover {
    background-color: #f8f8f8;
    cursor: pointer;
  }
`
const ButtonLign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
`
const PostCreation = styled.div`
  font-size: 12px;
  padding-top: 13px;
  margin: 0;
`

const Card = ({
  key,
  userId,
  pseudo,
  description,
  imageUrl,
  likes,
  usersLikes,
  date,
  comments,
  setApiCalled,
}) => {
  //   const [isLoadingCard, setisLoadingCard] = useState(false)
  // const authCont = useContext(AuthContext);
  // const isLoggedIn = authCont.isLoggedIn;
  const [isModif, setIsModif] = useState(false)

  //   const [postUser, setPostUser] = useState()

  //   useEffect(() => {
  //     // var myHeaders = new Headers()
  //     // let myInit = {
  //     //   method: 'GET',
  //     //   headers: myHeaders,
  //     //   mode: 'cors',
  //     //   cache: 'default',
  //     // }

  //     fetch('http://localhost:5000/api/auth/user')
  //       .then(function (res) {
  //         if (res.ok) {
  //           //   return res.json
  //           setPostUser(res)
  //           console.log(res)
  //         }
  //       })
  //       .catch(function (res) {
  //         console.log('erreur get user')
  //       })
  //   }, [postUser])
  //   console.log(postUser)
  return (
    <CardContainer>
      {/* {setisLoadingCard} ? (
                <>
                 <i className='fas fa-spinner fa-spin'></i>
                </> ) : (   
                <>         */}
      <Main>
        <Head>
          <ProfilImgContainer>
            <LabelPostImg alt=".jpg" src={assets} />
            <p style={{ padding: 10, fontSize: 16 }}>Publication de {userId}</p>
          </ProfilImgContainer>
          <ButtonLign style={{ paddingRight: 10 }}>
            <ButtonModify
              alt="Crayon noir qui écrit"
              onClick={(e) => {
                e.preventDefault()
                setIsModif(true)
              }}
            />
            <ButtonSuppr
              id={key}
              setApiCalled={setApiCalled}
              onClick={(e) => {
                e.preventDefault()
              }}
            />
          </ButtonLign>
        </Head>
        <MDBCard>
          <MDBCardImage
            src={imageUrl}
            position="top"
            alt="photo"
            style={{ width: '100%' }}
          />
          <MDBCardBody>
            <div style={{ padding: '10px', borderBottom: '2px solid #F1F1F1' }}>
              <MDBCardText>
                <div>{description}</div>
                <PostCreation>
                  Créé il y a {date && dateFormat(new Date(date))}
                  {/* {Date.now() - date} minutes */}
                  {/* {dateFormat(new Date(), 'MMM dd yyyy')} */}
                </PostCreation>
              </MDBCardText>
            </div>
            <span
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: '10px',
              }}
            >
              <MDBBtn href="#" style={{ color: 'blueviolet', fontSize: 18 }}>
                {likes}
                <i className="fa-regular fa-thumbs-up" />
                <i className="fa-solid fa-thumbs-up" />
              </MDBBtn>
              <MDBBtn href="#" style={{ color: 'blueviolet', fontSize: 18 }}>
                {comments}
                <i className="fa-regular fa-comments" />
              </MDBBtn>
            </span>
          </MDBCardBody>
        </MDBCard>
      </Main>
    </CardContainer>
  )
}

export default Card
