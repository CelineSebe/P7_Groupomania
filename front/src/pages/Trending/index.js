import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import styled from 'styled-components'

const TableContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  line-height:35px;
`
const Close = styled.div`
  cursor: pointer;
  color: red;
  display: flex;
  justify-content: flex-end;
  margin-right: 25px;
  font-size: larger;
`

function UserList() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = () => {
    let token = JSON.parse(localStorage.getItem('token'))

    axios({
      method: 'get',
      url: 'http://localhost:5000/api/auth/user',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        setUsers(response.data)
        setIsLoading(false)
        setError(null)
        console.log(response.data)
      })
      .catch((error) => {
        setError(error.message)
        setIsLoading(false)
      })
  }

  return (
    <>
      <Header />
      <TableContainer>
        <table>
          <caption>Tableau des utilisateurs</caption>
          {users.map((user) => (
            <div key={user._id}>
              <tr>
                <th>{user.pseudo}</th>
                <th> : </th>
                <th>{user.email}</th>
                <Close>
                <i class="fa-solid fa-xmark"></i>
                </Close>
              </tr>
              {/* Afficher d'autres informations d'utilisateur si nécessaire */}
            </div>
          ))}
        </table>
      </TableContainer>
    </>
  )
}

export default UserList
