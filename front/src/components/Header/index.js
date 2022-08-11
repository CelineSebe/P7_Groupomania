import { Link } from 'react-router-dom'
// import PropTypes from 'prop_types'
import styled from 'styled-components'
import logo from '../../assets/Logos/icon-left-font-monochrome-white.svg'
import colors from '../../utils/style/colors'

const HeaderContainer = styled.header`
  position: fixed;
  top:0px;
  width: 100%;
  margin-bottom: 10px;
  `
const NavLink = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: linear-gradient(to right top, #4e519f, white);
    height: 100px;
    box-shadow: 0px 8px 3px 2px grey 0.5;
    opacity: 70%;
    font-style: "Lato";
    padding: 3px;
`
const ImgHeader = styled.img `
    height: 30px;
    `

const ContainerLink = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 18px;
    `

const NavContent = styled.p`
    padding: 38px 40px;
    color: white;
    &:hover{
        cursor: pointer;
        border-bottom: solid 3px #FFF;
    }`

const ContainerButton = styled.div `
    position: absolute;
    right: 40px;
`
const AccountButton = styled.button`
    background-color: white;
    border-color: ${colors.primary};
    color: ${colors.primary};
    height: 45px;
    width: 120px;
    border-radius: 6px;
    margin: 30px;
    font-size: 14px;
    &:hover{
        cursor: pointer;
        background-color: ${colors.secondary};
    }`

const LogOutButton = styled.button`
    background-color: white;
    border-color: ${colors.primary};
    color: ${colors.primary};
    height: 45px;
    width: 120px;
    border-radius: 6px;
    font-size: 14px;
    &:hover{
        cursor: pointer;
        background-color: ${colors.secondary};
    }`
// function LogOutClick(){
//     window.location = './Login'
//  }
function Header(){
    return (
    <HeaderContainer>
        <NavLink>
            <Link to="/Home">
                <ImgHeader src={logo} alt="logo entreprise"/>
            </Link>
            <ContainerLink>
                <Link to="/Home" style={{ textDecoration: 'none'}}>
                    <NavContent>
                        Home
                    </NavContent>
                </Link>
                <Link to="/Profil" style={{ textDecoration: 'none'}}>
                    <NavContent>
                        Profil
                    </NavContent>
                </Link>
            </ContainerLink>
            <ContainerButton>
                <Link to="/">
                        <AccountButton>
                            ACCOUNT
                        </AccountButton>
                        <LogOutButton>
                            LOGOUT
                        </LogOutButton>     
                </Link>
            </ContainerButton>
        </NavLink>
    </HeaderContainer>
    )
}

export default Header