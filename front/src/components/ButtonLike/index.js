import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Like = styled.div`
  opacity: 1;
  color: blueviolet;
  font-size: 18px;
`
const Dislike = styled.div`
  opacity: 1;
  color: blueviolet;
  font-size: 18px;
`

function modifyLike({
  postId,
  countDislike,
  countLike,
  userLike,
  userDislike,
  imageUrl,
  description,
}) {
  const token = JSON.parse(localStorage.getItem('token'))
  console.log('likes', countLike)
  const dataPost = new FormData()

  dataPost.append('description', description)
  dataPost.append('imageUrl', imageUrl)
  dataPost.append('likes', countLike)
  dataPost.append('dislikes', countDislike)
  dataPost.append('usersLikes', userLike)
  dataPost.append('usersDislikes', userDislike)

  axios({
    method: 'PUT',
    url: `http://localhost:5000/api/publis/${postId}`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
    data: dataPost,
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
function handleLike({
  postId,
  userId,
  liked,
  userDislike,
  userLike,
  countDislike,
  countLike,
  token,
  description,
  imageUrl,
}) {
  let res = window.confirm(
    'Votre publication va être likée/dislikée. Confirmation?'
  )
  if (res) {
    console.log('handleLiked')
    modifyLike({
      postId,
      userId,
      liked,
      countDislike,
      countLike,
      userDislike,
      userLike,
      token,
      description,
      imageUrl,
    })
  }
}
const ButtonLike = ({
  postId,
  userId,
  likes,
  dislikes,
  usersLikes,
  usersDislikes,
  description,
  imageUrl,
}) => {
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [userLike, setuserLike] = useState([])
  const [userDislike, setuserDislike] = useState([])
  const [countDislike, setcountDislike] = useState(dislikes)
  const [countLike, setcountLike] = useState(likes)

  const token = JSON.parse(localStorage.getItem('token'))
  for (var i = 0; i < usersLikes.length; i++) {
    if (userId === usersLikes[i]) {
      console.log('user a déjà liké')
      setLiked(true)
    }
  }
  for (var j = 0; j < usersDislikes.length; j++) {
    if (userId === usersDislikes[j]) {
      console.log('user a déjà disliké')
      setDisliked(true)
    }
  }

  return (
    <>
      <Like
        onClick={(e) => {
          e.preventDefault()
          if (liked === false) {
            setLiked(true)
            setcountLike(countLike + 1)
            // setuserLike(usersLikes.push(userId))

            if (disliked) {
              setDisliked(false)
              setcountDislike(countDislike - 1)
              // setuserDislike(usersLikes.pop(userId))
            }
          } else {
            setLiked(false)
            setcountLike(countLike - 1)
            // setuserLike(usersLikes.pop(userId))
          }
          handleLike({
            postId,
            userId,
            userLike,
            userDislike,
            countDislike,
            countLike,
            token,
            description,
            imageUrl,
          })
        }}
      >
        {countLike > 0 ? countLike : <></>}
        {liked === true ? (
          <i className="fa-solid fa-thumbs-up" />
        ) : (
          <i className="fa-regular fa-thumbs-up" />
        )}
      </Like>
      <Dislike
        onClick={(e) => {
          e.preventDefault()
          if (disliked === false) 
          {
            setDisliked(true)
            setcountDislike(countDislike + 1)
            // setuserDislike(usersDislikes.push(userId))

            // for (var i = 0; i < usersDislikes.length; i++) {
              //   if (userId === usersDislikes[i]) {
                //     console.log('user a déjà liké')
                //     setuserDislike(usersDislikes.pop(userId))
                //   } else {
                  //     setuserDislike(usersDislikes.push(userId))
                  //   }
                  // }
                  if (liked) {
                    setLiked(false)
                    setcountLike(countLike - 1)
                    // setuserLike(usersLikes.pop(userId))
                  }
          } else {
            setDisliked(false)
            setcountDislike(countDislike - 1)
            // setuserDislike(usersDislikes.pop(userId))
          }
          handleLike({
            postId,
            userId,
            liked,
            disliked,
            userLike,
            userDislike,
            countDislike,
            countLike,
            usersLikes,
            usersDislikes,
            token,
            description,
            imageUrl,
          })
        }}
      >
        {countDislike > 0 ? countDislike : <></>}
        {disliked === true ? (
          <i className="fa-solid fa-thumbs-down" />
        ) : (
          <i className="fa-regular fa-thumbs-down" />
        )}
      </Dislike>
    </>
  )
}

export default ButtonLike
