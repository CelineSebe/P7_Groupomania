import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ButtonComment = ({ postId, userId, comments, onClick }) => {
  const [allComments, setAllComments] = useState([])

  const token = JSON.parse(localStorage.getItem('token'))

  useEffect(() => {
    // Effectuer la requête GET pour récupérer tous les commentaires
    axios
      .get(`http://localhost:5000/api/publis/comments/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        // Mettre à jour l'état avec les commentaires récupérés
        setAllComments(response.data.comments)
        console.log('tous les comm', setAllComments)
      })
      .catch((error) => {
        console.error('Error fetching comments:', error)
      })
  }, [postId])
  return (
    <div onClick={onClick}>
      <i className="fa-regular fa-comment"></i>
      {comments && comments.length} {/* Afficher le nombre de commentaires */}
    </div>
  )
}

export default ButtonComment
