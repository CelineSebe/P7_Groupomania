import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Like = styled.div`
  opacity: 1;
`

function handleLike({
  id,
  likes,
  liked,
  setLiked,
  setNbLike,
  usersLikes,
  token,
}) {
  let counter = likes
  if (liked === false) {
    counter = counter + 1
    setLiked(true)
    setNbLike(counter)
  } else {
    counter = counter - 1
    setLiked(false)
    setNbLike(counter)
  }
  axios
    .patch(
      `http://localhost:5000/api/publis/${id}`,
      { edited_field: 'likes', likes: likes },
      { edited_field: 'usersLikes', usersLikes: usersLikes },
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

const ButtonLike = ({ id, likes, usersLikes }) => {
  const [liked, setLiked] = useState(false)
  const [nbLike, setNbLike] = useState(likes)
  //   const [usersLikes, setUsersLikes] = useState()

  const token = JSON.parse(localStorage.getItem('token'))

  return (
    <>
      <Like
        onClick={(e) => {
          handleLike({
            id,
            likes,
            liked,
            setLiked,
            setNbLike,
            usersLikes,
            token,
          })
        }}
      >
        {nbLike > 0 ? nbLike : <></>}
        {liked === true ? (
          <i className="fa-solid fa-thumbs-up" />
        ) : (
          <i className="fa-regular fa-thumbs-up" />
        )}
      </Like>
    </>
  )
}

export default ButtonLike
