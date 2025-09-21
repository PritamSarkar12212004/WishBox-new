import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStar,
    faHeart,
    faShoppingCart,
    faEye,
    faPaperPlane,
    faPalette,
    faGift,
    faLeaf,
    faGem,
    faTruck,
    faShield,
    faHeadset,
    faBars,
    faSearch,
    faUser
} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

function Dashboard() {
    const [isMobile, setIsMobile] = useState(false)
    const [isTablet, setIsTablet] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768)
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
        }

        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)

        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    const featuredProducts = [
        {
            id: 1,
            name: "Origami Crane Set",
            price: 24.99,
            originalPrice: 34.99,
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
            rating: 4.8,
            reviews: 156,
            isNew: true
        },
        {
            id: 2,
            name: "Paper Flower Bouquet",
            price: 39.99,
            originalPrice: 49.99,
            image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop",
            rating: 4.9,
            reviews: 89,
            isNew: false
        },
        {
            id: 3,
            name: "Decorative Wall Art",
            price: 29.99,
            originalPrice: 39.99,
            image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
            rating: 4.7,
            reviews: 203,
            isNew: true
        },
        {
            id: 4,
            name: "Paper Lantern Set",
            price: 19.99,
            originalPrice: 29.99,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
            rating: 4.6,
            reviews: 124,
            isNew: false
        }
    ]

    const categories = [
        { name: "Origami", icon: faPaperPlane, count: 45, color: "from-pink-400 to-red-400" },
        { name: "Paper Flowers", icon: faGem, count: 32, color: "from-purple-400 to-pink-400" },
        { name: "Wall Decor", icon: faPalette, count: 28, color: "from-blue-400 to-purple-400" },
        { name: "Gift Boxes", icon: faGift, count: 19, color: "from-green-400 to-blue-400" },
        { name: "Eco-Friendly", icon: faLeaf, count: 23, color: "from-green-400 to-emerald-400" }
    ]

    const features = [
        {
            icon: faTruck,
            title: "Free Shipping",
            description: "Free delivery on orders over $50"
        },
        {
            icon: faShield,
            title: "Secure Payment",
            description: "100% secure payment processing"
        },
        {
            icon: faHeadset,
            title: "24/7 Support",
            description: "Round-the-clock customer service"
        },
        {
            icon: faGift,
            title: "Gift Wrapping",
            description: "Beautiful gift wrapping available"
        }
    ]

    return (
        <div className='flex-1 md:p-6'>
            {/* Mobile Header */}
            {/* Hero Section with Banner */}
            <section className='relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 rounded-2xl overflow-hidden mb-6 md:mb-8'>
                {/* Background Pattern */}
                <div className='absolute inset-0 bg-gradient-to-r from-orange-600/10 via-red-600/10 to-pink-600/10'></div>
                <div className='absolute inset-0 opacity-10'>
                    <div className='absolute top-10 left-10 w-20 h-20 bg-orange-400 rounded-full blur-xl'></div>
                    <div className='absolute top-20 right-20 w-32 h-32 bg-red-400 rounded-full blur-xl'></div>
                    <div className='absolute bottom-10 left-1/4 w-24 h-24 bg-pink-400 rounded-full blur-xl'></div>
                    <div className='absolute bottom-20 right-10 w-28 h-28 bg-orange-300 rounded-full blur-xl'></div>
                </div>

                <div className='relative px-4 py-8 md:px-8 md:py-16'>
                    <div className='max-w-6xl mx-auto'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center'>
                            {/* Left Content */}
                            <div className='text-center lg:text-left'>
                                <div className='inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6 shadow-lg'>
                                    <FontAwesomeIcon icon={faGem} className='text-orange-600 text-xs md:text-sm' />
                                    <span className='text-xs md:text-sm font-medium text-gray-700'>Premium Festival Decorations</span>
                                </div>
                                <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-4'>
                                    Celebrate Every Festival with
                                    <span className='bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent block'> Beautiful Paper Art</span>
                                </h1>
                                <p className='text-sm md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl'>
                                    Transform your home with our exquisite collection of handcrafted paper decorations, origami, and eco-friendly festival decor that brings joy to every celebration.
                                </p>
                                <div className='flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start'>
                                    <button className='bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-4 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 text-sm md:text-base'>
                                        <span>Shop Festival Decor</span>
                                        <FontAwesomeIcon icon={faShoppingCart} className='text-xs md:text-sm' />
                                    </button>
                                    <button className='border-2 border-orange-500 text-orange-500 px-4 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm md:text-base'>
                                        View Gallery
                                    </button>
                                </div>
                            </div>

                            {/* Right Banner Image - Hidden on mobile */}
                            {!isMobile && (
                                <div className='relative'>
                                    <div className='bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-3xl p-6 md:p-8 shadow-2xl'>
                                        <div className='bg-white/90 rounded-2xl p-4 md:p-6 text-center'>
                                            <div className='text-4xl md:text-6xl mb-3 md:mb-4'>🎊</div>
                                            <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2'>Festival Sale!</h3>
                                            <p className='text-md md:text-lg text-orange-600 font-semibold mb-3 md:mb-4'>Up to 50% OFF</p>
                                            <div className='bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-sm md:text-lg'>
                                                Limited Time Offer
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Promotional Banner */}
            <section className='mb-8 md:mb-12'>
                <div className='bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl p-6 md:p-8 lg:p-12 text-white text-center relative overflow-hidden'>
                    <div className='absolute inset-0 bg-black/10'></div>
                    <div className='relative z-10'>
                        <div className='text-4xl md:text-6xl mb-3 md:mb-4'>🎉</div>
                        <h2 className='text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4'>Navratri Special Collection</h2>
                        <p className='text-orange-100 text-sm md:text-lg mb-4 md:mb-6 max-w-2xl mx-auto'>
                            Celebrate the nine nights of Navratri with our exclusive paper decorations and traditional designs
                        </p>
                        <div className='flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center'>
                            <div className='bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3'>
                                <span className='font-semibold text-xs md:text-sm'>50% OFF on Navratri Items</span>
                            </div>
                            <button className='bg-white text-orange-600 px-4 py-2 md:px-6 md:py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 text-xs md:text-sm'>
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className='mb-8 md:mb-12'>
                <div className='text-center mb-6 md:mb-8'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4'>Shop by Festival</h2>
                    <p className='text-gray-600 text-sm md:text-base max-w-2xl mx-auto'>Explore our carefully curated collections organized by festivals and occasions</p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6'>
                    {categories.map((category, index) => (
                        <div key={index} className='group cursor-pointer'>
                            <div className={`bg-gradient-to-br ${category.color} p-4 md:p-6 rounded-2xl text-center hover:shadow-lg hover:scale-105 transition-all duration-300`}>
                                <FontAwesomeIcon icon={category.icon} className='text-white text-xl md:text-2xl lg:text-3xl mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300' />
                                <h3 className='text-white font-semibold text-xs md:text-sm lg:text-base mb-1'>{category.name}</h3>
                                <p className='text-white/80 text-xs md:text-sm'>{category.count} items</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Special Offer Banners */}
            <section className='mb-8 md:mb-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                    <div className='bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden'>
                        <div className='absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full -translate-y-12 md:-translate-y-16 translate-x-12 md:translate-x-16'></div>
                        <div className='relative z-10'>
                            <div className='text-3xl md:text-4xl mb-3 md:mb-4'>🪔</div>
                            <h3 className='text-xl md:text-2xl font-bold mb-1 md:mb-2'>Diwali Special</h3>
                            <p className='text-yellow-100 text-sm md:text-base mb-3 md:mb-4'>Light up your home with our beautiful paper diyas and decorations</p>
                            <button className='bg-white text-orange-600 px-4 py-1 md:px-6 md:py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 text-xs md:text-sm'>
                                Shop Diwali
                            </button>
                        </div>
                    </div>

                    <div className='bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden'>
                        <div className='absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full -translate-y-12 md:-translate-y-16 translate-x-12 md:translate-x-16'></div>
                        <div className='relative z-10'>
                            <div className='text-3xl md:text-4xl mb-3 md:mb-4'>🎨</div>
                            <h3 className='text-xl md:text-2xl font-bold mb-1 md:mb-2'>Holi Collection</h3>
                            <p className='text-pink-100 text-sm md:text-base mb-3 md:mb-4'>Colorful paper decorations to celebrate the festival of colors</p>
                            <button className='bg-white text-pink-600 px-4 py-1 md:px-6 md:py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 text-xs md:text-sm'>
                                Shop Holi
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className='mb-8 md:mb-12'>
                <div className='flex items-center justify-between mb-6 md:mb-8'>
                    <div>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 md:mb-2'>Featured Products</h2>
                        <p className='text-gray-600 text-sm md:text-base'>Handpicked favorites from our collection</p>
                    </div>
                    <button className='hidden md:flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold text-sm md:text-base'>
                        <span>View All</span>
                        <FontAwesomeIcon icon={faPaperPlane} className='text-xs md:text-sm' />
                    </button>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
                    {featuredProducts.map((product) => (
                        <div key={product.id} className='group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden'>
                            <div className='relative'>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className='w-full h-40 sm:h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300'
                                />
                                {product.isNew && (
                                    <div className='absolute top-2 left-2 sm:top-3 sm:left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full'>
                                        New
                                    </div>
                                )}
                                <div className='absolute top-2 right-2 sm:top-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <button className='bg-white/90 hover:bg-white rounded-full p-1 sm:p-2 shadow-md hover:shadow-lg transition-all duration-300'>
                                        <FontAwesomeIcon icon={faHeart} className='text-gray-600 hover:text-red-500 text-xs sm:text-sm' />
                                    </button>
                                </div>
                                <div className='absolute bottom-2 right-2 sm:bottom-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <button className='bg-white/90 hover:bg-white rounded-full p-1 sm:p-2 shadow-md hover:shadow-lg transition-all duration-300'>
                                        <FontAwesomeIcon icon={faEye} className='text-gray-600 hover:text-purple-600 text-xs sm:text-sm' />
                                    </button>
                                </div>
                            </div>
                            <div className='p-3 sm:p-4'>
                                <h3 className='font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-purple-600 transition-colors duration-300'>{product.name}</h3>
                                <div className='flex items-center space-x-1 sm:space-x-2 mb-2 sm:mb-3'>
                                    <div className='flex items-center space-x-1'>
                                        {[...Array(5)].map((_, i) => (
                                            <FontAwesomeIcon
                                                key={i}
                                                icon={faStar}
                                                className={`text-xs ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                    <span className='text-xs sm:text-sm text-gray-500'>({product.reviews})</span>
                                </div>
                                <div className='flex items-center justify-between mb-2 sm:mb-3'>
                                    <div className='flex items-center space-x-1 sm:space-x-2'>
                                        <span className='text-base sm:text-lg font-bold text-gray-900'>${product.price}</span>
                                        <span className='text-xs sm:text-sm text-gray-500 line-through'>${product.originalPrice}</span>
                                    </div>
                                    <span className='text-xs bg-red-100 text-red-600 px-1 sm:px-2 py-1 rounded-full font-semibold'>
                                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                                    </span>
                                </div>
                                <button className='w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm'>
                                    <FontAwesomeIcon icon={faShoppingCart} className='text-xs sm:text-sm' />
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View All button */}
                {isMobile && (
                    <div className='mt-6 text-center'>
                        <button className='flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold mx-auto text-sm'>
                            <span>View All Products</span>
                            <FontAwesomeIcon icon={faPaperPlane} className='text-xs' />
                        </button>
                    </div>
                )}
            </section>

            {/* Features Section */}
            <section className='mb-8 md:mb-12'>
                <div className='bg-white rounded-2xl shadow-sm p-4 md:p-6 lg:p-8'>
                    <div className='text-center mb-6 md:mb-8'>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4'>Why Choose WishBox?</h2>
                        <p className='text-gray-600 text-sm md:text-base max-w-2xl mx-auto'>We're committed to providing the best paper decoration experience</p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
                        {features.map((feature, index) => (
                            <div key={index} className='text-center group p-3 md:p-4'>
                                <div className='bg-gradient-to-br from-purple-100 to-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300'>
                                    <FontAwesomeIcon icon={feature.icon} className='text-purple-600 text-lg md:text-xl' />
                                </div>
                                <h3 className='font-semibold text-gray-900 text-sm md:text-base mb-1 md:mb-2'>{feature.title}</h3>
                                <p className='text-gray-600 text-xs md:text-sm'>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard