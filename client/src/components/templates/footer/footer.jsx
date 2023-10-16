import { } from 'react';
import StyledFooter from './styled-footer';


const Footer =()=>{
    return(
        <StyledFooter>
            <footer className='footer'>
                <img src="src/assets/pages/logo-footer.svg" alt="logo-footer" className='footer__logo'/>
                <p className='footer__text'>Find the art you love</p>
            </footer>
        </StyledFooter>
    )
}

export default Footer;