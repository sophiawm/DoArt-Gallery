import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/home/home";
import {} from "react";
import LoginUser from "../components/pages/login-user/login-user";
import AddArtistForm from "../components/pages/form-add-artist/form-add-artist";
import AddArtwork from "../components/pages/form-add-artwork/form-add-artist";
import GalleryArtist from "../components/pages/gallery-artists/gallery-artists";
import ArtistPage from "../components/pages/artist-page/artist-page";
import Product from "../components/pages/product/product";
import Category from "../components/pages/category/category";
import AboutUs from "../components/pages/about/about-us";
import Profile from "../components/pages/profile/profile";
import Register from "../components/pages/user-register/register";
import Dashboard from "../components/pages/dashboard/dashboard";
import UserCart from "../components/pages/user-cart/user-cart";
import Orders from "../components/pages/orders/orders";
import LoginAdmin from "../components/pages/login-admin/login-admin";

const RoutesApp = () => {
  return (
    <Routes>
        {/* user Route */}
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login-user" element={<LoginUser />}/> 


      <Route path="/gallery-artist" element={<GalleryArtist />}/> 
      <Route path="/artist-page" element={<ArtistPage />} /> 
      <Route path="/category" element={<Category />} />
      <Route path="/product/:art" element={<Product />} />

      <Route path="/shopping-cart" element={<UserCart />} />

      {/* admin */}
      <Route path="/login-admin" element={<LoginAdmin />}/> 
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/artist-form" element={<AddArtistForm />}/> 
      <Route path="/artwork-form" element={<AddArtwork />}/> 
      <Route path="/orders" element={<Orders />}/> 
    
    </Routes>
  );
};

export default RoutesApp;