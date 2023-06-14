import React, { useEffect } from 'react'
import { useState } from 'react'
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
  usersLikes,
  usersDislikes,
}) {
  const token = JSON.parse(localStorage.getItem('token'))
  const userId = JSON.parse(localStorage.getItem('userId'))
  console.log('likes', countLike)
  console.log('dislikes', countDislike)
  console.log('usersLikes', usersLikes)
  console.log('usersDislikes', usersDislikes)

  // const dataPost = new FormData()

  // dataPost.append('description', description)
  // dataPost.append('imageUrl', imageUrl)
  // dataPost.append('likes', countLike)
  // dataPost.append('dislikes', countDislike)
  // dataPost.append('usersLikes', userId)
  // dataPost.append('usersDislikes', userId)

  axios({
    method: 'PUT',
    url: `http://localhost:5000/api/publis/${postId}/like`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    data: {
      likes: countLike,
      dislikes: countDislike,
      usersLikes: usersLikes,
      usersDislikes: usersDislikes,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      alert('vos likes ont bien été modifié')
    })

    .catch((err) => {
      console.log(err)
      window.alert("Vos likes n'ont pas été modifié. Veuillez recommencer!")
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
  likes,
  dislikes,
  usersLikes,
  usersDislikes,
  description,
  imageUrl,
}) => {
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  // const [updatedUsersLikes, setupdatedUsersLikes] = useState(usersLikes)
  // const [updatedUsersDislikes, setupdatedUsersDislikes] = useState(usersDislikes)
  const [countDislike, setcountDislike] = useState(dislikes)
  const [countLike, setcountLike] = useState(likes)

  const token = JSON.parse(localStorage.getItem('token'))
  const userId = JSON.parse(localStorage.getItem('userId'))

  // for (var i = 0; i < usersLikes.length; i++) {
  //   if (userId === usersLikes[i]) {
  //     console.log('user a déjà liké')
  //     setLiked(true)
  //   }
  // }
  // for (var j = 0; j < usersDislikes.length; j++) {
  //   if (userId === usersDislikes[j]) {
  //     console.log('user a déjà disliké')
  //     setDisliked(true)
  //   }
  // }
  // initialisation des variables updatedUsersLikes et updatedUsersDislikes
  console.log('usersLikes:', usersLikes)
  console.log('usersDislikes:', usersDislikes)

  useEffect(() => {
    if (usersLikes.includes(userId)) {
      setLiked(true)
    }
    if (usersDislikes.includes(userId)) {
      setDisliked(true)
    }
  }, [usersLikes, usersDislikes, userId])
  return (
    <>
      <Like
        onClick={(e) => {
          e.preventDefault()
          let updatedCounts = { countLike, countDislike }

          for (var i = 0; i < usersLikes.length; i++) {
            if (userId === usersLikes[i]) {
              console.log('user a déjà liké')
              // setupdatedUsersLikes(usersLikes.pop(userId))
            } else {
              // setupdatedUsersLikes(usersLikes.push(userId))
            }
          }
          if (liked === false) {
            setLiked(true)
            updatedCounts.countLike = +1
            if (!usersLikes.includes(userId)) {
              // setupdatedUsersLikes(updatedUsersLikes.push(userId))
              usersLikes.push(userId)
            }
            if (disliked) {
              setDisliked(false)
              updatedCounts.countDislike = -1
              if (usersDislikes.includes(userId)) {
                // setupdatedUsersDislikes(updatedUsersDislikes.pop(userId))
                usersDislikes.pop(userId)
              }
              // setupdatedUsersDislikes(usersLikes.pop(userId))
            }
          } else {
            setLiked(false)
            updatedCounts.countLike = -1
            if (usersLikes.includes(userId)) {
              // setupdatedUsersLikes(updatedUsersLikes.pop(userId))
              usersLikes.pop(userId)
            }
            // setupdatedUsersLikes(usersLikes.pop(userId))
          }
          handleLike({
            postId,
            userId,
            // userLike,
            // userDislike,
            // countDislike,
            // countLike,
            ...updatedCounts,
            usersLikes,
            usersDislikes,
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
          let updatedCounts = { countLike, countDislike }

          // for (var i = 0; i < usersDislikes.length; i++) {
          //   if (userId === usersDislikes[i]) {
          //     console.log('user a déjà liké')
          //     setuserDislike(usersDislikes.pop(userId))
          //   } else {
          //     setuserDislike(usersDislikes.push(userId))
          //   }
          // }
          if (disliked === false) {
            setDisliked(true)
            updatedCounts.countDislike = +1
            if (!usersDislikes.includes(userId)) {
              // setupdatedUsersDislikes(updatedUsersDislikes.push(userId))
              usersDislikes.push(userId)
            }
            // setupdatedUsersDislikes(usersDislikes.push(userId))

            if (liked) {
              setLiked(false)
              updatedCounts.countLike = -1
              if (usersLikes.includes(userId)) {
                // setupdatedUsersLikes(updatedUsersLikes.pop(userId))
                usersLikes.pop(userId)
              }
              // setupdatedUsersLikes(usersLikes.pop(userId))
            }
          } else {
            setDisliked(false)
            updatedCounts.countDislike = -1
            if (usersDislikes.includes(userId)) {
              // setupdatedUsersDislikes(updatedUsersDislikes.pop(userId))
              usersDislikes.pop(userId)
            }

            // setupdatedUsersDislikes(usersDislikes.pop(userId))
          }
          handleLike({
            postId,
            userId,
            liked,
            disliked,
            // userLike,
            // userDislike,
            ...updatedCounts,
            usersLikes,
            usersDislikes,
            // countDislike,
            // countLike,
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
