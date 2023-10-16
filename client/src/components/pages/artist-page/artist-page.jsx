import { } from 'react';
import CardArtistPage from '../../molecules/cards/card-artist-page/card-artist-page';
import { dataDoArt } from '../../../data';
import CardProducts from '../../molecules/cards/card-products/card-products';

import StyledArtistPage from './styled-artist-page';


const ArtistPage = ()=>{


    const findArtist = 'Carrie Mae Weems';

    return(
        <StyledArtistPage>
            <header></header>
            <section className='artist-page'>
                <CardArtistPage artistName={findArtist}/>
                <h1 className='page__title'>ARTWORK</h1>
                <CardProducts map={dataDoArt.find((a)=>{
                    return a.artist === findArtist}).products.map((b)=>{
                        return b 
                    })}/>
            </section>
            <footer></footer>
        </StyledArtistPage>
    )
}

export default ArtistPage;