import { Link } from 'react-router-dom'
// import PropTypes from 'prop_types'
import styled from 'styled-components'
import logo from '../../assets/Logos/icon-left-font-monochrome-black.png'

const NavLabel = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #FD2D01;
    height: 100px;
    box-shadow: 0px 8px 50px 2px grey;
`
const ImgHeader = styled.img `
    display: flex;
    flex-direction: row;
    justify-content: left;
    height: 300px;
    `

function Header(){
    return (
        <div className="header-container">
            <NavLabel>
            <ImgHeader src={logo} alt="logo entreprise"/>
                <Link to="/Profil"> MyProfil </Link>
                <Link to="/"> Home </Link>
                <Link to="/Login"> Connexion </Link>
            </NavLabel>
        </div> 
    )
}

export default Header