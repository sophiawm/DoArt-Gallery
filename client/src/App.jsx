import AboutUs from './about/about-us'
import './App.css'
import ArtistPage from './artist-page/artist-page'
import Category from './category/category'
import Dashboard from './dashboard/dashboard'
import AddArtistForm from './form-add-artist/form-add-artist'
import AddArtwork from './form-add-artwork/form-add-artist'
import GalleryArtist from './gallery-artists/gallery-artists'
import Home from './home/home'
import LoginAdmin from './login-admin/login-admin'
import LoginUser from './login-user/login-user'
import Orders from './orders/orders'
import Product from './product/product'
import Profile from './profile/profile'
import UserCart from './user-cart/user-cart'
import UserOrder from './user-order/user-order'
import Register from './user-register/register'


function App() {
  return (
    <>

  <Home />
  <AboutUs />
  <ArtistPage />
  <Category />
  <Dashboard />
  <AddArtistForm />
  <AddArtwork />
  <GalleryArtist />
  <LoginAdmin />
  <LoginUser />
  <Product />
  <Profile />
  <UserCart />
  <UserOrder />
  <Register />  
  <Orders />


    </>
  )
}

export default App
