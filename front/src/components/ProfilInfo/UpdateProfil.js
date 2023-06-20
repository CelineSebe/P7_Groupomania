import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import axios from 'axios'

const ProfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  background-color: ${colors.secondary};
  width: 600px;
  border: solid 2px ${colors.secondary};
  border-radius: 5px;
  margin: 20px;
  padding: 20px;
  @media screen and (max-width: 730px) {
    width: 70%;
  }
`

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Hide = styled.div`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`
const FormPost = styled.form`
display: flex;
justify-content: space-between;
align-items: center;

`
const ButtonAdd = styled.label`
  background-color: ${colors.primary};
  border-color: ${colors.primary};
  color: ${colors.secondary};
  height: 50px;
  width: 100px;
  border-radius: 15px;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #b69c9c;
  }
`
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media screen and (max-width: 730px) {
    width: 70%;
  }
`
const ButtonPush = styled.button`
  background-color: ${colors.primary};
  border-color: ${colors.primary};
  color: ${colors.secondary};
  height: 50px;
  width: 100px;
  border-style: none;
  border-radius: 15px;
  margin-left:auto;
  font-size: 14px;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    background-color: #b69c9c;
  }
`
const PhotoContainer = styled.div`
  font-size: 11px;
  display: flex;
justify-content: space-between;
align-items: center;
`
const PseudoContainer = styled.div`
  font-size: 11px;
  margin: 18px;
`

const UpdateProfil = () => {
  const token = JSON.parse(localStorage.getItem('token'))
  const userId = JSON.parse(localStorage.getItem('userId'))

  const [postImage, setPostImage] = useState('')
  const [postFile, setPostFile] = useState('')


  const handleImg = (e) => {
    var tgt = e.target,
      files = tgt.files

    // FileReader support
    var fr = new FileReader()
    fr.onloadend = function (event) {
      setPostImage(fr.result)
    }
    fr.readAsDataURL(files[0])
    // console.log(fr.readAsDataURL(files[0]))
    console.log(files[0])

    setPostFile(files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = new FormData()
    userData.append('imageUrl', postFile)
    console.log('userData', userData.get('imageUrl'))

    axios({
      method: 'post',
      url: 'http://localhost:5000/api/auth/upload/',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      data: userData,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  const handlePseudo = (e) => {
    e.preventDefault()
    const newPseudo = document.getElementById('pseudoInput').value
    // const userData = new FormData()
    // console.log(newPseudo)
    // userData.append('pseudo', newPseudo)
    // console.log('userData', userData.get('pseudo'))

    axios({
      method: 'put',
      url: `http://localhost:5000/api/auth/user/${userId}/user`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: { pseudo: newPseudo },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  const storedPseudo = JSON.parse(localStorage.getItem('pseudo'))

  return (
    <ProfilContainer>
      <h1 style={{ fontSize: '20px' }}> Editer</h1>
      <PseudoContainer>
        <FormPost onSubmit={handlePseudo} encType="multipart/form-data">
          <h2>Pseudo: </h2>
          <input
            id="pseudoInput"
            style={{ height: '40px', padding: '4px' }}
            placeholder={storedPseudo}
          ></input>
          <ButtonPush
            type="submit"
          >
            <div>
              <i className="fa-solid fa-paper-plane"></i>
            </div>
          </ButtonPush>
        </FormPost>
      </PseudoContainer>
      <PhotoContainer>
        <h2 style={{ padding: 20, display: 'flex', justifyContent: 'left' }}>
          Photo:{' '}
        </h2>
        <FormPost onSubmit={handleSubmit} encType="multipart/form-data">
          <ImgContainer>
            <Hide>
              <input
                id="imgUrl"
                type="file"
                onChange={(e) => {
                  handleImg(e)
                }}
              />
            </Hide>
            {postImage ? (
              <img
                src={postImage}
                style={{ height: '10%', width: '10%' }}
                alt="miniature"
              ></img>
            ) : (
              <> </>
            )}
            <BtnContainer>
              <ButtonAdd htmlFor="imgUrl" type="addPicture">
                Modifier
              </ButtonAdd>
              <ButtonPush
                type="submit"
              >
                <div>
                  <i className="fa-solid fa-paper-plane"></i>
                </div>
              </ButtonPush>
            </BtnContainer>
          </ImgContainer>
        </FormPost>
      </PhotoContainer>
    </ProfilContainer>
  )
}

export default UpdateProfil
