import { useState, useContext } from 'react'; 
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';  

export default function useAuth() {
    let history = useHistory();
    const { setUser } = useContext(UserContext);
    const [error, setError] = useState(null);

    //set user
    const setUserContext = async () => {
        return await axios.get('api/auth/user').then(res => {         
            setUser(res.data.currentUser);  
            history.push('/home');                     
            }).catch((err) => {
            setError(err.response.data);
        })
    }

    //register user  
    const registerUser = async (data) => {
        console.log(data);
        const { username, email, password} = data;
            return axios.post(`api/auth/signup`, {
                  username,
                  email,
                  password,
                
                }).then(async () => {
                    await setUserContext();
                })
                .catch((err) => {
                   return setError(err.response.data);
            })
        };

    //login user 
    const loginUser = async (data) => {
        const { username, password } = data;
            return axios.post('api/auth/login', {
                username,
                password,
            }).then(async () => {
                await setUserContext();
            }).catch((err) => {
                setError(err.response.data);
            })
        };

    return {
        registerUser,
        loginUser,
        error
    }
}