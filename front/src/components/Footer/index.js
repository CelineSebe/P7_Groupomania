import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer= styled.nav`
        display:flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-end;
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
        height: 150px;
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
            <CopyrightStyle>Copyright © 2022 Groupomania</CopyrightStyle>
        </FooterContainer>
    )
}

export default Footer