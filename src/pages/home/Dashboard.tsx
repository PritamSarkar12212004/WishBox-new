import { useState } from 'react'
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
    faHeadset
} from '@fortawesome/free-solid-svg-icons'

function Dashboard() {
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
        <div className='flex-1'>
            {/* Hero Section with Banner */}
            <section className='relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 rounded-2xl overflow-hidden mb-8'>
                {/* Background Pattern */}
                <div className='absolute inset-0 bg-gradient-to-r from-orange-600/10 via-red-600/10 to-pink-600/10'></div>
                <div className='absolute inset-0 opacity-10'>
                    <div className='absolute top-10 left-10 w-20 h-20 bg-orange-400 rounded-full blur-xl'></div>
                    <div className='absolute top-20 right-20 w-32 h-32 bg-red-400 rounded-full blur-xl'></div>
                    <div className='absolute bottom-10 left-1/4 w-24 h-24 bg-pink-400 rounded-full blur-xl'></div>
                    <div className='absolute bottom-20 right-10 w-28 h-28 bg-orange-300 rounded-full blur-xl'></div>
                </div>
                
                <div className='relative px-6 py-12 md:px-8 md:py-16'>
                    <div className='max-w-6xl mx-auto'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
                            {/* Left Content */}
                            <div className='text-center lg:text-left'>
                                <div className='inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg'>
                                    <FontAwesomeIcon icon={faGem} className='text-orange-600 text-sm' />
                                    <span className='text-sm font-medium text-gray-700'>Premium Festival Decorations</span>
                                </div>
                                <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-4'>
                                    Celebrate Every Festival with
                                    <span className='bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent block'> Beautiful Paper Art</span>
                                </h1>
                                <p className='text-lg md:text-xl text-gray-600 mb-8 max-w-2xl'>
                                    Transform your home with our exquisite collection of handcrafted paper decorations, origami, and eco-friendly festival decor that brings joy to every celebration.
                                </p>
                                <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                                    <button className='bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2'>
                                        <span>Shop Festival Decor</span>
                                        <FontAwesomeIcon icon={faShoppingCart} className='text-sm' />
                                    </button>
                                    <button className='border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300'>
                                        View Gallery
                                    </button>
                                </div>
                            </div>
                            
                            {/* Right Banner Image */}
                            <div className='relative'>
                                <div className='bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-3xl p-8 shadow-2xl'>
                                    <div className='bg-white/90 rounded-2xl p-6 text-center'>
                                        <div className='text-6xl mb-4'>🎊</div>
                                        <h3 className='text-2xl font-bold text-gray-900 mb-2'>Festival Sale!</h3>
                                        <p className='text-lg text-orange-600 font-semibold mb-4'>Up to 50% OFF</p>
                                        <div className='bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold text-lg'>
                                            Limited Time Offer
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promotional Banner */}
            <section className='mb-12'>
                <div className='bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden'>
                    <div className='absolute inset-0 bg-black/10'></div>
                    <div className='relative z-10'>
                        <div className='text-6xl mb-4'>🎉</div>
                        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Navratri Special Collection</h2>
                        <p className='text-orange-100 text-lg mb-6 max-w-2xl mx-auto'>
                            Celebrate the nine nights of Navratri with our exclusive paper decorations and traditional designs
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                            <div className='bg-white/20 backdrop-blur-sm rounded-full px-6 py-3'>
                                <span className='font-semibold'>50% OFF on Navratri Items</span>
                            </div>
                            <button className='bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300'>
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className='mb-12'>
                <div className='text-center mb-8'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Shop by Festival</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>Explore our carefully curated collections organized by festivals and occasions</p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6'>
                    {categories.map((category, index) => (
                        <div key={index} className='group cursor-pointer'>
                            <div className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl text-center hover:shadow-lg hover:scale-105 transition-all duration-300`}>
                                <FontAwesomeIcon icon={category.icon} className='text-white text-2xl md:text-3xl mb-3 group-hover:scale-110 transition-transform duration-300' />
                                <h3 className='text-white font-semibold text-sm md:text-base mb-1'>{category.name}</h3>
                                <p className='text-white/80 text-xs md:text-sm'>{category.count} items</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Special Offer Banners */}
            <section className='mb-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 text-white relative overflow-hidden'>
                        <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16'></div>
                        <div className='relative z-10'>
                            <div className='text-4xl mb-4'>🪔</div>
                            <h3 className='text-2xl font-bold mb-2'>Diwali Special</h3>
                            <p className='text-yellow-100 mb-4'>Light up your home with our beautiful paper diyas and decorations</p>
                            <button className='bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300'>
                                Shop Diwali
                            </button>
                        </div>
                    </div>
                    
                    <div className='bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl p-8 text-white relative overflow-hidden'>
                        <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16'></div>
                        <div className='relative z-10'>
                            <div className='text-4xl mb-4'>🎨</div>
                            <h3 className='text-2xl font-bold mb-2'>Holi Collection</h3>
                            <p className='text-pink-100 mb-4'>Colorful paper decorations to celebrate the festival of colors</p>
                            <button className='bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300'>
                                Shop Holi
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className='mb-12'>
                <div className='flex items-center justify-between mb-8'>
                    <div>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>Featured Products</h2>
                        <p className='text-gray-600'>Handpicked favorites from our collection</p>
                    </div>
                    <button className='hidden md:flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold'>
                        <span>View All</span>
                        <FontAwesomeIcon icon={faPaperPlane} className='text-sm' />
                    </button>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {featuredProducts.map((product) => (
                        <div key={product.id} className='group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden'>
                            <div className='relative'>
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className='w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300'
                                />
                                {product.isNew && (
                                    <div className='absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full'>
                                        New
                                    </div>
                                )}
                                <div className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <button className='bg-white/90 hover:bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300'>
                                        <FontAwesomeIcon icon={faHeart} className='text-gray-600 hover:text-red-500' />
                                    </button>
                                </div>
                                <div className='absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <button className='bg-white/90 hover:bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300'>
                                        <FontAwesomeIcon icon={faEye} className='text-gray-600 hover:text-purple-600' />
                                    </button>
                                </div>
                            </div>
                            <div className='p-4'>
                                <h3 className='font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300'>{product.name}</h3>
                                <div className='flex items-center space-x-2 mb-3'>
                                    <div className='flex items-center space-x-1'>
                                        {[...Array(5)].map((_, i) => (
                                            <FontAwesomeIcon 
                                                key={i} 
                                                icon={faStar} 
                                                className={`text-xs ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                                            />
                                        ))}
                                    </div>
                                    <span className='text-sm text-gray-500'>({product.reviews})</span>
                                </div>
                                <div className='flex items-center justify-between mb-3'>
                                    <div className='flex items-center space-x-2'>
                                        <span className='text-lg font-bold text-gray-900'>${product.price}</span>
                                        <span className='text-sm text-gray-500 line-through'>${product.originalPrice}</span>
                                    </div>
                                    <span className='text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold'>
                                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                                    </span>
                                </div>
                                <button className='w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2'>
                                    <FontAwesomeIcon icon={faShoppingCart} className='text-sm' />
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Festival Countdown Banner */}
            <section className='mb-12'>
                <div className='bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden'>
                    <div className='absolute inset-0 bg-black/20'></div>
                    <div className='absolute top-4 left-4 text-4xl opacity-30'>🌟</div>
                    <div className='absolute bottom-4 right-4 text-4xl opacity-30'>🎊</div>
                    <div className='relative z-10'>
                        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Festival Season is Here!</h2>
                        <p className='text-blue-100 text-lg mb-6 max-w-2xl mx-auto'>
                            Get ready for the most colorful time of the year with our exclusive festival collection
                        </p>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-6'>
                            <div className='bg-white/20 backdrop-blur-sm rounded-lg p-4'>
                                <div className='text-2xl font-bold'>25</div>
                                <div className='text-sm'>Days</div>
                            </div>
                            <div className='bg-white/20 backdrop-blur-sm rounded-lg p-4'>
                                <div className='text-2xl font-bold'>12</div>
                                <div className='text-sm'>Hours</div>
                            </div>
                            <div className='bg-white/20 backdrop-blur-sm rounded-lg p-4'>
                                <div className='text-2xl font-bold'>45</div>
                                <div className='text-sm'>Minutes</div>
                            </div>
                            <div className='bg-white/20 backdrop-blur-sm rounded-lg p-4'>
                                <div className='text-2xl font-bold'>30</div>
                                <div className='text-sm'>Seconds</div>
                            </div>
                        </div>
                        <button className='bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300'>
                            Shop Festival Collection
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className='mb-12'>
                <div className='bg-white rounded-2xl shadow-sm p-6 md:p-8'>
                    <div className='text-center mb-8'>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Why Choose WishBox?</h2>
                        <p className='text-gray-600 max-w-2xl mx-auto'>We're committed to providing the best paper decoration experience</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {features.map((feature, index) => (
                            <div key={index} className='text-center group'>
                                <div className='bg-gradient-to-br from-purple-100 to-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                                    <FontAwesomeIcon icon={feature.icon} className='text-purple-600 text-xl' />
                                </div>
                                <h3 className='font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                                <p className='text-gray-600 text-sm'>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Promotional Banner
            <section className='mb-12'>
                <div className='bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden'>
                    <div className='absolute inset-0 bg-black/10'></div>
                    <div className='absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-20 -translate-y-20'></div>
                    <div className='absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-20 translate-y-20'></div>
                    <div className='relative z-10'>
                        <div className='text-6xl mb-4'>🎁</div>
                        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Special Festival Offer</h2>
                        <p className='text-pink-100 text-lg mb-6 max-w-2xl mx-auto'>
                            Buy any 3 items and get 1 absolutely FREE! Plus free shipping on orders above ₹500
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                            <div className='bg-white/20 backdrop-blur-sm rounded-full px-6 py-3'>
                                <span className='font-semibold'>Use Code: FESTIVAL2024</span>
                            </div>
                            <button className='bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300'>
                                Claim Offer Now
                            </button>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Newsletter Section */}
            {/* <section className='bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl p-6 md:p-8 text-center'>
                <div className='max-w-2xl mx-auto'>
                    <FontAwesomeIcon icon={faPaperPlane} className='text-white text-3xl mb-4' />
                    <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>Stay Updated</h2>
                    <p className='text-orange-100 mb-6'>Subscribe to our newsletter for exclusive offers and new product updates</p>
                    <div className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
                        <input 
                            type='email' 
                            placeholder='Enter your email' 
                            className='flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50'
                        />
                        <button className='bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Dashboard