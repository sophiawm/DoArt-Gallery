import { useEffect, useState } from 'react';
import CardArtistPage from '../../molecules/cards/card-artist-page/card-artist-page';
import CardProducts from '../../molecules/cards/card-products/card-products';
import StyledArtistPage from './styled-artist-page';
import Header from '../../templates/header-user/header';
import Footer from '../../templates/footer-user/footer';


const ArtistPage = ()=>{

    const [artwork, setArtwork] = useState([]);

    useEffect(()=>{
        const getArtwork=()=>{
            fetch('http://localhost:3002/artwork')
                .then((res)=>{
                    return res.json()
                })
                .then((res)=>{
                    const art = (res.filter((a)=>{
                        return a.artworkArtist === 'Yinka Shonibare'
                    }))
                    setArtwork(art)
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
        getArtwork();
    },[])



    return(
        <StyledArtistPage>
            <Header />

            <section className='artist-page'>
                <CardArtistPage />

                <h1 className='page__title'>ARTWORK</h1>
                <CardProducts mapear={artwork}/>

            </section>
            
            <Footer />
        </StyledArtistPage>
    )
}

export default ArtistPage;