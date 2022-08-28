import React from 'react';
import colors from '../../utils/style/colors';
import styled from 'styled-components';

 const ButtonStyle = styled.div`
  
  padding: 15px 45px;
  text-align: center;
  border-radius: 100px;
  background-color: white;
  border: 1px solid ${colors.secondary};
  &:hover {
    cursor: pointer;
    background-color: ${colors.secondary};
  }
 `

const Button = (props) => {
    return (
        <ButtonStyle>
            <button className={ButtonStyle.button}
            type={props.type}
            onClick={props.onClick} 
            style={{border:"none", backgroundColor:"inherit", fontSize: 16, cursor:"inherit"}}
            >
                {props.children}  
            </button>
        </ButtonStyle>
    );
};

export default Button;