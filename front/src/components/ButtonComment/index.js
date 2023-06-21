import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ComContainer=styled.div`
width: 100%;
`
const Com =styled.div`

`

const ButtonComment = ({ postId, comments }) => {
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
        console.log('comm',comments)
      })
      .catch((error) => {
        console.error('Error fetching comments:', error)
      })
  }, [postId])
  return (
    <div >
      {comments && comments.length} {/* Afficher le nombre de commentaires */}
      <i onClick={(e)=>{e.preventDefault()}} className="fa-regular fa-comment"></i>
      {allComments && allComments.length > 0 && (
        <ComContainer>
          {comments.map((comment) => (
            <Com >
              {/* {comment && comment.content ? comment.content : ''}
               */}
               {comment}
            </Com>
           ))}
        </ComContainer>
      )}
    </div>
  )
}

export default ButtonComment
