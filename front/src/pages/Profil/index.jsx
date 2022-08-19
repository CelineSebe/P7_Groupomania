import React from 'react-dom'
import Header from '../../components/Header'
import ProfilInfo from '../../components/ProfilInfo'
import { IdContext } from '../../components/AppContext';
import UpdateProfil from '../../components/ProfilInfo/UpdateProfil';
import { useContext } from 'react';

function Profil (){
    const id = useContext(IdContext)
    
    return(
    <div className='profil-page'>
        <Header />
        {id ? (
            <UpdateProfil />
        ) : (
            <div className='log-container'>
                
            </div>
        )}
            
    
    </div>
    )
}

export default Profil