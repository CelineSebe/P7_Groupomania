import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import assets from '../../assets/user-solid.svg';
import {
  MDBCard,
  MDBCardBody,
//   MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import axios from 'axios';


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

 const Card = ( props ) => {
    const [isLoadingCard, setisLoadingCard] = useState(true);
    


    return (
        
        <CardContainer>
        
            {!isLoadingCard ? (
                <>
                <Main>
                    <Head>
                        <ProfilImgContainer>
                        <LabelPostImg alt=".jpg" src={assets}/> 
                        </ProfilImgContainer>
                    </Head>
                    <MDBCard>

                        {/* <i className='fas fa-spinner fa-spin'></i> */}
                    </MDBCard>
                        
                </Main>
                </>
                ) : ( 
                <>            
                    <Main>
                        <Head>
                            <ProfilImgContainer>
                                <LabelPostImg alt=".jpg" src={assets}/> 
                            </ProfilImgContainer>
                            <p style={{padding: 10, fontSize:16}}>Publication de {props.user}</p>
                        </Head>
                    <MDBCard>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='photo' style={{width:"100%"}} />
                        <MDBCardBody>
                            {/* <MDBCardTitle>Card title</MDBCardTitle> */}
                                <div style={{padding:"10px", borderBottom:"2px solid #F1F1F1"}}>
                                <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </MDBCardText>
                            </div>
                            <span style={{display: "flex",justifyContent:"space-around", alignItems:"center",padding: "10px"}}>
                                <MDBBtn href='#' style={{color:"blueviolet", fontSize: 18}}><i className="fa-regular fa-thumbs-up" /><i className="fa-solid fa-thumbs-up" /></MDBBtn>
                                <MDBBtn href='#' style={{color:"blueviolet", fontSize: 18}}><i className="fa-regular fa-comments" /></MDBBtn>
                            </span>
                        </MDBCardBody>
                    </MDBCard>
                    </Main>
                </>
                )}
            </CardContainer>
        
            )
        
        }


export default Card;

