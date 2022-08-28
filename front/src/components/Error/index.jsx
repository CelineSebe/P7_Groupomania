import React from 'react-dom'

function Error() {
    return (
        <>
        <div style={{display:"flex", flexDirection: "column", justifyContent:"center", alignItems:"center", height: 600 }}>
            <h1>Oups 🙈 Vous n'êtes pas connecté <br/></h1>
            <p>Vous devez <a href="/">créer un compte</a> ?</p>
        </div>
        </>
    
    )
}
 
export default Error