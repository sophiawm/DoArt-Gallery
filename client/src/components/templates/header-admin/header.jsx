import { useRef } from 'react';
import StyledHeaderAdmin from './styled-header';
import { Link } from 'react-router-dom';



const HeaderAdmin = () => {
  let switchDropdown = true;
  let switchCategories = true;

  const containerDropdownRef = useRef(null);
  const containerCategories = useRef(null);
 

  
  const change = () => {
    if (switchDropdown) {
      containerDropdownRef.current.style.cssText = 'display: flex';
      if (!switchCategories) {
        containerCategories.current.style.cssText = 'display:none';
      }
    } 
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
    <StyledHeaderAdmin>
      <header className='header'>
        <Link to='/'>
        <div className='logo-container' >
          <img src="src/assets/pages/logo-DoArt.svg" alt="logo" />
        </div>
        </Link>
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
      <Link to='/react-marketplace/home'>
      <img src="src/assets/pages/logo-DoArt.svg" alt="logo" className='header__logo'/>
      </Link>

        <div className='header__container'>
          <Link to='/react-marketplace/dashboard'>
          <p className='header__about-us'>Dashboard</p>
          </Link>
          <Link to='/react-marketplace/orders'>
          <p className='header__my-profile'>Orders</p>
          </Link>
        


        <div className="search__container">
          <label htmlFor="search__input">
            <input
              type="text"
              placeholder="Search for product..."
              id="search__input"
            />
          </label>

          <label htmlFor="search__button" className="search__button--container">
            <input type="button" id="search__button" />
          </label>

        </div>
        </div>
      </header>


    </StyledHeaderAdmin>
  );
};

export default HeaderAdmin;
