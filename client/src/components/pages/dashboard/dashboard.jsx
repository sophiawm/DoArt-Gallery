import {} from 'react';
import StyledDashboard from './styledDashBorad';
import { dashboardArtist } from './dashboardArtist';




const Dashboard = () => {
  return (
    <StyledDashboard>
      <header></header>
      <section className='dashboard'> 


        <div className='search__container'>
          <label htmlFor="search__input">
            <input type="text" placeholder='Search for product...' id='search__input' />
          </label>

          <label htmlFor="search__button" className='search__button--container'>
            <input type="button" id='search__button' />
          </label>
        </div>

        <h1 className='product__title'>GALLERY BACKLOG</h1>
        <ul className='product'>
          {dashboardArtist.map((a) => (
            <li key={a.artistId} className='card'>
              <div className='product__card'>
                <div className='product__artist'>
                <h1>{a.artist}</h1>
                <div className='product__button--container'>
                <button className='product__button-pencil'></button>
                <button className='product__button-x'></button>
                </div>
                </div>
                {a.products.map((b) => (
                  <div key={b.id} className='cardd'>
    
                    
                    <img src={b.img} alt="product-image" className='product__image'/>
                
                    <div className='product__info'>
                    <h2 className='product__name'>{b.productName}</h2>
                    <p className='product__characteristics'>{b.characteristics}</p>
                    <p className='product__size'>{b.size}</p>
                    <p className='product__price'>{b.price}</p>
                    </div>
                  </div>
                ))}

              </div>
            </li>
          ))}
        </ul>
        <div className='dashboard__button--container'>
        <button className='dashboard__button'>ADD ARTIST</button>
        <button className='dashboard__button'>ADD ARTWORK</button>
        </div>
      </section>
      <footer></footer>
    </StyledDashboard>
  );
}

export default Dashboard;