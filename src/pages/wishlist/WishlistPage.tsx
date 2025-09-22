import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeart,
    faShoppingCart,
    faEye,
    faTimes,
    faTrash,
    faShare,
    faHeartBroken
} from '@fortawesome/free-solid-svg-icons'

function WishlistPage() {
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            name: "Origami Crane Set - Premium Collection",
            price: 24.99,
            originalPrice: 34.99,
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
            rating: 4.8,
            reviews: 156,
            category: "Origami",
            addedDate: "2024-01-15",
            inStock: true
        },
        {
            id: 2,
            name: "Paper Flower Bouquet - Spring Collection",
            price: 39.99,
            originalPrice: 49.99,
            image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop",
            rating: 4.9,
            reviews: 89,
            category: "Paper Flowers",
            addedDate: "2024-01-12",
            inStock: true
        },
        {
            id: 3,
            name: "Decorative Wall Art - Modern Style",
            price: 29.99,
            originalPrice: 39.99,
            image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
            rating: 4.7,
            reviews: 203,
            category: "Wall Decor",
            addedDate: "2024-01-10",
            inStock: false
        },
        {
            id: 4,
            name: "Paper Lantern Set - Festival Collection",
            price: 19.99,
            originalPrice: 29.99,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
            rating: 4.6,
            reviews: 124,
            category: "Wall Decor",
            addedDate: "2024-01-08",
            inStock: true
        },
        {
            id: 5,
            name: "Eco-Friendly Gift Boxes - Premium",
            price: 14.99,
            originalPrice: 19.99,
            image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400&h=400&fit=crop",
            rating: 4.5,
            reviews: 67,
            category: "Gift Boxes",
            addedDate: "2024-01-05",
            inStock: true
        }
    ])

    const removeFromWishlist = (id: number) => {
        setWishlistItems(items => items.filter(item => item.id !== id))
    }

    const addAllToCart = () => {
        const inStockItems = wishlistItems.filter(item => item.inStock)
        alert(`Added ${inStockItems.length} items to cart!`)
    }
    const inStockItems = wishlistItems.filter(item => item.inStock)
    const outOfStockItems = wishlistItems.filter(item => !item.inStock)

    return (
        <div className='flex-1  md:p-6'>       
            {wishlistItems.length === 0 ? (
                /* Empty Wishlist */
                <div className='bg-white rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8 lg:p-12 text-center'>
                    <FontAwesomeIcon icon={faHeartBroken} className='text-4xl md:text-5xl lg:text-6xl text-gray-300 mb-4 md:mb-6' />
                    <h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4'>Your wishlist is empty</h2>
                    <p className='text-gray-600 mb-6 md:mb-8 max-w-md mx-auto text-sm md:text-base'>
                        Start adding items you love to your wishlist. They'll appear here so you can easily find them later.
                    </p>
                    <button className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm md:text-base'>
                        Start Shopping
                    </button>
                </div>
            ) : (
                <div className='space-y-6 md:space-y-8'>
                    {/* In Stock Items */}
                    {inStockItems.length > 0 && (
                        <div>
                            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-3'>
                                <h2 className='text-xl md:text-2xl font-bold text-gray-900'>
                                    Available Items ({inStockItems.length})
                                </h2>
                                <button
                                    onClick={addAllToCart}
                                    className='flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 w-full sm:w-auto text-sm'
                                >
                                    <FontAwesomeIcon icon={faShoppingCart} className='text-xs' />
                                    <span>Add All to Cart</span>
                                </button>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
                                {inStockItems.map((item) => (
                                    <div key={item.id} className='bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group'>
                                        <div className='relative'>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className='w-full h-40 sm:h-36 md:h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300'
                                            />
                                            <div className='absolute top-2 left-2 md:top-3 md:left-3'>
                                                <span className='bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full'>
                                                    In Stock
                                                </span>
                                            </div>
                                            <div className='absolute top-2 right-2 md:top-3 md:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                                <button className='bg-white/90 hover:bg-white rounded-full p-1 md:p-2 shadow-md hover:shadow-lg transition-all duration-300'>
                                                    <FontAwesomeIcon icon={faEye} className='text-gray-600 hover:text-purple-600 text-xs md:text-sm' />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='p-3 md:p-4'>
                                            <div className='flex items-center justify-between mb-2'>
                                                <span className='text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full font-medium'>
                                                    {item.category}
                                                </span>
                                                <button
                                                    onClick={() => removeFromWishlist(item.id)}
                                                    className='text-red-500 hover:text-red-700 transition-colors duration-200'
                                                >
                                                    <FontAwesomeIcon icon={faTimes} className='text-sm' />
                                                </button>
                                            </div>
                                            <h3 className='font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300 text-sm md:text-base'>
                                                {item.name}
                                            </h3>
                                            <div className='flex items-center justify-between mb-3'>
                                                <div className='flex items-center space-x-2'>
                                                    <span className='text-base md:text-lg font-bold text-gray-900'>${item.price}</span>
                                                    <span className='text-xs md:text-sm text-gray-500 line-through'>${item.originalPrice}</span>
                                                </div>
                                                <span className='text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold'>
                                                    {Math.round((1 - item.price / item.originalPrice) * 100)}% OFF
                                                </span>
                                            </div>
                                            <p className='text-gray-600 text-xs md:text-sm mb-3'>
                                                Added on {new Date(item.addedDate).toLocaleDateString()}
                                            </p>
                                            <div className='flex space-x-2'>
                                                <button className='flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 text-xs md:text-sm'>
                                                    <FontAwesomeIcon icon={faShoppingCart} className='text-xs' />
                                                    <span>Add to Cart</span>
                                                </button>
                                                <button className='bg-gray-100 text-gray-600 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200'>
                                                    <FontAwesomeIcon icon={faShare} className='text-xs md:text-sm' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Out of Stock Items */}
                    {outOfStockItems.length > 0 && (
                        <div>
                            <h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6'>
                                Currently Unavailable ({outOfStockItems.length})
                            </h2>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
                                {outOfStockItems.map((item) => (
                                    <div key={item.id} className='bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden opacity-75'>
                                        <div className='relative'>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className='w-full h-40 sm:h-36 md:h-48 lg:h-56 object-cover grayscale'
                                            />
                                            <div className='absolute top-2 left-2 md:top-3 md:left-3'>
                                                <span className='bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full'>
                                                    Out of Stock
                                                </span>
                                            </div>
                                        </div>
                                        <div className='p-3 md:p-4'>
                                            <div className='flex items-center justify-between mb-2'>
                                                <span className='text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full font-medium'>
                                                    {item.category}
                                                </span>
                                                <button
                                                    onClick={() => removeFromWishlist(item.id)}
                                                    className='text-red-500 hover:text-red-700 transition-colors duration-200'
                                                >
                                                    <FontAwesomeIcon icon={faTimes} className='text-sm' />
                                                </button>
                                            </div>
                                            <h3 className='font-semibold text-gray-900 mb-2 text-sm md:text-base'>{item.name}</h3>
                                            <div className='flex items-center justify-between mb-3'>
                                                <div className='flex items-center space-x-2'>
                                                    <span className='text-base md:text-lg font-bold text-gray-900'>${item.price}</span>
                                                    <span className='text-xs md:text-sm text-gray-500 line-through'>${item.originalPrice}</span>
                                                </div>
                                            </div>
                                            <button className='w-full bg-gray-300 text-gray-500 py-2 rounded-lg font-semibold cursor-not-allowed text-xs md:text-sm'>
                                                Notify When Available
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Recommendations */}
                    <div className='bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8'>
                        <h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center'>You might also like</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6'>
                            <div className='bg-white rounded-lg p-3 md:p-4 text-center hover:shadow-md transition-shadow duration-200'>
                                <div className='bg-purple-100 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3'>
                                    <FontAwesomeIcon icon={faHeart} className='text-purple-600 text-sm md:text-base' />
                                </div>
                                <h3 className='font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base'>Similar Items</h3>
                                <p className='text-gray-600 text-xs md:text-sm'>Discover products similar to your wishlist</p>
                            </div>
                            <div className='bg-white rounded-lg p-3 md:p-4 text-yuucenter hover:shadow-md transition-shadow duration-200'>
                                <div className='bg-pink-100 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3'>
                                    <FontAwesomeIcon icon={faShoppingCart} className='text-pink-600 text-sm md:text-base' />
                                </div>
                                <h3 className='font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base'>Popular Now</h3>
                                <p className='text-gray-600 text-xs md:text-sm'>See what other customers are loving</p>
                            </div>
                            <div className='bg-white rounded-lg p-3 md:p-4 text-center hover:shadow-md transition-shadow duration-200'>
                                <div className='bg-purple-100 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3'>
                                    <FontAwesomeIcon icon={faEye} className='text-purple-600 text-sm md:text-base' />
                                </div>
                                <h3 className='font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base'>Recently Viewed</h3>
                                <p className='text-gray-600 text-xs md:text-sm'>Continue browsing your recent items</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default WishlistPage