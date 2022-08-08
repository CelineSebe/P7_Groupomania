function Card( {jobTitle, description, image}){
    return(
        <div style= {{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span> {jobTitle} </span>
            <span> {description} </span>
            <img src= {image} alt="post" height={98} width={80} />
        </div>
    )
}

export default Card

