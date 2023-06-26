import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useState } from 'react'
import colors from '../../utils/style/colors'
import assets from '../../assets/user-solid.svg'

const Modif = styled.div`
  opacity: 1;
`
const ButtonPen = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`

const ButtonModify = ({
  pseudo,
  description,
  imageUrl,
  setIsModif,
  postId,
  setApiCalled,
}) => {
  let pseudoStock = JSON.parse(localStorage.getItem('pseudo'))
  const role = JSON.parse(localStorage.getItem('role'))
  console.log(pseudo)


  return (
    <Modif
      onClick={(e) => {
        e.preventDefault()
        setIsModif(true)
      }}
    >
      {pseudoStock === pseudo || role === "administrateur"? (
        <ButtonPen>
          <i
            style={{ fontSize: '100%', padding: '6px' }}
            class="fa-sharp fa-solid fa-pen-to-square"
          ></i>
        </ButtonPen>
      ) : (
        <></>
      )}
    </Modif>
  )
}

export default ButtonModify
