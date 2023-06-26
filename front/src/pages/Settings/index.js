import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import styled from 'styled-components'

const TableContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  line-height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Close = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: red;
  margin-left: 20px;
  font-size: larger;
  border: none;
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
      })
      .catch((error) => {
        setError(error.message)
      })
  }
  
  const updateUserRole = ({userId, newRole}) => {

    axios({
      method: 'put',
      url: `http://localhost:5000/api/auth/user/${userId}/role`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: {
        role: newRole,
      },
    })
    // Effectuez les actions nécessaires après la mise à jour du rôle
      .then((response) => {
        console.log(response.data) // Réponse de succès
      })
      // Gérez les erreurs de requête
      .catch((error) => {
        console.error(error)
      })
    
  }
  return (
    <>
      <Header />
      <TableContainer>
        <h2>Gestion des droits utilisateurs</h2>
        <table>
            <tr className='title'>
                <th className='pseudoTitle'>Pseudo</th>
                <th className="roleTitle">Droits</th>
                <th className="emailTitle">Email</th>
            </tr>
          {users.map((user) => (
              <div key={user._id}>
              <tr>
                <th className="pseudoColumn">{user.pseudo}:</th>
                <th className="roleColumn">
                  <select
                    value={user.role}
                    onChange={(e) => updateUserRole({ userId: user._id, newRole: e.target.value })}
                    >
                    <option value="administrateur">Administrateur</option>
                    <option value="utilisateur">Utilisateur</option>
                  </select>
                </th>
                <th className='emailColumn'>{user.email}</th>
                <Close
                  style={{ width: '5px' }}
                  onClick={() => deleteUser(user._id)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </Close>
              </tr>
            </div>
          ))}
        </table>
      </TableContainer>
    </>
  )
}

export default UserList
