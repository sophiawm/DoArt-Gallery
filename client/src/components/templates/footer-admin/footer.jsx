import { } from 'react';
import StyledFooterAdmin from './styled-footer';


const FooterAdmin =()=>{
    return(
        <StyledFooterAdmin>
            <footer className='footer'>
                <div className='container__image-text'>
                <img src="src/assets/pages/logo-footer.svg" alt="logo-footer" className='footer__logo'/>
                <p className='footer__text'>Find the art you love</p>
                </div>
            </footer>
        </StyledFooterAdmin>
    )
}

export default FooterAdmin;