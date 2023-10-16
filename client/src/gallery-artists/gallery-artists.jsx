import { } from 'react';
import CardArtist from '../components/cards/card-artist/card-artist';
import StyledGalleryArtists from './styled-gallery-artist';


const GalleryArtist =()=>{
    return(
        <StyledGalleryArtists>
            <header></header>
            <section className='gallery-artists'>
            <h1 className='gallery__title'>OUR ARTIST</h1>
            <CardArtist />
            </section>
            <footer></footer>
        </StyledGalleryArtists>
    )
}

export default GalleryArtist;