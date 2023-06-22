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
  margin-top: 12px;
`

const FormComment = styled.form`
display: flex;
justify-content: center;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  `
const InputComment =styled.input`
border: none;
border-radius: 15px;
  &:focus {
    outline: 1px solid white;
  }`

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
    event.preventDefault();
    const commentData = {
        postId: postId,
        userId: userId,
        content: newComment,
        pseudo: pseudo,
        imageUrlUser: imageUrlUser,
    };
    console.log('pseudo imageUrlUser', commentData)
  
    // Envoyer le nouveau commentaire au backend
    axios
      .post('http://localhost:5000/api/publis/comments', commentData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        // Gérer la réponse du serveur si nécessaire
        console.log('Comment submitted:', response.data);
  
        // Réinitialiser l'état du nouveau commentaire
        setNewComment('');
      })
      .catch((error) => {
        // Gérer les erreurs de requête s'il y en a
        console.error('Error submitting comment:', error);
      });
  };
  

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
        {showComments && <Com postId={postId} comments={comments} imageUrlUser={imageUrlUser}
    pseudo={pseudo} />}
        <FormComment onSubmit={handleCommentSubmit}>
          <InputComment
            type="text"
            value={newComment}
            style={{ border: 'none', width: '100%', padding:'5px', margin:'3px' }}
            onChange={handleCommentChange}
            placeholder="Ajouter un commentaire..."
          />
        </FormComment>
      </Container>
    </>
  )
}

export default Buttons
