import { } from 'react';
import StyledUserCart from './styled-user-cart';
import ButtonSmall from '../../atoms/buttons/button-small';
import Pay from '../../templates/pay/user-cart';
import CardOrder from '../../molecules/cards/card-order/user-cart';



const UserCart =()=>{

    const artCart = ['Some Said You Were the Spitting Image of Evil, 1995-1996'];

    return(
        <StyledUserCart>
            <header></header>
            <section className='user__cart'>
            <h1 className='user__title'>SHOPPING CART</h1>
            
            <CardOrder arts={artCart}/>

            <Pay prices={artCart}/>

            <div className='buttons__container'>

                <ButtonSmall text={'SHOP MORE'} color={'black'} width={'10rem'}/>
                <ButtonSmall text={'CHECK OUT'} color={'black'} width={'10rem'}/>

            </div>

            </section>
            <footer></footer>
        </StyledUserCart>
    )
}

export default UserCart;