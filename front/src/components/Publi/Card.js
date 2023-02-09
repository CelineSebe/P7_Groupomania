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
const ContainerCreatePubli = styled.div``
const FormPost = styled.form``

const ContainerPublication = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`

const FormStyle = styled.div`
  border-bottom: solid 2px ${colors.secondary};
  width: 80%;
`

const InputStyleDescription = styled.input`
  border: none;
  padding: 10px 0px 15px 15px;
  height: 90%;
  width: 100%;
  &::placeholder {
    font-size: 14px;
  }
  &:focus {
    outline: 1px solid white;
  }
`

const PostImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`

const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 50px;
  padding-left: 100px;
`

const ButtonPost = styled.button`
  background-color: white;
  border-color: blueviolet;
  color: blueviolet;
  height: 35px;
  width: 60px;
  border-radius: 6px;
  font-size: 14px;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    background-color: white;
    border: none;
  }
  @media screen and (max-width: 1023px) {
    width: 60px;
  }
`
const Hide = styled.div`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`

const ButtonAdd = styled.label`
  background-color: ${colors.secondary};
  border-color: ${colors.primary};
  color: ${colors.primary};
  height: 35px;
  width: 60px;
  border-radius: 15px;
  font-size: 14px;
  margin-top: 10px;
  margin-right: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: white;
  }
  @media screen and (max-width: 1023px) {
    width: 60px;
  }
`
const Close = styled.div`
  cursor: pointer;
  color: red;
  display: flex;
  margin: 5px; ;
`

const Card = ({
  id,
  imageUrlUser,
  pseudo,
  description,
  imageUrl,
  likes,
  usersLikes,
  date,
  comments,
  setApiCalled,
}) => {
  const [isModif, setIsModif] = useState(false)

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
            <p style={{ padding: 10, fontSize: 16 }}>Publication de {pseudo}</p>
          </ProfilImgContainer>
          <ButtonLign style={{ paddingRight: 10 }}>
            <ButtonModify
              postId={id}
              pseudo={pseudo}
              description={description}
              imageUrl={imageUrl}
              setIsModif={setIsModif}
              setApiCalled={setApiCalled}
              alt="Crayon noir qui écrit"
              onClick={(e) => {
                e.preventDefault()
                setIsModif(true)
              }}
            />
            <ButtonSuppr
              postId={id}
              pseudo={pseudo}
              setApiCalled={setApiCalled}
              onClick={(e) => {
                e.preventDefault()
              }}
            />
          </ButtonLign>
        </Head>
        {isModif === false ? (
          <MDBCard>
            {imageUrl === '/' ? (
              <></>
            ) : (
              <MDBCardImage
                src={imageUrl}
                position="top"
                alt="photo"
                style={{ width: '100%' }}
              />
            )}
            <MDBCardBody>
              <div
                style={{ padding: '10px', borderBottom: '2px solid #F1F1F1' }}
              >
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
        ) : (
          <MDBCard>
            <Close
              onClick={(e) => {
                setIsModif(false)
              }}
            >
              <i class="fa-solid fa-xmark"></i>
            </Close>
            <FormPost>
              <ContainerPublication>
                <ProfilImgContainer></ProfilImgContainer>
                <FormStyle>
                  <InputStyleDescription
                    id="descriptionInput"
                    type="text"
                    placeholder={description}
                    onChange={(e) => {
                      const { value } = e.target
                      // setDescriptionModif(value)
                    }}
                    required
                  />
                  <label
                    htmlFor="descriptionInput"
                    style={{ display: 'none' }}
                  ></label>
                </FormStyle>
              </ContainerPublication>

              <ContainerButtons>
                <Hide></Hide>
                <label htmlFor="imgUrl" alt="Dossier" src=""></label>
                <ButtonAdd
                  htmlFor="imgUrl"
                  type="addPicture"
                  onClick={() => {}}
                >
                  <i className="fa-solid fa-camera"></i>
                </ButtonAdd>
                <ButtonPost
                  type="submit"
                  id="post"
                  onClick={() => {
                    // handleModify()
                    setIsModif(false)
                  }}
                >
                  {/* <ButtonPlane> */}
                  <i className="fa-solid fa-paper-plane"></i>
                  {/* </ButtonPlane> */}
                </ButtonPost>
                <label htmlFor="post"></label>
              </ContainerButtons>
            </FormPost>
            <div
              className="description error"
              style={{
                fontSize: 16,
                color: 'red',
                textAlign: 'center',
                paddingTop: 2,
              }}
            ></div>
          </MDBCard>
        )}
      </Main>
    </CardContainer>
  )
}

export default Card
