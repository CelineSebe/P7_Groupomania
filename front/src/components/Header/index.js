import { Link } from 'react-router-dom'
// import PropTypes from 'prop_types'
import styled from 'styled-components'
import logo from '../../assets/Logos/icon-left-font-monochrome-white.svg'

const NavLink = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #4E5166;
    height: 100px;
    box-shadow: 0px 8px 50px 2px grey;
    opacity: 70%;
    
`
const ImgHeader = styled.img `
    height: 80px;
    `
const NavContent = styled.p`
    padding: 37px 15px;
    color: white;
    &:hover{
        cursor: pointer;
        border-bottom: solid 3px;
    }
    `
const ContainerLink = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    `
const LogOutButton = styled.button `
    background-color: #FFD7D7;
    height: 50px;
    border-radius: 6px;
    &:hover{
        cursor: pointer;
    }
`
// function LogOutClick(){
//     window.location = './Login'
//  }
function Header(){
    return (
        <NavLink>
            <Link to="/">
                <ImgHeader src={logo} alt="logo entreprise"/>
            </Link>
            <ContainerLink>
                <Link to="/" style={{ textDecoration: 'none'}}>
                    <NavContent>
                        Home
                    </NavContent>
                </Link>
                <Link to="/Profil" style={{ textDecoration: 'none'}}>
                    <NavContent>
                        Profil
                    </NavContent>
                </Link>
                <Link to="/Login">
                    <LogOutButton>
                        Log out
                    </LogOutButton>
                </Link>
            </ContainerLink>
        </NavLink>
    )
}

export default Header