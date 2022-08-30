import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CardContainer =styled.li`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
height: max-content;
border: solid 2px ${colors.secondary};
margin: 20px 5px;
padding: 0px;
border-radius: 10px;
`
const Head =styled.header`
display: flex;
border-radius: 10px 10px 0px 0px;
width: 100%;
height: 35px;
background-color: #F4F3F3;

`
const Main = styled.div`
width: 100%;
height: auto;
`

const Card = ( props ) => {
    const [isLoading, setLoading] = useState(true);


    return (
        
        <CardContainer >
            {/* {!isLoading ? ( */}
                <Head>
                        <img src="" alt=""/>
                        <p style={{padding: 4, fontSize:16}}>Publication de {props.user}</p>
                        <p style={{padding: 4, fontSize:10}}> Le {props.date}</p>
                    </Head>
                    <Main>
                    <i className='fas fa-spinner fa-spin'></i>
                    </Main>
                
               {/* ) : ( */}
               <>
                    {/* <Head>
                        <img src="" alt=""/>
                        <p style={{padding: 4, fontSize:16}}>Publication de {props.user}</p>
                        <p style={{padding: 4, fontSize:10}}> Le {props.date}</p>
                    </Head>
                    <Main>
                        <h2> Test </h2>
                    </Main> */}
               </>
                {/* )} */}
        </CardContainer>
    );
};

export default Card;

