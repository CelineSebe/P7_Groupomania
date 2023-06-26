import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
// import Button from '../../components/Button/index';
import assets from '../../assets/user-solid.svg'

const ContainerCreatePubli = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100px;
  width: 100%;
  border-radius: 20px;
  margin: 5px 0px;
  border: solid 3px ${colors.secondary};
  padding: 2px;
`
const FormPost = styled.form`
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 15px;
`

const ContainerPublication = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  align-items: center;
  height: 50%;
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

const ProfilImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: solid;
  width: 70px;
  height: 70px;
  margin: 35px 0px 0px 20px;
`

const LabelPostImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`

const ContainerButtons = styled.div`
  /* display: flex;
  align-items: flex-end;
  justify-content:left;
  height: 50px;
  padding-left: 500px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50%;
  width: 80%;
  margin-left: 150px;
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
// const AddButton = styled.div`
// width: 10%;
// height: 50%;
// `

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

const ButtonDelete = styled.button`
  background-color: ${colors.tertiary};
  color: white;
  height: 25px;
  width: 25px;
  border-radius: 6px;
  margin:2px;

  &:hover {
    cursor: pointer;
    background-color: ${colors.secondary};
  }
`
// const PreviewImgContainer = styled.div``
const Preview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.secondary};
  margin:2px;
  height:40px;
  width: 80px;
  border-radius: 5px;

`
const ImgPreview = styled.div`
  margin: 2px;
  height: 100%;
  border-radius: 5px;
`

const CreatePubli = ({ ImageUrlUser }) => {
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [isImageValid, setImageValid] = useState(true)

  const token = JSON.parse(localStorage.getItem('token'))
  // const ImageUrlUser = JSON.parse(localStorage.getItem('imageUrlUser'))
  console.log('imageUser', ImageUrlUser)
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg'] // Formats d'image autorisés

      if (allowedFormats.includes(file.type)) {
        setSelectedImage(file)
        setImageValid(true) // L'image est valide
      } else {
        setSelectedImage('')
        setImageValid(false) // L'image n'est pas valide
      }
    }
  }

  const Post = (e) => {
    e.preventDefault()

    const descriptionError = document.querySelector('.description.error')
    if (description.length === 0) {
      descriptionError.innerHTML = 'OUPS ! Votre publication est vide !'
    } else {
      descriptionError.innerHTML = ''

      const dataPost = new FormData()
      dataPost.append('description', description)
      dataPost.append('imageUrl', imageUrl)

      // console.log(token)
      // console.log(userId)

      axios({
        method: 'post',
        url: 'http://localhost:5000/api/publis',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        data: dataPost,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    let descriptionInput = document.getElementById('descriptionInput')
    descriptionInput.value = ''

    removeSelectedImage()
    setImageUrl()
  }

  const [selectedImage, setSelectedImage] = useState('')

  const removeSelectedImage = () => {
    setSelectedImage()
    setImageUrl(undefined)
  }

  return (
    <>
      <ContainerCreatePubli>
        <FormPost onSubmit={Post} id="post" encType="multipart/form-data">
          <ContainerPublication>
            <ProfilImgContainer>
              {ImageUrlUser ? (
                <LabelPostImg alt="img profil" src={ImageUrlUser} />
              ) : (
                <LabelPostImg alt="img profil" src={assets} />
              )}
            </ProfilImgContainer>
            <FormStyle>
              <InputStyleDescription
                id="descriptionInput"
                type="text"
                placeholder="Quoi de neuf? Dites nous quelque chose..."
                onChange={(e) => {
                  const { value } = e.target
                  setDescription(value)
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
            {selectedImage && (
              <Preview>
                <ImgPreview>
                  <img
                    style={{ height: '40px', width: '40px', margin: '0px', borderRadius:'5px'}}
                    src={URL.createObjectURL(selectedImage)}
                    alt="Aperçu"
                  />
                </ImgPreview>
                <ButtonDelete
                  id="removeImg"
                  onClick={() => {
                    removeSelectedImage()
                  }}
                >
                  <i className="fa-solid fa-xmark" style={{fontSize:'15px', color:'white'}}></i>
                </ButtonDelete>
              </Preview>
            )}
            <label htmlFor="removeImg" alt="Dossier" src=""></label>
            {/* </PreviewImgContainer> */}
            <Hide>
              <input
                id="imgUrl"
                type="file"
                onChange={(e) => {
                  const imageUrl = e.target.files[0]
                  setImageUrl(imageUrl)
                  imageChange(e)
                }}
              />
            </Hide>
            <label htmlFor="imgUrl" alt="Dossier" src=""></label>
            <ButtonAdd htmlFor="imgUrl" type="addPicture" onClick={() => {}}>
              <div>
                <i className="fa-solid fa-camera"></i>
              </div>
            </ButtonAdd>
            <ButtonPost type="submit" id="post" onClick={Post}>
              <div>
                <i className="fa-solid fa-paper-plane"></i>
              </div>
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
          visibility: isImageValid ? 'hidden' : 'visible', // Masque le message d'erreur si l'image est valide
        }}
      >
        Le format de l'image n'est pas valide. Veuillez choisir une image au
        format JPEG ou PNG.
      </div>
    </>
  )
}

export default CreatePubli
