import React, { useState, useSelector } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CardContainer =styled.li`
display: flex;
justify-content: center;
width: 80%;
height: max-content;
border: solid 2px ${colors.secondary};
margin: 20px 5px;
border-radius: 10px;

`

const Card = ( {post} ) => {
    const [isLoading, setLoading] = useState(true);
    // const userData = useSelector((state) => state.usersReducer);

    return (
        
        <CardContainer >
            {isLoading ? (
                <i className='fas fa-spinner fa-spin'></i>
               ) : (
               <>
                    
               </>
                )}
        </CardContainer>
    );
};

export default Card;

