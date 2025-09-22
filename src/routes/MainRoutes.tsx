import { Routes, Route } from "react-router-dom";
import Dashboard from '../pages/home/Dashboard';
import ShopPage from '../pages/shop/ShopPage';
import ContactPage from '../pages/contact/ContactPage';
import AboutPage from '../pages/about/AboutPage';
import SupportPage from '../pages/support/SupportPage';
import ProfilePage from '../pages/profile/ProfilePage';
import WishlistPage from '../pages/wishlist/WishlistPage';
import CartPage from '../pages/cart/CartPage';
import ProductViewPage from '../pages/product/ProductViewPage';
import HeaderCom from "../components/main/heading/HeaderCom";
import HomeWraper from "../components/wraper/HomeWraper";
import FooterCom from "../components/main/footer/FooterCom";
import { Fragment } from "react/jsx-runtime";
function MainRoutes() {
  return (
    <Fragment>
      <HeaderCom />
      <HomeWraper>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/support' element={<SupportPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/product/:id' element={<ProductViewPage />} />
        </Routes>
      </HomeWraper>
      <FooterCom />
    </Fragment>
  )
}

export default MainRoutes