import { } from 'react';
import { dataDoArt } from '../../../../data';
import ButtonSmall from '../../../atoms/buttons/button-small';
import StyledCardArtist from './styled-card-artist';



const CardArtist =()=>{

    return(
        <StyledCardArtist>
        <section className='cards_artist'>
            <div>
                <ul className='card__container'>
                    {dataDoArt.map((a,b)=>{
                        return <li key={b} className='card'>
                            <div className='card__image-container'>
                                <img src={a.imgArtist} alt="image-artist" className='card__image'/>
                            </div>
                            <div className='card__text-container'>
                            <p className='card__artist'>{a.artist}</p>
                            <p className='card__type'>{a.typeArt}</p>
                            <ButtonSmall text={'SEE MORE'} width={'7rem'} color={'grey'}/>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </section>
        </StyledCardArtist>
    )
}

export default CardArtist;