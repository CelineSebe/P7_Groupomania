import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import ProfilInfo from '../../components/ProfilInfo/ProfilInfo';
import UpdateProfil from '../../components/ProfilInfo/UpdateProfil';
// import AuthContext from '../../store/authContext';
// import colors from '../../utils/style/colors';
// import InfiniteScroll from 'react-infinite-scroller';
// import Loading from '../../components/Loading';

const ProfilInfoContainer = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 730px){
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
}
`
const ProfilPage = styled.div`
display:flex; 
flex-direction: column;
justify-content: flex-start; 
align-items:center; 
margin: 150px 20px;
position: fixed; 
width: 100%;
height: 50%;

`


function Profil (props){
    
    let pseudo = localStorage.getItem('pseudo');
// let userId = JSON.parse(localStorage.getItem('userId'));
// let token= JSON.parse(localStorage.getItem('token'))

    return(
        <>
        <Header />
				<ProfilPage>

                <h1> Bienvenue {pseudo} !</h1>
                    {/* <InfiniteScroll pageStart={0}
                        loadMore={"ProfilInfo"}
                        hasMore={true}
                        loader={<div className="loader" key={0}></div>}
                > */}
                        <ProfilInfoContainer>
                            <UpdateProfil />
                            <ProfilInfo/>
                        </ProfilInfoContainer>
                        <p> Nous sommes le {props.date}</p>
                    {/* </InfiniteScroll> */}
                </ProfilPage>

        </>

    )
}

export default Profil