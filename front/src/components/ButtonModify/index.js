import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useState } from 'react'

const Modif = styled.div`
  &:hover {
    opacity: 0.5;
  }
`

function modifyOnePost({ postId, setApiCalled }) {
  //   const [description, setDescription] = useState('')
  //   const [imageUrl, setImageUrl] = useState('')
  const token = JSON.parse(localStorage.getItem('token'))
  //   const Post = (e) => {
  //     const dataPost = new FormData()
  //     dataPost.append('description', description)
  //     dataPost.append('imageUrl', imageUrl)

  axios({
    method: 'PATCH',
    url: `http://localhost:5000/api/publis/${postId}`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    // data: dataPost,
  })
    .then((res) => {
      if (res.ok) {
        return res.json
      }
      console.log(res.data)
      alert('votre post a bien été modifié')
    })

    .catch((err) => {
      console.log(err)
      window.alert("Votre post n'a pas été modifié. Veuillez recommencer!")
    })
}

function handleModify({ postId, setApiCalled }) {
  let res = alert('Votre publication va être modifiée. Confirmation?')
  if (res) {
    modifyOnePost({ postId, setApiCalled })
  }
  return true
}

const ButtonModify = ({ pseudo, postId, setApiCalled }) => {
  let pseudoStock = JSON.parse(localStorage.getItem('pseudo'))
  console.log(pseudo)
  return (
    <Modif
      onClick={(e) => {
        e.preventDefault()
        handleModify(false)
      }}
    >
      {pseudoStock === pseudo ? (
        <i
          style={{ fontSize: '100%', padding: '6px' }}
          class="fa-sharp fa-solid fa-pen-to-square"
        ></i>
      ) : (
        <></>
      )}
    </Modif>
  )
}

export default ButtonModify
