import React from 'react';
import styled from 'styled-components';

const Modif = styled.div`
&:hover{
    opacity: 0.5;
}
`


const ButtonModify = () => {
    return (
        <Modif>
            <i style= {{fontSize:"100%", padding: "6px"}} class="fa-sharp fa-solid fa-pen-to-square"></i>        
        </Modif>
    );
};

export default ButtonModify;