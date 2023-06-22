import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ButtonLike from '../ButtonLike'
import Com from '../Comm/Com'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: '10px';
`

const FormComment = styled.form`
  width: 100%;
  height: 50px;
  margin: 0px 8px;
`
const ContainerButton = styled.div`
  display: flex;
  justify-content: space-around;
`

const CommentIcon = styled.i`
  cursor: pointer;
  opacity: 1;
  color: blueviolet;
  font-size: 18px;
`

const Buttons = ({
  postId,
  userId,
  likes,
  dislikes,
  usersLikes,
  usersDislikes,
  description,
  imageUrlUser,
  pseudo,
  comments,
}) => {
  const [newComment, setNewComment] = useState('')
  const [showComments, setShowComments] = useState(false)

  const token = JSON.parse(localStorage.getItem('token'))

  const handleCommentChange = (event) => {
    setNewComment(event.target.value)
  }

  const handleCommentSubmit = (event) => {
    event.preventDefault()

    // Envoyer le nouveau commentaire au backend
    // Utilisez une requête HTTP (par exemple, axios) pour envoyer le commentaire au serveur
    console.log(newComment)
    axios
      .post(
        `http://localhost:5000/api/publis/comments`,
        {
          postId: postId,
          userId: userId,
          content: newComment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        // Gérer la réponse du serveur si nécessaire
        console.log('Comment submitted:', response.data)

        // Réinitialiser l'état du nouveau commentaire
        setNewComment('')
      })
      .catch((error) => {
        // Gérer les erreurs de requête s'il y en a
        console.error('Error submitting comment:', error)
      })
  }

  const toggleComments = () => {
    setShowComments(!showComments)
  }

  return (
    <>
      <Container>
        <ContainerButton>
          <ButtonLike
            postId={postId}
            userId={userId}
            likes={likes}
            dislikes={dislikes}
            usersLikes={usersLikes}
            usersDislikes={usersDislikes}
            description={description}
            onClick={(e) => {
              e.preventDefault()
            }}
          />
          <CommentIcon
            onClick={toggleComments}
            className="fa-regular fa-comment"
          ></CommentIcon>
        </ContainerButton>
        {showComments && <Com postId={postId} comments={comments} />}
        <FormComment onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={newComment}
            style={{ border: 'none', width: '90%' }}
            onChange={handleCommentChange}
            placeholder="Ajouter un commentaire..."
          />
        </FormComment>
      </Container>
    </>
  )
}

export default Buttons
