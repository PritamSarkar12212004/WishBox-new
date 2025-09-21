import { Routes, Route, Link } from "react-router-dom";
import Dashboard from '../pages/home/Dashboard';
import ShopPage from '../pages/shop/ShopPage';
import ContactPage from '../pages/contact/ContactPage';
import AboutPage from '../pages/about/AboutPage';
import SupportPage from '../pages/support/SupportPage';
import ProfilePage from '../pages/profile/ProfilePage';
import WishlistPage from '../pages/wishlist/WishlistPage';
import CartPage from '../pages/cart/CartPage';
import ProductViewPage from '../pages/product/ProductViewPage';
import LoginPage from '../pages/auth/LoginPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import ResetPasswordPage from '../pages/auth/ResetPasswordPage';

function MainRoutes() {
  return (
    <div>
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
        <Route path='/login' element={<LoginPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/reset-password' element={<ResetPasswordPage />} />
      </Routes>
    </div>
  )
}

export default MainRoutes