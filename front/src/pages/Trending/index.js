import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import styled from 'styled-components'

const TableContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  line-height: 35px;
`
const Close = styled.th`
  cursor: pointer;
  color: red;
  display: flex;
  justify-content: center;
  margin-left: 25px;
  font-size: larger;
`

function UserList() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  let token = JSON.parse(localStorage.getItem('token'))

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = () => {
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

  const deleteUser = (userId) => {
    // Effectuez une requête DELETE pour supprimer le contact avec l'ID spécifié
    // Utilisez l'URL appropriée pour votre backend
    axios({
      method: 'delete',
      url: `http://localhost:5000/api/auth/user/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        // Mettez à jour la liste des utilisateurs en supprimant l'utilisateur supprimé
        setUsers(users.filter((user) => user._id !== userId))
        console.log(response)
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  const updateUserRole = (userId, newRole) => {
    axios({
        method: 'put',
        url: `http://localhost:5000/api/user/${userId}/role`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data: {
            role: newRole,
          },
      }) 
      .then((response) => {
        console.log(response.data) // Réponse de succès
        // Effectuez les actions nécessaires après la mise à jour du rôle
      })
      .catch((error) => {
        console.error(error)
        // Gérez les erreurs de requête
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
                <th>{user.pseudo}:</th>
                <th>
                    <select value={user.role} onChange={(e) => updateUserRole(user._id, e.target.value)}>
                        <option value="administrateur">Administrateur</option>
                        <option value="utilisateur">Utilisateur</option>
                    </select>
                    </th>
                <th>{user.email}</th>
                <Close onClick={() => deleteUser(user._id)}>
                  <i className="fa-solid fa-xmark"></i>
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
