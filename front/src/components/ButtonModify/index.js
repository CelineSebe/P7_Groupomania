import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useState } from 'react'
import colors from '../../utils/style/colors'
import assets from '../../assets/user-solid.svg'

const Modif = styled.div`
  opacity: 1;
`

// const ContainerCreatePubli = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: white;
//   height: 100%;
//   width: 100%;
//   border-radius: 20px;
//   margin: 5px 0;
//   border: solid 2px ${colors.secondary};
// `
// const FormPost = styled.form`
//   height: 100%;
//   width: 100%;
// `

// const ContainerPublication = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 90%;
// `

// const FormStyle = styled.div`
//   border-bottom: solid 2px ${colors.secondary};
//   width: 80%;
// `

// const InputStyleDescription = styled.input`
//   border: none;
//   padding: 10px 0px 15px 15px;
//   height: 90%;
//   width: 100%;
//   &::placeholder {
//     font-size: 14px;
//   }
//   &:focus {
//     outline: 1px solid white;
//   }
// `

// const ProfilImgContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50px;
//   width: 60px;
//   height: 55px;
//   margin: 45px 0px 0px 20px;
// `

// const PostImg = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 50px;
// `

// const ContainerButtons = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: flex-start;
//   height: 50px;
//   padding-left: 100px;
// `

// const ButtonPost = styled.button`
//   background-color: white;
//   border-color: blueviolet;
//   color: blueviolet;
//   height: 35px;
//   width: 60px;
//   border-radius: 6px;
//   font-size: 14px;
//   margin-top: 10px;
//   &:hover {
//     cursor: pointer;
//     background-color: white;
//     border: none;
//   }
//   @media screen and (max-width: 1023px) {
//     width: 60px;
//   }
// `
// const Hide = styled.div`
//   width: 0.1px;
//   height: 0.1px;
//   opacity: 0;
//   overflow: hidden;
//   position: absolute;
//   z-index: -1;
// `

// const ButtonAdd = styled.label`
//   background-color: ${colors.secondary};
//   border-color: ${colors.primary};
//   color: ${colors.primary};
//   height: 35px;
//   width: 60px;
//   border-radius: 15px;
//   font-size: 14px;
//   margin-top: 10px;
//   margin-right: 80px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   &:hover {
//     cursor: pointer;
//     background-color: white;
//   }
//   @media screen and (max-width: 1023px) {
//     width: 60px;
//   }
// `
// const Close = styled.div`
//   cursor: pointer;
//   color: red;
//   display: flex;
//   margin: 5px; ;
// `
const ButtonPen = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`

// function modifyOnePost({ dataPost, postId, ImageUrlModif, setApiCalled }) {
//   const token = JSON.parse(localStorage.getItem('token'))
//   //   const Post = (e) => {
//   axios({
//     method: 'PUT',
//     url: `http://localhost:5000/api/publis/${postId}`,
//     headers: {
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     },
//     data: dataPost,
//   })
//     .then((res) => {
//       if (res.ok) {
//         return res.json
//       }
//       console.log(res.data)
//       alert('votre post a bien été modifié')
//     })

//     .catch((err) => {
//       console.log(err)
//       window.alert("Votre post n'a pas été modifié. Veuillez recommencer!")
//     })
// }

// function handleModify({ dataPost, postId, setImageUrlModif, setApiCalled }) {
//   let res = alert('Votre publication va être modifiée. Confirmation?')
//   if (res) {
//     modifyOnePost({
//       postId,
//       dataPost,
//       setApiCalled,
//     })
//   }
// }

const ButtonModify = ({
  pseudo,
  description,
  imageUrl,
  setIsModif,
  postId,
  setApiCalled,
}) => {
  let pseudoStock = JSON.parse(localStorage.getItem('pseudo'))
  const role = JSON.parse(localStorage.getItem('role'))
  console.log(pseudo)

  // const [descriptionModif, setDescriptionModif] = useState(description)
  // const [imageUrlModif, setImageUrlModif] = useState(imageUrl)
  // const [modifForm, setModifForm] = useState(false)

  // const dataPost = new FormData()
  // dataPost.append('description', descriptionModif)
  // dataPost.append('imageUrl', imageUrlModif)

  return (
    <Modif
      onClick={(e) => {
        e.preventDefault()
        setIsModif(true)
      }}
    >
      {pseudoStock === pseudo || role === "administrateur"? (
        <ButtonPen>
          <i
            style={{ fontSize: '100%', padding: '6px' }}
            class="fa-sharp fa-solid fa-pen-to-square"
          ></i>
        </ButtonPen>
      ) : (
        <></>
      )}
      {/* {modifForm === true ? (
        <>
          <ContainerCreatePubli>
            <Close onClick={setModifForm(false)}>
              <i class="fa-solid fa-xmark"></i>
            </Close>
            <FormPost
              onSubmit={handleModify}
              id="post"
              encType="multipart/form-data"
            >
              <ContainerPublication>
                <ProfilImgContainer>
                  {imageUrl === '/' ? (
                    <></>
                  ) : (
                    <PostImg alt=".jpg" src={imageUrl} />
                  )}
                </ProfilImgContainer>
                <FormStyle>
                  <InputStyleDescription
                    id="descriptionInput"
                    type="text"
                    placeholder={description}
                    onChange={(e) => {
                      const { value } = e.target
                      setDescriptionModif(value)
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
                <Hide>
                  <input
                    id="imgUrl"
                    type="file"
                    onChange={(e) => {
                      const imageUrl = e.target.files[0]
                      setImageUrlModif(imageUrl)
                    }}
                  />
                </Hide>
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
                    handleModify()
                    setModifForm(false)
                  }}
                >
                  <ButtonPen>
                    <i className="fa-solid fa-paper-plane"></i>
                  </ButtonPen>
                </ButtonPost>
                <label htmlFor="post"></label>
              </ContainerButtons>
            </FormPost>
          </ContainerCreatePubli>
          <div
            className="description error"
            style={{
              fontSize: 16,
              color: 'red',
              textAlign: 'center',
              paddingTop: 2,
            }}
          ></div>
        </>
      ) : (
        <></>
      )} */}
    </Modif>
  )
}

export default ButtonModify
