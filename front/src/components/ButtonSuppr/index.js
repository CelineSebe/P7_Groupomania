import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import Card from '../Publi/Card';


const Suppr = styled.div`
&:hover{
    opacity: 0.5
}
`

function supprOnePost({ postId, setApiCalled }){
    let token = JSON.parse(localStorage.getItem('token'))

        axios({
                method: 'DELETE',
                url: `http://localhost:5000/api/auth/publis/${postId}`,
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                    },
            })
                .then((res) => {
                    console.log(res.data)
                    alert("votre post a bien été supprimé");
                })
                                    
                .catch((err) => {
                    console.log(err)
                    window.alert("Votre post n'a pas été supprimé")
                })
        }

function handleSuppr({postId, setApiCalled}){
    let res = window.confirm(
        `Êtes-vous sûr de vouloir supprimer ce post?`
    )
    if(res){
        supprOnePost({postId, setApiCalled})
    }
}

const ButtonSuppr = ({postId, setApiCalled}) => {


    return (
        <Suppr setApiCalled={setApiCalled} onClick={(e) => { 
                e.preventDefault()
                handleSuppr({postId, setApiCalled})}}>
            <i style= {{fontSize:"100%", padding: "10px"}} class="fa-solid fa-trash"></i>
        </Suppr>
    );
};

export default ButtonSuppr;