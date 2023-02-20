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

//   axios
//     .post(
//       `http://localhost:5000/api/publis/${id}`,
//       //   { edited_field: 'likes', likes: counter },
//       //   { edited_field: 'usersLikes', usersLikes: userId },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ id }),
//       }
//     )
//     .then((response) => {
//       console.log(response)
//     })
//     .catch((error) => {
//       console.log(error)
//     })

const ButtonLike = ({
  id,
  userId,
  likes,
  dislikes,
  usersLikes,
  usersDislikes,
}) => {
  const [liked, setLiked] = useState(false)
  const [countLike, setcountLike] = useState(likes)
  //   const [usersLikes, setUsersLikes] = useState()

  const token = JSON.parse(localStorage.getItem('token'))
  function handleLike({
    id,
    counter,
    userId,
    likes,
    dislikes,
    usersLikes,
    token,
  }) {
    // useEffect(() => {
    if (liked === true) {
      fetch(`http://localhost:5000/api/publis/${id}/like`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      })
        .then(function (res) {
          if (res.ok) {
            return res.json()
          }
        })
        .then(function (value) {})
        .catch(function (err) {
          console.log(err)
        })
    } else {
      fetch(`http://localhost:3000/api/publis/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      })
        .then(function (res) {
          if (res.ok) {
            return res.json()
          }
        })
        .then(function (value) {})
        .catch(function (err) {
          console.log(err)
        })
    }
    // }, [handleLike])
  }
  return (
    <>
      <Like
        onClick={(e) => {
          if (liked === false) {
            setLiked(true)
            setcountLike(countLike + 1)
            handleLike({
              id,
              userId,
              liked,
              likes,
              dislikes,
              usersLikes,
              token,
            })
          } else {
            setLiked(false)
            setcountLike(countLike - 1)
            handleLike({
              id,
              userId,
              liked,
              likes,
              dislikes,
              usersLikes,
              token,
            })
          }
        }}
      >
        {countLike > 0 ? countLike : <></>}
        {liked === true ? (
          <i className="fa-solid fa-thumbs-up" />
        ) : (
          <i className="fa-regular fa-thumbs-up" />
        )}
      </Like>
      {/* <Dislike
        onClick={(e) => {
          if (disliked === false) {
            setLiked(false)
            setDisliked(true)
            setcountLike(countLike - 1)
            setcountDislike(countDislike + 1)
          } else {
            setDisliked(false)
            setcountDislike(countDislike - 1)
          }
          handleLike({
            id,
            userId,
            likes,
            dislikes,
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
      </Dislike> */}
    </>
  )
}

export default ButtonLike
