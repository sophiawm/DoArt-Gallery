import { } from 'react';
import CardArtist from '../../molecules/cards/card-artist/card-artist';
import Footer from '../../templates/footer-user/footer';
import Header from '../../templates/header-user/header';
import StyledGalleryArtists from './styled-gallery-artist';


const GalleryArtist =()=>{
    return(
        <StyledGalleryArtists>
            <Header />
            <section className='gallery-artists'>
            <h1 className='gallery__title'>OUR ARTIST</h1>
            <CardArtist />
            </section>
            <Footer />
        </StyledGalleryArtists>
    )
}

export default GalleryArtist;