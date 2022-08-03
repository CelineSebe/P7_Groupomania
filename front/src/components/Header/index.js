import { Link } from 'react-router-dom'

function Header(){
    return (
        <nav>
            <Link to="/"> Home </Link>
            <Link to="/Login"> Connexion </Link>
            <Link to="/Profil"> Profil </Link>
        </nav>
    )
}

export default Header