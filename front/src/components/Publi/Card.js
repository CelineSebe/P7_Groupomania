import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import assets from '../../assets/user-solid.svg';
import { PropTypes } from 'react';
import { dateFormat } from '../../utils/DateFormat'
import {
  MDBCard,
  MDBCardBody,
//   MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';


const CardContainer =styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: max-content;
border: solid 3px ${colors.secondary};
margin: 20px 0px;
padding: 0px;
border-radius: 20px;
background-color: white;

`
const Head =styled.header`
display: flex;
width: 100%;
height: 40px;
border-radius: 20px 20px 0px 0px;
`

const ProfilImgContainer= styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
width: 30px;
height: 25px;
margin:7px;
`

const LabelPostImg = styled.img`
width: 100%;
height: 100%;
border-radius: 50px;
`
const Main = styled.div`
width: 100%;
height: auto;
border-radius: 15px;;
&:hover{
    background-color: #F8F8F8;
    cursor: pointer;
}
`
const PostCreation =styled.div`
    font-size: 12px;
    padding-top: 13px;
    margin: 0;
`

 const Card = ( {description, imageUrl} ) => {
    const [isLoadingCard, setisLoadingCard] = useState(true);
    // const authCont = useContext(AuthContext);
    // const isLoggedIn = authCont.isLoggedIn;

    let pseudo = localStorage.getItem('pseudo');
    

    return (
        
        <CardContainer>
        
            {/* {!setisLoadingCard} ? (
                 <i className='fas fa-spinner fa-spin'></i>
                <> ) : (            */}
                <Main>
                    <Head>
                        <ProfilImgContainer>
                            <LabelPostImg alt=".jpg" src={assets}/> 
                        </ProfilImgContainer>
                        <p style={{padding: 10, fontSize:16}}>Publication de {pseudo}</p>
                    </Head>
                <MDBCard>
                    <MDBCardImage src={imageUrl} position='top' alt='photo' style={{width:"100%"}} />
                    <MDBCardBody>
                        <div style={{padding:"10px", borderBottom:"2px solid #F1F1F1"}}>
                            <MDBCardText>
                                <div>{description}</div>
                                <PostCreation>
                                    Créé il y a{' '}
                                    {dateFormat(new Date(), 'MMM dd yyyy')}
                                </PostCreation>
                            </MDBCardText>
                        </div>
                        <span style={{display: "flex",justifyContent:"space-around", alignItems:"center",padding: "10px"}}>
                            <MDBBtn href='#' style={{color:"blueviolet", fontSize: 18}}><i className="fa-regular fa-thumbs-up" /><i className="fa-solid fa-thumbs-up" /></MDBBtn>
                            <MDBBtn href='#' style={{color:"blueviolet", fontSize: 18}}><i className="fa-regular fa-comments" /></MDBBtn>
                        </span>
                    </MDBCardBody>
                </MDBCard>
                </Main>
                {/* ) */}
                {/* </> */}
            </CardContainer>
                )
        
        }


export default Card;

