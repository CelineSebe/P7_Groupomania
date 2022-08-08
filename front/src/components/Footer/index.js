import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer= styled.footer`
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
`
const LinkContainer= styled.a `
        &:hover{
            font-weight: bold;
        }
`
const CopyrightStyle = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
`
const FooterContainer= styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-color: #4E5166;
        height: 180px;
        box-shadow: 0px -8px 50px 1px grey;
        `

function Footer () {
    return (
        <FooterContainer>
            <NavContainer>
                <LinkContainer>
                    <Link to="*" style={{ textDecoration: 'none', color: 'black'}}> Mentions légales</Link>
                </LinkContainer>
                <LinkContainer>
                    <Link to="*" style={{ textDecoration: 'none', color: 'black'}}> Contact </Link>
                </LinkContainer>
            </NavContainer>
            <CopyrightStyle styl={{ }}>Copyright © 2022 Groupomania</CopyrightStyle>
        </FooterContainer>
    )
}

export default Footer