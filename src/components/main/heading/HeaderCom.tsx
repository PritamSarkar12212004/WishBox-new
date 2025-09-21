import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faShoppingCart,
    faHeart,
    faBars,
    faTimes,
    faHome,
    faEnvelope,
    faInfoCircle,
    faHeadset,
    faShoppingBag,
    faGift,
    faHeartbeat
    
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HeaderCom = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const LinkData = [
        {
            title: "Home",
            path: "/",
            icon: faHome
        },
        {
            title: "Shop",
            path: "/shop",
            icon: faShoppingBag
        },
        {
            title: "Contact",
            path: "/contact",
            icon: faEnvelope
        },
        {
            title: "About",
            path: "/about",
            icon: faInfoCircle
        },
        {
            title: "Support",
            path: "/support",
            icon: faHeadset
        },
        {
            title: "Wishlist",
            path: "/wishlist",
            icon: faHeartbeat
        },
    ];

    return (
        <div className="w-full sticky top-0 z-50 bg-white shadow-sm">
            {/* Promo Banner - Compact for mobile */}
            <div className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 py-1 px-2">
                <div className="max-w-7xl mx-auto flex items-center justify-center gap-1 flex-nowrap overflow-hidden">
                    <FontAwesomeIcon icon={faGift} className="text-white text-xs flex-shrink-0" />
                    <span className="text-white font-medium text-xs whitespace-nowrap truncate">
                        Summer Sale: 50% Off Swimsuits + Free Delivery!
                    </span>
                    <Link to="/shop" className="ml-1 flex-shrink-0">
                        <span className="text-white font-medium text-xs underline hover:text-yellow-300 duration-300">
                            Shop Now
                        </span>
                    </Link>
                </div>
            </div>

            <div className="w-full bg-white px-3 sm:px-4 md:px-6 py-3">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between gap-3">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" className="flex items-center space-x-1 group">
                                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                                    WishBox
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation - Center */}
                        <nav className="hidden lg:flex items-center justify-center flex-1 mx-6">
                            <div className="flex items-center space-x-5 xl:space-x-7">
                                {LinkData.map((item, index) => (
                                    <Link to={item.path} key={index} className="group flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors duration-300 relative"
                                    >
                                        <FontAwesomeIcon icon={item.icon} className="text-xs group-hover:scale-110 transition-transform duration-300" />
                                        <span className="font-medium text-sm">{item.title}</span>
                                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
                                    </Link>
                                ))}
                            </div>
                        </nav>

                        {/* Icons - Right */}
                        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                            {/* Shop Icon for mobile and tablet - replaces profile and home */}
                            <Link to="/shop"
                                className="md:hidden p-1.5 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all duration-300"
                            >
                                <FontAwesomeIcon icon={faShoppingBag} className="text-lg" />
                            </Link>

                            {/* Action Icons - hidden on mobile, visible on desktop */}
                            <div className="hidden md:flex items-center space-x-1 sm:space-x-2">
                                <Link to="/login"
                                    className="p-1.5 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all duration-300 group relative"
                                >
                                    <FontAwesomeIcon icon={faUser} className="text-base group-hover:scale-110 transition-transform duration-300" />
                                    <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        1
                                    </span>
                                </Link>

                                <Link to="/wishlist"
                                    className="p-1.5 text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-300 group relative"
                                >
                                    <FontAwesomeIcon icon={faHeart} className="text-base group-hover:scale-110 transition-transform duration-300" />
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                                        3
                                    </span>
                                </Link>

                                {/* Shopping Cart */}
                                <Link to="/cart"
                                    className="p-1.5 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-300 group relative"
                                >
                                    <FontAwesomeIcon icon={faShoppingCart} className="text-base group-hover:scale-110 transition-transform duration-300" />
                                    <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                                        2
                                    </span>
                                </Link>
                            </div>

                            {/* Shopping Cart - visible on mobile and tablet */}
                            <Link to="/cart" className="md:hidden p-1.5 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-300 group relative"
                            >
                                <FontAwesomeIcon icon={faShoppingCart} className="text-base" />
                                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                                    2
                                </span>
                            </Link>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-1.5 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-300"
                            >
                                <FontAwesomeIcon
                                    icon={isMobileMenuOpen ? faTimes : faBars}
                                    className="text-lg"
                                />
                            </button>
                        </div>
                    </div>

                    {isMobileMenuOpen && (
                        <div className="lg:hidden mt-3 bg-white border border-gray-200 rounded-lg shadow-sm py-2">
                            <nav className="flex flex-col space-y-1">
                                {LinkData.map((item, index) => (
                                    <Link
                                        to={item.path}
                                        key={index}
                                        className="group flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors duration-300 relative px-4 py-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <FontAwesomeIcon icon={item.icon} className="text-xs group-hover:scale-110 transition-transform duration-300" />
                                        <span className="font-medium text-sm">{item.title}</span>
                                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeaderCom;