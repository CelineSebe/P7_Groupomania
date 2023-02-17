import React from 'react'
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

function handleLike({ id, counter, userId, likes, usersLikes, token }) {
  axios
    .patch(
      `http://localhost:5000/api/publis/${id}`,
      //   { edited_field: 'likes', likes: counter },
      //   { edited_field: 'usersLikes', usersLikes: userId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}

const ButtonLike = ({
  id,
  userId,
  likes,
  dislikes,
  usersLikes,
  usersDislikes,
}) => {
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)

  const [countLike, setcountLike] = useState(likes)
  const [countDislike, setcountDislike] = useState(dislikes)
  //   const [usersLikes, setUsersLikes] = useState()

  const token = JSON.parse(localStorage.getItem('token'))

  return (
    <>
      <Like
        onClick={(e) => {
          let counter = likes
          if (liked === false) {
            counter = counter + 1
            setLiked(true)
            setcountLike(counter)
          } else {
            counter = counter - 1
            setLiked(false)
            setcountLike(counter)
          }
          handleLike({
            id,
            counter,
            userId,
            liked,
            usersLikes,
            token,
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
          let counter = dislikes
          if (disliked === false) {
            counter = counter + 1
            setDisliked(true)
            setcountDislike(counter)
          } else {
            counter = counter - 1
            setDisliked(false)
            setcountDislike(counter)
          }
          handleLike({
            id,
            counter,
            userId,
            liked,
            disliked,
            usersLikes,
            usersDislikes,
            token,
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
