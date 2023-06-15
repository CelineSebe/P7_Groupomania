import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import TrendingInfo from '../../components/TrendingInfo/TrendingInfo';
import styled from 'styled-components';

const ContainerTrends= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 150px;

`

function UserList() {
    
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetchUsers();
      }, []);
    
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
          .then(response => {
            setUsers(response.data);
            setIsLoading(false);
            setError(null);
            console.log(response)
          })
          .catch(error => {
            setError(error.message);
            setIsLoading(false);
          });
      };

    return (
    <>
    <Header />
   
     {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          {/* Afficher d'autres informations d'utilisateur si nécessaire */}
        </div>
      ))}
    </>

    );
};

export default UserList;