import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSearch,
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
    faTag,
    faGift
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function HeaderCom() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
        // {
        //     title: "Sale",
        //     path: "/sale",
        //     icon: faTag
        // },
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
    ]

    return (
        <div className='w-full sticky top-0 z-50 bg-white '>
            <div className='w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 py-2 px-4'>
                <div className='max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap'>
                    <FontAwesomeIcon icon={faGift} className='text-white text-sm animate-pulse' />
                    <span className='text-white font-medium text-xs md:text-sm text-center'>
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    </span>
                    <Link to={"/"} className='ml-2'>
                        <span className='text-white font-medium text-xs md:text-sm underline hover:text-yellow-300 duration-300 hover:scale-105 inline-block'>
                            Shop Now
                        </span>
                    </Link>
                </div>
            </div>

            <div className='w-full bg-white px-4 md:px-6 lg:px-8 py-4'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex items-center justify-between gap-4'>

                        {/* Logo */}
                        <div className='flex-shrink-0'>
                            <Link to="/" className='flex items-center space-x-2 group'>
                                <span className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent'>
                                    WishBox
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation - Center */}
                        <nav className='hidden lg:flex items-center justify-center flex-1 mx-8'>
                            <div className='flex items-center space-x-6 xl:space-x-8'>
                                {LinkData.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        className='group flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors duration-300 relative'
                                    >
                                        <FontAwesomeIcon icon={item.icon} className='text-sm group-hover:scale-110 transition-transform duration-300' />
                                        <span className='font-medium'>{item.title}</span>
                                        <div className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 group-hover:w-full transition-all duration-300'></div>
                                    </Link>
                                ))}
                            </div>
                        </nav>

                        {/* Search Bar & Icons - Right */}
                        <div className='flex items-center space-x-3 md:space-x-4 flex-shrink-0'>

                            {/* Search Bar */}
                            <div className='hidden md:block relative'>
                                <input
                                    className='w-48 lg:w-64 xl:w-80 h-10 pl-10 pr-4 bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300'
                                    placeholder='Search products...'
                                />
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm'
                                />
                            </div>

                            {/* Action Icons */}
                            <div className='flex items-center space-x-2 md:space-x-3'>
                                {/* User Account */}
                                <Link
                                    to="/login"
                                    className='p-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all duration-300 group relative'
                                >
                                    <FontAwesomeIcon icon={faUser} className='text-lg group-hover:scale-110 transition-transform duration-300' />
                                    <span className='absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                        1
                                    </span>
                                </Link>

                                {/* Wishlist */}
                                <Link
                                    to="/wishlist"
                                    className='p-2 text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-300 group relative'
                                >
                                    <FontAwesomeIcon icon={faHeart} className='text-lg group-hover:scale-110 transition-transform duration-300' />
                                    <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                                        3
                                    </span>
                                </Link>

                                {/* Shopping Cart */}
                                <Link
                                    to="/cart"
                                    className='p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-300 group relative'
                                >
                                    <FontAwesomeIcon icon={faShoppingCart} className='text-lg group-hover:scale-110 transition-transform duration-300' />
                                    <span className='absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                                        2
                                    </span>
                                </Link>

                                {/* Mobile Menu Button */}
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className='lg:hidden p-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-300'
                                >
                                    <FontAwesomeIcon
                                        icon={isMobileMenuOpen ? faTimes : faBars}
                                        className='text-lg'
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Search Bar */}
                    <div className='md:hidden mt-4 relative'>
                        <input
                            className='w-full h-10 pl-10 pr-4 bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300'
                            placeholder='Search products...'
                        />
                        <FontAwesomeIcon
                            icon={faSearch}
                            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm'
                        />
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className='lg:hidden mt-4 bg-white border-t border-gray-200 pt-4'>
                            <nav className='flex flex-col space-y-1'>
                                {LinkData.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className='flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-300'
                                    >
                                        <FontAwesomeIcon icon={item.icon} className='text-sm' />
                                        <span className='font-medium'>{item.title}</span>
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeaderCom