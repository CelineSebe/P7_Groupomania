 import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Button from '../../components/Button/index';
import assets from '../../assets/profile.jpg';

const ContainerCreatePubli = styled.div`
display: flex;
flex-direction: column;
background-color: white;
height: 100px;
width: 100%;
border-radius: 20px;
margin: 5px 0;
/* border: solid 2px ${colors.secondary}; */
`
const FormPost = styled.form`
height: 100%;
width: 100%;
`

const ContainerPublication = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 50%;
width: 90%;

`


const FormStyle = styled.div`
border-bottom: solid 2px ${colors.secondary};
width: 80%;
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
    outline: 1px solid white;
  }
`

const ProfilImgContainer= styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
width: 60px;
height: 55px;
margin: 35px 0px 0px 20px;

`

const LabelPostImg = styled.img`
width: 100%;
height: 100%;
border-radius: 50px;
`


const ContainerButtons = styled.div`
display: flex;
justify-content: space-around;
align-items: flex-start;
height:50px;
padding-left: 100px;
padding-top: 0px;
`

const ButtonPost = styled.button`

background-color: white;
    border-color: blueviolet;
    color: blueviolet;
    height: 35px;
    width: 60px;
    border-radius: 6px;
    font-size: 14px;
    margin-top: 10px;
    &:hover{
        cursor: pointer;
        background-color: ${colors.secondary};
    }
    @media screen and (max-width: 1023px) {
        width: 60px;  
    }
`
const Hide = styled.div`
    display:none;
`
// const AddButton = styled.div`
// width: 10%;
// height: 50%;
// `

const ButtonAdd = styled.button`

background-color: white;
    border-color: ${colors.primary};
    color:${colors.primary};
    height: 35px;
    width: 60px;
    border-radius: 15px;
    font-size: 14px;
    margin-top: 10px;
    margin-right: 80px;
    &:hover{
        cursor: pointer;
        background-color: ${colors.secondary};
    }
    @media screen and (max-width: 1023px) {
        width: 60px;
        
    }
`

const ButtonDelete = styled.button`
background-color: white;
    border-color: ${colors.primary};
    color: ${colors.primary};
    margin: 10px 5px;
    height: 35px;
    width: 40px;
    border-radius: 6px;
    font-size: larger;
    &:hover{
        cursor: pointer;
        background-color: ${colors.secondary};
    }
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
       
        // const descriptionError = document.querySelector('.description .error');
         // if(description.length === 0){
        //     descriptionError.innerHTML = "OUPS ! Votre publication est vide !"
        // }

        const data = new FormData()
        data.append('descriptionInput', description)
        data.append('imagePubli', imagePubli)
       
        
        const token = JSON.parse(localStorage.getItem('token'));
        const headers =
            {
            Authorization: `Bearer ${token}`
            }
    
        console.log(token);
        axios
            .post('http://localhost:5000/api/publis', data,{
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
        
          const imageChange = (e) => {
            if (e.target.files && e.target.files.length > 0) {
              setSelectedImage(e.target.files[0])
            }
          }
        
          const removeSelectedImage = () => {
            setSelectedImage()
            setImagePubli(undefined)
          }
    

    return (
        <>
            <ContainerCreatePubli>
                <FormPost onSubmit={Post} id="post">
                    <ContainerPublication>
                        <ProfilImgContainer>
                            <LabelPostImg alt=".jpg" src={assets}/>       
                        </ProfilImgContainer>
                        <FormStyle>
                            <InputStyleDescription
                                id="descriptionInput"
                                type="text"
                                placeholder="Quoi de neuf? Dites nous quelque chose..."
                                onChange={(e) => {
                                    const { value } = e.target
                                    setDescription(value)
                                }}
                                    required
                                />
                            <label htmlFor="descriptionInput" style={{ display: 'none' }}>
                            </label>
                            <div className='description error'></div>
                        </FormStyle>
                    
                    </ContainerPublication>
               
                    <ContainerButtons>
                        <Hide>
                            <input
                                id="imgInput"
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const imagePubli = e.target.files[0]
                                    setImagePubli(imagePubli)
                                    imageChange(e)
                                    }}
                            />
                            </Hide>
                            <ButtonAdd htmlFor="imgInput" type="addPicture" onClick={() => {}}>
                                    Add
                                </ButtonAdd>                                                    
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
                                    <ButtonDelete
                                        id="removeImg"
                                        onClick={() => {
                                        removeSelectedImage()
                                        }}
                                    >        
                                           <p style={{fontSize: 12}}>Delete</p>                      
                                    </ButtonDelete>
                                    <label htmlFor="removeImg" alt="Dossier" src="">
                                        
                                    </label>
                            </PreviewImgContainer>
                            )}    
                        <ButtonPost type="submit" id="post"
                                    onClick={Post}>
                            Post
                        </ButtonPost>
                        <label htmlFor='post'></label>
                    </ContainerButtons>
                </FormPost>
            </ContainerCreatePubli>
        </>
        
    );
 };
 
 export default CreatePubli;