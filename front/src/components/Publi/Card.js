import React, { useState, useSelector } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CardContainer =styled.li`
height: 100vh;
border: solid 2px ${colors.secondary};
margin: 20px;
border-radius: 10px;

`

const Card = ( {post} ) => {
    // const [isLoading, setLoading] = useState(true);
    // const userData = useSelector((state) => state.usersReducer);

    return (
        
        <CardContainer >
            {/* {isLoading ? (
                <i className='fas fa-spinner fa-spin'></i>
               ) : (
               <>
                    <userData />
               </>
                )} */}
        </CardContainer>
    );
};

export default Card;

