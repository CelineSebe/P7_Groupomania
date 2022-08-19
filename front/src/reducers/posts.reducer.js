import axios from "axios";
import { GET_POSTS } from "../actions/post.actions";

const initialState ={};

export default function postReducer(state= initialState, action){
    return (dispatch) =>{
        return axios
        .get(`${process.env.REACT_APP_API_URL}api/post`)
        .then((res)=> {
            dispatch({ type: GET_POSTS, payload: res.data})
        })
        .catch((err) => console.log(err))
    }
}