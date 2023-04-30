import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import axios from 'axios'

const ProfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary};
  width: 100%;
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
  justify-content: center;
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
  margin-right: 80px;
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
  border-radius: 15px;
  font-size: 14px;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    background-color: #b69c9c;
  }
  
`

const UpdateProfil = () => {
  const token = JSON.parse(localStorage.getItem('token'))

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
  return (
    <ProfilContainer>
      <h1 style={{ fontSize: '24px', padding: 20, textAlign: 'center' }}>
        Editer votre profil{' '}
      </h1>
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
              style={{ height: '30%', width: '30%' }}
              alt="miniature"
            ></img>
          ) : (
            <></>
          )}
          <BtnContainer>
            <ButtonAdd htmlFor="imgUrl" type="addPicture">
              Modifier
            </ButtonAdd>
            <ButtonPush
              type="submit"
              style={{
                height: 50,
                width: 80,
                borderStyle: 'none',
              }}
            >
              <div>
                <i className="fa-solid fa-paper-plane"></i>
              </div>
            </ButtonPush>
          </BtnContainer>
        </ImgContainer>
      </FormPost>
    </ProfilContainer>
  )
}

export default UpdateProfil
