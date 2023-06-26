import React from 'react'
import styled from 'styled-components'

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
  setIsModif,

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
      {pseudoStock === pseudo || role === 'administrateur' ? (
        <ButtonPen>
          <i
            style={{ fontSize: '100%', padding: '6px' }}
            className="fa-sharp fa-solid fa-pen-to-square"
          ></i>
        </ButtonPen>
      ) : (
        <></>
      )}
    </Modif>
  )
}

export default ButtonModify
