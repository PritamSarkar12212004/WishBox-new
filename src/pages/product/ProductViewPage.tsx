import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faStar, 
    faHeart, 
    faShoppingCart, 
    faShare,
    faMinus,
    faPlus,
    faTruck,
    faShield,
    faUndo,
    faHeadset,
    faGift,
    faCheck,
    faTimes
} from '@fortawesome/free-solid-svg-icons'

function ProductViewPage() {
    const [selectedImage, setSelectedImage] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [selectedSize, setSelectedSize] = useState('medium')
    const [selectedColor, setSelectedColor] = useState('white')
    const [isWishlisted, setIsWishlisted] = useState(false)
    const [activeTab, setActiveTab] = useState('description')

    const product = {
        id: 1,
        name: "Origami Crane Set - Premium Collection",
        price: 24.99,
        originalPrice: 34.99,
        rating: 4.8,
        reviewCount: 156,
        category: "Origami",
        inStock: true,
        stockCount: 15,
        images: [
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop"
        ],
        colors: ['white', 'cream', 'ivory'],
        sizes: ['small', 'medium', 'large'],
        description: "This premium origami crane set features beautifully handcrafted paper cranes in various sizes and colors. Perfect for home decoration, gifts, or special occasions. Each crane is carefully folded using traditional techniques and premium paper materials.",
        features: [
            "Handcrafted with premium paper",
            "Traditional origami techniques",
            "Multiple sizes and colors",
            "Perfect for home decoration",
            "Great gift idea"
        ],
        specifications: {
            "Material": "Premium Japanese paper",
            "Dimensions": "Various sizes (3-12 inches)",
            "Weight": "0.5 lbs",
            "Origin": "Handcrafted in Japan",
            "Care": "Keep dry, avoid direct sunlight"
        }
    }

    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            rating: 5,
            date: "2024-01-10",
            comment: "Absolutely beautiful! The cranes are so well made and look stunning in my living room."
        },
        {
            id: 2,
            name: "Michael Chen",
            rating: 4,
            date: "2024-01-08",
            comment: "Great quality paper and craftsmanship. The different sizes create a nice variety."
        },
        {
            id: 3,
            name: "Emma Rodriguez",
            rating: 5,
            date: "2024-01-05",
            comment: "Perfect gift for my mom. She loved the traditional origami style and quality."
        }
    ]

    const relatedProducts = [
        {
            id: 2,
            name: "Paper Flower Bouquet",
            price: 39.99,
            image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=300&h=300&fit=crop",
            rating: 4.9
        },
        {
            id: 3,
            name: "Decorative Wall Art",
            price: 29.99,
            image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
            rating: 4.7
        },
        {
            id: 4,
            name: "Paper Lantern Set",
            price: 19.99,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
            rating: 4.6
        }
    ]

    const addToCart = () => {
        // Add to cart logic here
        alert(`Added ${quantity} ${product.name} to cart!`)
    }

    const addToWishlist = () => {
        setIsWishlisted(!isWishlisted)
        alert(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist!')
    }

    const tabs = [
        { id: 'description', name: 'Description', content: product.description },
        { id: 'features', name: 'Features', content: product.features },
        { id: 'specifications', name: 'Specifications', content: product.specifications },
        { id: 'reviews', name: 'Reviews', content: reviews }
    ]

    return (
        <div className='flex-1'>
            {/* Breadcrumb */}
            <div className='mb-6'>
                <nav className='flex items-center space-x-2 text-sm text-gray-600'>
                    <span>Home</span>
                    <FontAwesomeIcon icon={faTimes} className='text-xs rotate-45' />
                    <span>Shop</span>
                    <FontAwesomeIcon icon={faTimes} className='text-xs rotate-45' />
                    <span>{product.category}</span>
                    <FontAwesomeIcon icon={faTimes} className='text-xs rotate-45' />
                    <span className='text-gray-900'>{product.name}</span>
                </nav>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
                {/* Product Images */}
                <div>
                    <div className='bg-white rounded-2xl shadow-lg overflow-hidden mb-4'>
                        <img 
                            src={product.images[selectedImage]} 
                            alt={product.name}
                            className='w-full h-96 md:h-[500px] object-cover'
                        />
                    </div>
                    <div className='flex space-x-2'>
                        {product.images.map((image, index) => (
                            <button 
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                                    selectedImage === index ? 'border-purple-600' : 'border-gray-200'
                                }`}
                            >
                                <img 
                                    src={image} 
                                    alt={`${product.name} ${index + 1}`}
                                    className='w-full h-full object-cover'
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div>
                    <div className='bg-white rounded-2xl shadow-lg p-6'>
                        <div className='mb-4'>
                            <span className='text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-medium'>
                                {product.category}
                            </span>
                        </div>
                        
                        <h1 className='text-3xl font-bold text-gray-900 mb-4'>{product.name}</h1>
                        
                        <div className='flex items-center space-x-4 mb-4'>
                            <div className='flex items-center space-x-1'>
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon 
                                        key={i} 
                                        icon={faStar} 
                                        className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                                    />
                                ))}
                            </div>
                            <span className='text-gray-600'>({product.reviewCount} reviews)</span>
                        </div>

                        <div className='flex items-center space-x-4 mb-6'>
                            <span className='text-3xl font-bold text-gray-900'>${product.price}</span>
                            <span className='text-xl text-gray-500 line-through'>${product.originalPrice}</span>
                            <span className='bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold'>
                                {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                            </span>
                        </div>

                        {/* Color Selection */}
                        <div className='mb-6'>
                            <h3 className='text-lg font-semibold text-gray-900 mb-3'>Color</h3>
                            <div className='flex space-x-3'>
                                {product.colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-10 h-10 rounded-full border-2 ${
                                            selectedColor === color ? 'border-purple-600' : 'border-gray-300'
                                        }`}
                                        style={{ backgroundColor: color }}
                                        title={color}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div className='mb-6'>
                            <h3 className='text-lg font-semibold text-gray-900 mb-3'>Size</h3>
                            <div className='flex space-x-3'>
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 rounded-lg border-2 font-medium transition-colors duration-200 ${
                                            selectedSize === size 
                                                ? 'border-purple-600 bg-purple-100 text-purple-700' 
                                                : 'border-gray-300 text-gray-700 hover:border-purple-300'
                                        }`}
                                    >
                                        {size.charAt(0).toUpperCase() + size.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className='mb-6'>
                            <h3 className='text-lg font-semibold text-gray-900 mb-3'>Quantity</h3>
                            <div className='flex items-center space-x-3'>
                                <button 
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className='w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200'
                                >
                                    <FontAwesomeIcon icon={faMinus} className='text-sm' />
                                </button>
                                <span className='w-16 text-center font-semibold text-lg'>{quantity}</span>
                                <button 
                                    onClick={() => setQuantity(quantity + 1)}
                                    className='w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200'
                                >
                                    <FontAwesomeIcon icon={faPlus} className='text-sm' />
                                </button>
                            </div>
                            <p className='text-sm text-gray-600 mt-2'>{product.stockCount} items in stock</p>
                        </div>

                        {/* Action Buttons */}
                        <div className='space-y-4 mb-6'>
                            <button 
                                onClick={addToCart}
                                disabled={!product.inStock}
                                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                                    product.inStock 
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:scale-105' 
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                            >
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                            </button>
                            
                            <div className='flex space-x-3'>
                                <button 
                                    onClick={addToWishlist}
                                    className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 ${
                                        isWishlisted 
                                            ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    <FontAwesomeIcon icon={faHeart} />
                                    <span>{isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}</span>
                                </button>
                                <button className='bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200'>
                                    <FontAwesomeIcon icon={faShare} />
                                </button>
                            </div>
                        </div>

                        {/* Features */}
                        <div className='space-y-3'>
                            <div className='flex items-center space-x-3 text-sm text-gray-600'>
                                <FontAwesomeIcon icon={faTruck} />
                                <span>Free shipping on orders over $50</span>
                            </div>
                            <div className='flex items-center space-x-3 text-sm text-gray-600'>
                                <FontAwesomeIcon icon={faShield} />
                                <span>Secure payment</span>
                            </div>
                            <div className='flex items-center space-x-3 text-sm text-gray-600'>
                                <FontAwesomeIcon icon={faUndo} />
                                <span>30-day return policy</span>
                            </div>
                            <div className='flex items-center space-x-3 text-sm text-gray-600'>
                                <FontAwesomeIcon icon={faGift} />
                                <span>Gift wrapping available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Details Tabs */}
            <div className='bg-white rounded-2xl shadow-lg p-6 mb-12'>
                <div className='border-b border-gray-200 mb-6'>
                    <nav className='flex space-x-8'>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                                    activeTab === tab.id
                                        ? 'border-purple-600 text-purple-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className='prose prose-lg max-w-none'>
                    {activeTab === 'description' && (
                        <p className='text-gray-600'>{tabs[0].content}</p>
                    )}
                    
                    {activeTab === 'features' && (
                        <ul className='space-y-2'>
                            {product.features.map((feature, index) => (
                                <li key={index} className='flex items-center space-x-2'>
                                    <FontAwesomeIcon icon={faCheck} className='text-green-500' />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    
                    {activeTab === 'specifications' && (
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {Object.entries(product.specifications).map(([key, value]) => (
                                <div key={key} className='flex justify-between py-2 border-b border-gray-200'>
                                    <span className='font-medium text-gray-900'>{key}:</span>
                                    <span className='text-gray-600'>{value}</span>
                                </div>
                            ))}
                        </div>
                    )}
                    
                    {activeTab === 'reviews' && (
                        <div className='space-y-6'>
                            {reviews.map((review) => (
                                <div key={review.id} className='border-b border-gray-200 pb-4'>
                                    <div className='flex items-center justify-between mb-2'>
                                        <div>
                                            <h4 className='font-semibold text-gray-900'>{review.name}</h4>
                                            <div className='flex items-center space-x-2'>
                                                <div className='flex items-center space-x-1'>
                                                    {[...Array(5)].map((_, i) => (
                                                        <FontAwesomeIcon 
                                                            key={i} 
                                                            icon={faStar} 
                                                            className={`text-sm ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                                                        />
                                                    ))}
                                                </div>
                                                <span className='text-gray-600 text-sm'>{review.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-gray-600'>{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Related Products */}
            <div className='bg-white rounded-2xl shadow-lg p-6'>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>Related Products</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {relatedProducts.map((product) => (
                        <div key={product.id} className='border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200'>
                            <img 
                                src={product.image} 
                                alt={product.name}
                                className='w-full h-48 object-cover'
                            />
                            <div className='p-4'>
                                <h3 className='font-semibold text-gray-900 mb-2'>{product.name}</h3>
                                <div className='flex items-center justify-between'>
                                    <span className='text-lg font-bold text-gray-900'>${product.price}</span>
                                    <div className='flex items-center space-x-1'>
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <span className='text-sm text-gray-600'>{product.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductViewPage
