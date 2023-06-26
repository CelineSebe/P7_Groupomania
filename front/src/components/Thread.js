import React, { useEffect } from 'react'
import Card from '../components/Publi/Card'
import styled from 'styled-components'
import CreatePubli from './CreatePubli'
import { useState } from 'react'
import axios from 'axios'

const ThreadContainer = styled.div`
  width: 60%;
  margin: 0px;
  @media screen and (max-width: 1023px) {
    width: 70%;
  }
  @media screen and (max-width: 730px) {
    width: 90%;
  }
`
const H1Thread = styled.h1`
  text-align: center;
  font-size: 18px;
  @media screen and (max-width: 730px) {
    display: none;
  }
`
const MapData = ({ usersData }) => {
  let token = JSON.parse(localStorage.getItem('token'))

  // se connecter pour récupérer l'userId et le token
  const [postsData, setPostsData] = useState()

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:5000/api/publis',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setPostsData(res.data)
        // console.log('post', res.data)
      })

      .catch((error) => {
        console.log(error)
        alert(
          'Toutes nos excuses, impossible de se connecter à la base de données'
        )
      })
  }, [postsData])

  if (postsData && usersData)
    return (
      <>
        {postsData
          .map(function (post) {
            let user = usersData.find((user) => post.userId === user._id)

            const usersLikes = post.usersLikes || [] // Utiliser un tableau vide si post.usersLikes est undefined
            const usersDislikes = post.usersDislikes || [] // Utiliser un tableau vide si post.usersDislikes est undefined
            return (
              <Card
                key={post.id}
                userId={post.userId}
                id={post._id}
                imageUrl={post.imageUrl}
                description={post.description}
                likes={post.likes}
                dislikes={post.dislikes}
                usersLikes={usersLikes}
                usersDislikes={usersDislikes}
                comments={post.comments}
                date={post.date}
                imageUrlUser={user === undefined ? '' : user.imageUrlUser}
                pseudo={user === undefined ? 'user unknown' : user.pseudo}
              />
            )
          })
          .reverse()}
      </>
    )
}

function Thread() {
  let token = JSON.parse(localStorage.getItem('token'))
  let userId = JSON.parse(localStorage.getItem('userId'))

  const [usersData, setUsersData] = useState()

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:5000/api/auth/user',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setUsersData(res.data)
      })

      .catch((error) => {
        console.log(error)
      })
  }, [])
  const imageUrlUser = usersData?.find(
    (user) => user._id === userId
  ).imageUrlUser
  console.log('imageUrlUser', imageUrlUser)
  console.log('usersData', usersData)
  return (
    <ThreadContainer>
      <CreatePubli ImageUrlUser={imageUrlUser} />
      <div
        style={{
          maxHeight: '700px',
          overflow: 'auto',
          width: '100%',
          marginBottom: '40px',
        }}
      >
        <MapData usersData={usersData} />
      </div>
    </ThreadContainer>
  )
}

export default Thread
