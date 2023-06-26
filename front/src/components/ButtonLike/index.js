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
  const [refreshPage, setRefreshPage] = useState(false)

  const [countDislike, setcountDislike] = useState(dislikes)
  const [countLike, setcountLike] = useState(likes)
  // const [updatedCountLikes, setupdatedCountLikes] = useState(countLike)
  // const [updatedCountDislikes, setupdatedCountDislikes] = useState(countDislike)
  
  const token = JSON.parse(localStorage.getItem('token'))
  const userId = JSON.parse(localStorage.getItem('userId'))

  function resetCounts() {
    setcountDislike(dislikes);
    setcountLike(likes);
  }
  useEffect(() => {
    resetCounts();
  }, [postId]);

  useEffect(() => {
    if (refreshPage) {
      window.location.reload() // Rafraîchir la page
    }
  }, [refreshPage])

  function modifyLike({
    postId,
    countDislike,
    countLike,
    usersLikes,
    usersDislikes,
  }) {
    const token = JSON.parse(localStorage.getItem('token'))

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
      setRefreshPage(true)
      
      // alert('vos likes ont bien été modifié')
    })
    .then((data) => {
      if (data) {
        setcountLike(data.likes);
        setcountDislike(data.dislikes)
      }})

      .catch((err) => {
        console.log(err)
        window.alert("Vos likes n'ont pas été modifié. Veuillez recommencer!")
      })
  }

  function handleLike({
    postId,
    userId,
    liked,
    disliked,
    userDislike,
    userLike,
    countDislike,
    countLike,
    token,
    description,
    imageUrl,
  }) {
    // let res = window.confirm(
      // 'Votre publication va être likée/dislikée. Confirmation?'
    // )
    // if (res) {
      
      console.log('handleLiked')
      modifyLike({
        postId,
        userId,
        liked,
        disliked,
        countDislike,
        countLike,
        userDislike,
        userLike,
        token,
        description,
        imageUrl,
      })
    }
  // initialisation des variables updatedUsersLikes et updatedUsersDislikes

  useEffect(() => {
    if (usersLikes.includes(userId)) {
      setLiked(true)
      setDisliked(false)
    } else if (usersDislikes.includes(userId)) {
      setDisliked(true)
      setLiked(false)
    } else {
      setLiked(false)
      setDisliked(false)
    }
  }, [usersLikes, usersDislikes, userId])

  function clicLike(){
    let updatedCounts = { countLike, countDislike }

          if (!liked) {
            // L'utilisateur clique sur "Like" pour la première fois
            setLiked(true)
            updatedCounts.countLike = +1

            if (!usersLikes.includes(userId)) {
              usersLikes.push(userId)
            }
            if (disliked) {
              setDisliked(false)
              updatedCounts.countDislike = -1
              if (usersDislikes.includes(userId)) {
                usersDislikes.pop(userId)
              }
            }
          } else {
            setLiked(false)
            updatedCounts.countLike = -1
            if (usersLikes.includes(userId)) {
              usersLikes.pop(userId)
            }
          }
          handleLike({
            postId,
            userId,
            ...updatedCounts,
            usersLikes,
            usersDislikes,
            token,
            description,
            imageUrl,
          })
        }
function clicDislike(){
  let updatedCounts = { countLike, countDislike }

          if (!disliked) {
            setDisliked(true)
            updatedCounts.countDislike = +1
            if (!usersDislikes.includes(userId)) {
              usersDislikes.push(userId)
            }
            
            if (liked) {
              setLiked(false)
              updatedCounts.countLike = -1
              if (usersLikes.includes(userId)) {
                usersLikes.pop(userId)
              }
            }
          } else {
            setDisliked(false)
            updatedCounts.countDislike = -1
            if (usersDislikes.includes(userId)) {
              usersDislikes.pop(userId)
            }
          }
          handleLike({
            postId,
            userId,
            liked,
            disliked,
            ...updatedCounts,
            usersLikes,
            usersDislikes,
            token,
            description,
            imageUrl,
          })
}
  return (
    <>
      <Like
        onClick={(e) => {
          e.preventDefault()
          clicLike()
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
          clicDislike()
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
