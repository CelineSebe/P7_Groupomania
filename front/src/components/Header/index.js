import { Link } from 'react-router-dom'
// import PropTypes from 'prop_types'
import styled from 'styled-components'
import logo from '../../assets/Logos/icon-left-font-monochrome-white.svg'
import colors from '../../utils/style/colors'
import '../../pages/Login/index';
import { useContext } from 'react';
import AuthContext from '../../store/authContext';


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
    background: linear-gradient(to right top, #4E5166, white);
    height: 100px;
    box-shadow: 0px 8px 3px 2px grey 0.5;
    opacity: 70%;
    font-style: "Lato";
    padding: 3px;
    /* @media screen and (max-width: 1023px)
    {
        display: flex;
        justify-content: center;
        align-items: space-between;
    } */
    @media screen and (max-width: 730px)
    {
        justify-content: flex-start;
    }
`
const ImgHeader = styled.img `
    height: 30px;
    margin: 0px 40px;
    @media screen and (max-width: 1023px)
    {
        display: flex;
        justify-content: center;
        align-items: space-around;
    }
    @media screen and (max-width: 730px){
        margin: 0px 10px;
    }
    `

const ContainerLink = styled.div`
    display: flex;
    justify-content: space-around;
    `

const NavContent = styled.p`
    padding: 38px 40px;
    color: white;
    font-size: medium;
    &:hover{
        cursor: pointer;
        border-bottom: solid 3px #FFF;
    }
    @media screen and (max-width: 1023px)
    {
        padding: 38px 20px;
    }
`

const ContainerButton = styled.div `
    position: absolute;
    right: 40px;
`
// const AccountButton = styled.button`
//     background-color: white;
//     border-color: ${colors.primary};
//     color: ${colors.primary};
//     height: 45px;
//     width: 120px;
//     border-radius: 6px;
//     margin: 30px;
//     font-size: 14px;
//     &:hover{
//         cursor: pointer;
//         background-color: ${colors.secondary};
//     }`

const LogOutButton = styled.button`
    background-color: white;
    border-color: ${colors.primary};
    color: ${colors.primary};
    height: 45px;
    width: 120px;
    border-radius: 6px;
    font-size: larger;
    &:hover{
        cursor: pointer;
        background-color: ${colors.secondary};
    }
    @media screen and (max-width: 1023px) {
        width: 60px;
        
    }
    `
// function LogOutClick(){
//     window.location = './Login'
//  }
function Header(){

const AuthCont = useContext(AuthContext);

const isLoggedIn = AuthCont.isLoggedIn;


    return (
        
    <HeaderContainer>
        <NavLink>
            <Link to="/Home">
                <ImgHeader src={logo} alt="logo entreprise"/>
            </Link>
            <ContainerLink>
                <Link to="/Home" style={{ textDecoration: 'none'}}>
                    <NavContent >
                    <i className="fa-solid fa-house"></i>
                    </NavContent>
                </Link>
                <Link to="/Profil" style={{ textDecoration: 'none'}}>
                    <NavContent>
                        <i className="fa-solid fa-user"></i>
                    </NavContent>
                </Link>
                <Link to="/Trending" style={{ textDecoration: 'none'}}>
                    <NavContent>
                    <i className="fa-solid fa-rocket"></i>
                    </NavContent>
                </Link>
            </ContainerLink>
            <ContainerButton>
                <Link to="/">
                        <LogOutButton onClick={AuthCont.logout}>
                            <i className="fa-solid fa-right-from-bracket"></i>
                        </LogOutButton>     
                </Link>
            </ContainerButton>
        </NavLink>
    </HeaderContainer>
    )
}

export default Header