import { } from 'react';
import { dataDoArt } from '../../../data';
import StyledPay from './styled-user-cart';

const Pay =({prices})=>{

    const findArts = prices;

    const artsFind = dataDoArt
        .map((a) => a.products.filter((b) => findArts.includes(b.nameProduct)))
        .flat().map((c)=>{return c.Price});

        console.log(artsFind)

    return(
        <StyledPay>

            <section className='pay'>
                <div className='pay__total'>
                <p>Total products</p>
                <p>{'x' + artsFind.length}</p> 
                </div>
                <div className='pay__price'>
                <p className=''>Total price</p>
                <p>{artsFind.reduce((accumulator, item) => accumulator + item, 0) + '$'}</p>
                </div>
                <div className='pay__shipping'>
                <p>Shipping costs</p>
                <p>15$</p>
                </div>
            </section>

        </StyledPay>
    )
}

export default Pay;