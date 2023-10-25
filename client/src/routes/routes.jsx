import Home from "../components/pages/home/home";
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
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Blog from "../prueba";
import services from "../../services";
import RootAdmin from "./RootAdmin";
import RootLoginAdmin from "./RootLoginAdmin";

export const router = createBrowserRouter([
  {
    path: "/react-marketplace",
    element: <Root />,
    children: [
      {
        /* user Route */
      },
      {
        path: "/react-marketplace/home",
        element: <Home />,
      },
      {
        path: "/react-marketplace/about-us",
        element: <AboutUs />,
      },
      {
        path: "/react-marketplace/profile",
        element: <Profile />,
      },
      {
        path: "/react-marketplace/register",
        element: <Register />,
      },
      {
        path: "/react-marketplace/login-user",
        element: <LoginUser />,
      },
      {
        path: "/react-marketplace/gallery-artist",
        element: <GalleryArtist />,
      },
      {
        path: "/react-marketplace/artist-page",
        element: <ArtistPage />,
      },
      {
        path: "/react-marketplace/category",
        element: <Category />,
      },
      {
        path: "/react-marketplace/product/:art",
        element: <Product />,
      },
      {
        path: "/react-marketplace/shopping-cart",
        element: <UserCart />,
      },
    ],
  },

  {
    path: "/react-marketplace",
    element: <RootLoginAdmin />,
    children: [
      {
        path: "/react-marketplace/login-admin",
        element: <LoginAdmin />,
      },
    ],
  },

  {
    path: "/react-marketplace",
    element: <RootAdmin />,
    children: [
      {
        path: "/react-marketplace/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/react-marketplace/artist-form",
        element: <AddArtistForm />,
      },
      {
        path: "/react-marketplace/artwork-form",
        element: <AddArtwork />,
      },
      {
        path: "/react-marketplace/orders",
        element: <Orders />,
      },
      {
        path: "/react-marketplace/blog",
        element: <Blog />,
        loader: async () => {
          const database = await services.getData(
            "http://localhost:8080/products"
          );
          return database;
        },
      },
    ],
  },
]);
