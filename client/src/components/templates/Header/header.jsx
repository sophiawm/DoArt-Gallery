import React from 'react';
import { useRef } from 'react';
import StyledHeader from './styled-header';

const Header = () => {
  let switchDropdown = true;

  const containerDropdownRef = useRef(null);
  const containerCategories = useRef(null);

  //desplegable
  const change = () => {
    if (switchDropdown) {
      containerDropdownRef.current.style.cssText = 'display: flex';
    } 
  };


  // quitar dezplegable
  const changeNot = () => {
    if (switchDropdown) {
      containerDropdownRef.current.style.cssText = 'display: none';
      if (switchCategories === false) {
        containerCategories.current.style.cssText='display:none';
      }
    } 
  };


//desplegable de categorias
  let switchCategories = true;

  const categoriesList =()=>{
    if (switchCategories) {
        containerCategories.current.style.cssText='display: flex';
    }else{
        containerCategories.current.style.cssText='display:none';
    }
    switchCategories = !switchCategories
  }



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
    </StyledHeader>
  );
};

export default Header;
