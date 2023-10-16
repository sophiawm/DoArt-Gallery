import { } from 'react';
import { dataDoArt } from '../../../data';
import StyledCardArtistPage from './styled-artist-page';


const CardArtistPage = ({artistName})=>{



    const nameArtist = dataDoArt.find((a)=>{
        return a.artist === artistName
    })

    console.log(nameArtist)

    return(
        <StyledCardArtistPage>
            <section className='card-artist-page'>
                    <h1 className='artist__name'>{nameArtist.artist}</h1>
                    <div className='artist__image-container'>
                        <img src={nameArtist.imgArtist} alt="image-artist" className='artist__image'/>
                    </div>
                    <p className='artist__type'>{nameArtist.typeArt}</p>
                    <p className='artist__biography'>{nameArtist.biography}</p>
                    <p className='artist__categories'><span className='bold'>Categries: </span>{nameArtist.categories}</p>
            </section>
        </StyledCardArtistPage>
    )
}


export default CardArtistPage;