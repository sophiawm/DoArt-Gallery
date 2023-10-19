import AboutUs from './components/pages/about/about-us'
import './App.css'
import Home from './components/pages/home/home'
import ArtistPage from './components/pages/artist-page/artist-page'
import Category from './components/pages/category/category'
import Dashboard from './components/pages/dashboard/dashboard'
import AddArtistForm from './components/pages/form-add-artist/form-add-artist'
import AddArtwork from './components/pages/form-add-artwork/form-add-artist'
import GalleryArtist from './components/pages/gallery-artists/gallery-artists'
import LoginAdmin from './components/pages/login-admin/login-admin'
import LoginUser from './components/pages/login-user/login-user'
import Product from './components/pages/product/product'
import Profile from './components/pages/profile/profile'
import UserCart from './components/pages/user-cart/user-cart'
import UserOrder from './components/pages/user-order/user-order'
import Register from './components/pages/user-register/register'
import Orders from './components/pages/orders/orders'
import Pay from './components/templates/pay/user-cart'
import Header from './components/templates/header-user/header'
import Footer from './components/templates/footer-user/footer'
import HeaderAdmin from './components/templates/header-admin/header'
import FooterAdmin from './components/templates/footer-admin/footer'
import Carrusel from './carrusel'



function App() {
  return (
    <>
  <Carrusel />

  {/* <Home /> ✅ crear carrusel */}
  {/* <AboutUs /> ✅ */}
  {/* <ArtistPage /> ✅ */}
  {/* <Category /> ✅ */}
  {/* <Dashboard />  ✅ */}


  {/* <AddArtistForm />  ✅ */}

  {/* <AddArtwork />  */}

  {/* <GalleryArtist /> ✅ */}

  {/* <LoginAdmin />  ➖ */}

  {/* <LoginUser />  ✅ */}

  {/* <Product /> crear carrusel✅ */}
  {/* <Profile />  ✅ */}

  {/* <UserCart />✅ */}

  {/* <UserOrder />  ✅ */}

  {/* <Register />  ✅ */}

  {/* <Orders /> crear carrusel ✅ */}
    </>
  )
}

export default App
