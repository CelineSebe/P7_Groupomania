import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useState } from 'react'
import Card from '../Publi/Card'

const Suppr = styled.div`
  &:hover {
    opacity: 0.5;
  }
`


function supprOnePost({ postId, setApiCalled }) {
  let token = JSON.parse(localStorage.getItem('token'))
  
    axios({
      method: 'DELETE',
      url: `http://localhost:5000/api/publis/${postId}`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      if (res.ok) {
        return res.json
      }
      console.log(res.data)
      alert('votre post a bien été supprimé')
    })
    
    .catch((err) => {
      console.log(err)
      window.alert("Votre post n'a pas été supprimé")
    })
  }

function handleSuppr({ postId, setApiCalled }) {
  let res = window.confirm(`Êtes-vous sûr de vouloir supprimer ce post?`)
  if (res) {
    supprOnePost({ postId, setApiCalled })
  }
}

const ButtonSuppr = ({ postId, setApiCalled, pseudo }) => {
  let pseudoStock = JSON.parse(localStorage.getItem('pseudo'))
  console.log(postId)
  const role = JSON.parse(localStorage.getItem('role'))
  
  return (
    <Suppr
      setApiCalled={setApiCalled}
      onClick={(e) => {
        e.preventDefault()
        handleSuppr({ postId, setApiCalled })
      }}
    >
      {pseudoStock === pseudo || role === "administrateur" ? (
        <i
          style={{ fontSize: '100%', padding: '10px' }}
          class="fa-solid fa-trash"
        ></i>
      ) : (
        <></>
      )}
    </Suppr>
  )
}

export default ButtonSuppr
