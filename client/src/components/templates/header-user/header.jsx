import { useRef, } from 'react';
import StyledHeader from './styled-header';

const Header = () => {

  let switchDropdown = true;
  let switchDropdownDesktop = true;
  let switchCategories = true;

  const containerDropdownRef = useRef(null);
  const containerCategories = useRef(null);
  const containerCategoriesRefDesktop = useRef(null);
  const iconArrowAnimationRef = useRef(null);
  const iconArrowRef = useRef(null);

  
  const change = () => {
    if (switchDropdown) {
      containerDropdownRef.current.style.cssText = 'display: flex';
      if (!switchCategories) {
        containerCategories.current.style.cssText = 'display:none';
      }
    } 
  };

  const changeDesktop = () => {
    if (switchDropdownDesktop) {
      containerCategoriesRefDesktop.current.style.cssText = 'display: block';
      iconArrowAnimationRef.current.style.cssText = 'display: block;'
      iconArrowRef.current.style.cssText = 'display: none;'
    }
    switchDropdownDesktop = !switchDropdownDesktop;
  };



  const changeNotDesktop = () => {
    if (switchDropdownDesktop) {
      containerCategoriesRefDesktop.current.style.cssText = 'display: none';
      iconArrowAnimationRef.current.style.cssText = 'display: none;'
      iconArrowRef.current.style.cssText = 'display: block;'
    }
    switchDropdownDesktop = !switchDropdownDesktop;
  };




  const changeNot = () => {
    if (switchDropdown) {
      containerDropdownRef.current.style.cssText = 'display: none';
      if (!switchCategories) {
        containerCategories.current.style.cssText = 'display:none';
      }
    } 
  };



  const categoriesList = () => {
    if (switchCategories) {
      containerCategories.current.style.cssText = 'display: flex';
    } else {
      containerCategories.current.style.cssText = 'display:none';
    }
    switchCategories = !switchCategories;
  };


  return (
    <StyledHeader>
      <header className='header'>
        <div className='logo-container' >
          <img src="src/assets/pages/logo-DoArt.svg" alt="logo" />
        </div>
        <div className='icons-container'>
          <img src="src/assets/icons/notification-icon.svg" alt="notification-icon" className='icons-container__notification' />
          <img src="src/assets/icons/shopping-cart-icon.svg" alt="shopping-cart-icon" className='icons-container__shopping-cart' />
          <img src="src/assets/icons/arrow-icon.svg" alt="arrow-icon" className='icons-container__arrow' onClick={change}/>
        </div>
      </header>

      <div className='dropdown__container' ref={containerDropdownRef}>
        <div className='icon-container'>
          <img src="src/assets/icons/arrow-icon.svg" alt="arrow-icon" className='icon-container__arrow' onClick={changeNot} />
        </div>
        <div className='dropdown__text-container'>
          <p className='dropdown__Home'>Home</p>
          <p className='dropdown__Categories' onClick={categoriesList}>Categories</p>
            <ul className='categories__container' ref={containerCategories}>
                <li>Paintings</li>
                <li>Textiles</li>
                <li>Sculpture</li>
                <li>Photography</li>
                <li>Collage</li>
                <li>Mixed-media</li>
            </ul>
          <p className='dropdown__About-Us'>About Us</p>
          <p className='dropdown__Your-Profile'>Your Profile</p>
        </div>
        <div className='dropdown__image-container'>
          <img src="src/assets/pages/dropdown-logo.svg" alt="dropdown-image" className='dropdown__image' />
        </div>
      </div>


      {/* version desktop */}
      <header className='header-desktop'>
      <img src="src/assets/pages/logo-DoArt.svg" alt="logo" className='header__logo'/>

        <div className='header__container'>

          <div className='container-categories'>

          <p className='header__categories'>Categories</p>
          <ul className='categories__container-desktop' ref={containerCategoriesRefDesktop}>
            <li>Paintings</li>
            <li>Textiles</li>
            <li>Sculpture</li>
            <li>Photography</li>
            <li>Collage</li>
            <li>Mixed-media</li>
          </ul>
            <img src="src/assets/icons/arrow-icon.svg" alt="" className='categories__icon' onClick={changeDesktop} ref={iconArrowRef}/>


            <img src="src/assets/icons/arrow-icon.svg" alt="" className='animation-icon' onClick={changeNotDesktop} ref={iconArrowAnimationRef} />

          </div>
          
          <p className='header__about-us'>About Us</p>

          <p className='header__my-profile'>My Profile</p>

        

        
        <div className='header__icons-container'>
          <img src="src/assets/icons/notification-icon.svg" alt="notification-icon" className='header__notification-icon'/>

          <img src="src/assets/icons/shopping-cart-icon.svg" alt="shopping-icon" className='header__shopping-icon'/>
        </div>
        </div>
      </header>


    </StyledHeader>
  );
};

export default Header;
