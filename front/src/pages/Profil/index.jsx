import React, { useContext } from 'react';
import Header from '../../components/Header';
import UpdateProfil from '../../components/ProfilInfo/UpdateProfil';
// import SignupLogin from '../Login';

function Profil (){
 
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