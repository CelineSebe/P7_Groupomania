import React, { useContext } from 'react';
import Header from '../../components/Header';
import { UserContext } from '../../components/UserContext';
import UpdateProfil from '../../components/ProfilInfo/UpdateProfil';
// import SignupLogin from '../Login';

function Profil (){
    const Uid = useContext(UserContext);
    return(
        
        <div>
			{/* {!Uid ? (
				<>
					<SignupLogin />
				</>
			) : ( */}
				<div className="profil-page">
                    <Header />
					<UpdateProfil />
				</div>
			{/* )} */}
		</div>

    )
}

export default Profil