 import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
// import Button from '../../components/Button/index';
import assets from '../../assets/user-solid.svg';


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
padding: 10px 0px 15px 15px;
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
margin: 45px 0px 0px 20px;
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
    &:hover
    {
        cursor: pointer;
        background-color: white;
        border: none;
    }
    @media screen and (max-width: 1023px) 
    {
        width: 60px;  
    }
`
const Hide= styled.div`
    width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`
// const AddButton = styled.div`
// width: 10%;
// height: 50%;
// `

const ButtonAdd = styled.label`
background-color: ${colors.secondary};
border-color: ${colors.primary};
color:${colors.primary};
height: 35px;
width: 60px;
border-radius: 15px;
font-size: 14px;
margin-top: 10px;
margin-right: 80px;
display: flex;
justify-content: center;
align-items: center;
&:hover{
    cursor: pointer;
    background-color: white;
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

 
const CreatePubli = () => {

    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const token = JSON.parse(localStorage.getItem('token'));
    const userId = JSON.parse(localStorage.getItem('userId'));

    const Post = (e) =>
    {
        e.preventDefault()
       
        const descriptionError = document.querySelector('.description.error');
         if(description.length === 0){
            descriptionError.innerHTML = "OUPS ! Votre publication est vide !"
        }else{
            descriptionError.innerHTML = '';

        const dataPost = new FormData ()
            dataPost.append( "description", description)
            dataPost.append("imageUrl", imageUrl)
        
        console.log(token);
        console.log(userId);

        
        axios({
            method:"post",
            url: "http://localhost:5000/api/publis",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
                },
            data:  
               dataPost
            
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }
        
            let descriptionInput = document.getElementById('descriptionInput')
            descriptionInput.value = ''
        
            removeSelectedImage()
            setImageUrl()
        }
        
          const [selectedImage, setSelectedImage] = useState('')
        
          const imageChange = (e) => {
            if (e.target.files && e.target.files.length > 0) {
              setSelectedImage(e.target.files[0])
            }
          }
        
          const removeSelectedImage = () => {
            setSelectedImage()
            setImageUrl(undefined)
          }
        
    

    return (
        <>
            <ContainerCreatePubli>
                <FormPost onSubmit={Post} id="post" encType='multipart/form-data'>
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
                            
                        </FormStyle>
                    
                    </ContainerPublication>
               
                    <ContainerButtons>
                        <Hide>
                            <input
                                id="imgUrl"
                                type="file"
                                onChange={(e) => {
                                    const imageUrl = e.target.files[0]
                                    setImageUrl(imageUrl)
                                    imageChange(e)
                                    }}
                            />
                        </Hide>
                            <label htmlFor="imgUrl" alt="Dossier" src="" > 
                            </label>
                            <ButtonAdd htmlFor="imgUrl" type="addPicture" onClick={() => {}}>
                                    <i className="fa-solid fa-camera"></i>
                            </ButtonAdd>                                                          
                        
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
                            <div>
                                <i className="fa-solid fa-paper-plane"></i>
                            </div>
                        </ButtonPost>
                        <label htmlFor='post'></label>
                    </ContainerButtons>
                </FormPost>
            </ContainerCreatePubli>
            <div className='description error' style={{fontSize: 16, color: "red", textAlign: "center", paddingTop: 2}}></div>
        </>
        
    );
 };
 
 export default CreatePubli;