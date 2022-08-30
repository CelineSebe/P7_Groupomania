 import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Button from '../../components/Button/index'

const ContainerCreatePubli = styled.div`
display: flex;
flex-direction: column;
background-color: white;
height: 180px;
width: 100%;
border-radius: 25px;
margin: 20px 0;
/* border: solid 2px ${colors.secondary}; */

`
const ContainerPublication = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 60%;
width: 100%;
`

const FormPost = styled.form`
height: 100%;
width: 100%;
`
const FormStyle = styled.form`
border-bottom: solid 2px ${colors.secondary};
margin:40px;
`

const InputStyleDescription= styled.input`
border: none;
padding: 15px;
height: 90%;
width: 100%;
&::placeholder {
    font-size: 14px;
  }
  &:focus {
    outline: 1px solid grey;
  }
`

const ProfilImgContainer= styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
width: 120px;
height: 100px;
margin: 0 0px 0px 30px;

`

const LabelPostImg = styled.img`
`


const ContainerButtons = styled.div`
display: flex;
justify-content: space-around;
align-items: flex-start;
height:50px;
padding-left: 50px;
`

const ButtonPost = styled.button`

    background-color: white;
    border-color: blueviolet;
    color: blueviolet;
    height: 45px;
    width: 120px;
    border-radius: 6px;
    font-size: larger;
    &:hover{
        cursor: pointer;
        background-color: ${colors.secondary};
    }
    @media screen and (max-width: 1023px) {
        width: 60px;
        
    }
`
const HideButton = styled.div`
    display:none;
`
const PreviewImgContainer = styled.div`
`
const PreviewImgDiv = styled.div`
`
const PreviewImg = styled.div`
`

 
 const CreatePubli = ({setApiCalled}) => {

    const [description, setDescription] = useState('');
    const [imagePubli, setImagePubli] = useState('');

    const Post = (e) =>
    {
        e.preventDefault()
        const description = document.getElementById('descriptionInput');
        const descriptionError = document.querySelector('.description .error')

        const data = new FormData()
        data.append('description', description)
        data.append('imagePubli', imagePubli)

        if(description.length === 0){
            descriptionError.innerHTML = "OUPS ! Votre publication est vide !"
        }
        
        const login = localStorage.getItem('token')
        const headers =
            {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
    
        console.log(login)
        axios
            .post('http://localhost:3000/publis/', data,{
                header: headers,
            })
            .then((res) => console.log(res))
            .then(function(value){
                setApiCalled(true)
            })
            .catch((err) => console.log(err))
        
            let descriptionInput = document.getElementById('descriptionInput')
            descriptionInput.value = ''
        
            removeSelectedImage()
            setImagePubli(undefined)
          }
        
          const [selectedImage, setSelectedImage] = useState('')
        
          const imageChange = (event) => {
            if (event.target.files && event.target.files.length > 0) {
              setSelectedImage(event.target.files[0])
            }
          }
        
          const removeSelectedImage = () => {
            setSelectedImage()
            setImagePubli(undefined)
          }
    

    return (
        <>
            <ContainerCreatePubli>
                <ContainerPublication>
                    <ProfilImgContainer>
                            <LabelPostImg alt=".jpg" src=""/>       
                    </ProfilImgContainer>
                    <FormPost onSubmit={Post} id="post">
                        <FormStyle>
                            <InputStyleDescription
                                id="descriptionInput"
                                type="text"
                                placeholder="Quoi de neuf? Dites nous quelque chose..."
                                onChange={(event) => {
                                    const { value } = event.target
                                    setDescription(value)
                                }}
                                    required
                                />
                            <label htmlFor="descriptionInput" style={{ display: 'none' }}>
                                    Description de la publication
                            </label>
                            <div className='description error'></div>
                        </FormStyle>
                    </FormPost>
                </ContainerPublication>
                <FormPost onSubmit={Post} id="post">
                    <ContainerButtons>
                        <HideButton>
                            <input
                                id="imgInput"
                                type="file"
                                accept="image/*"
                                onChange={(event) => {
                                    const imagePubli = event.target.files[0]
                                    setImagePubli(imagePubli)
                                    imageChange(event)
                                    }}
                            />
                        </HideButton>
                            <Button type="addPicture" onClick={() => {}}>
                                Add image
                            </Button>       
                        <label htmlFor="imgInput" alt="Dossier" src="" >  
                        </label>
                        {selectedImage && (
                            <PreviewImgContainer>
                                <PreviewImgDiv>
                                    <PreviewImg
                                        src={URL.createObjectURL(selectedImage)}
                                        alt="Aperçu"
                                    />
                                </PreviewImgDiv>                                
                                    <button
                                        id="removeImg"
                                        onClick={() => {
                                        removeSelectedImage()
                                        }}
                                    >        
                                     Retirer cette image                               
                                    </button>
                                    <label htmlFor="removeImg" alt="Dossier" src="">
                                        Delete
                                    </label>
                            </PreviewImgContainer>
                            )}    
                        <ButtonPost type="submit" id="post"
                                    onClick={() => {}}>
                            Post
                        </ButtonPost>
                    </ContainerButtons>
                </FormPost>
            </ContainerCreatePubli>
        </>
        
    );
 };
 
 export default CreatePubli;