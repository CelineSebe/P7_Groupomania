import React from 'react'

function Error() {
    return (
        <>
        <div style={{display:"flex", flexDirection: "column", justifyContent:"center", alignItems:"center", height: 600 }}>
            <h1>Oups <span role="img" aria-label='cute monkey'>🙈</span> Vous n'êtes pas connecté </h1><br/>
            <p> Votre email ou mot de passe ne correspondent pas... </p><br/>
            <p> Vous devez <a href="/">créer un compte</a> ?</p>
        </div>
        </>
    
    )
}
 
export default Error