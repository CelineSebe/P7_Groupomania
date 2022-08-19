import axios from "axios";

export const GET_USER = "GET_USER";

export const getUser = (id) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REAC_APP_API_URL}api/auth/login`)
            .then((res) => {
                dispatch({ type: GET_USER, payload: res.data});
            })
            .catch((err) => console.log(err))
    };
};