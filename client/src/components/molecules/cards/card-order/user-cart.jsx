import {} from 'react';
import { dataDoArt } from '../../../../data';
import StyledCardOrder from './styled-user-cart';

const CardOrder = ({arts}) => {
    const findArts = arts;

const artsFind = dataDoArt
    .map((a) => a.products.filter((b) => findArts.includes(b.nameProduct)))
    .flat();
 
    
    return (
        <StyledCardOrder>
            <ul className='card__container'>
                {artsFind.map((a) => (
                    <li key={a.id} className='card'>
                        <div className='card__image-conainer'>
                            <img src={a.imgProdut} alt="image-product" className='card__image' />
                        </div>
                        <div className='card__container--text'>
                            <p className='card__name'>{a.nameProduct}</p>
                            <p className='card__materials'>{a.materials}</p>
                            <p className='card__artist'>{a.artist}</p>
                        </div>
                        <p className='card__price'>{a.Price + '$'}</p>
                    </li>
                ))}
            </ul>
        </StyledCardOrder>
    );
};

export default CardOrder;
