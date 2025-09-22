import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShoppingCart,
    faPlus,
    faMinus,
    faTrash,
    faHeart,
    faCreditCard,
    faTruck,
    faShield,
    faTimes,
    faGift,
    faChevronDown,
    faChevronUp
} from '@fortawesome/free-solid-svg-icons'

function CartPage() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Origami Crane Set - Premium Collection",
            price: 24.99,
            originalPrice: 34.99,
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
            quantity: 2,
            category: "Origami",
            inStock: true
        },
        {
            id: 2,
            name: "Paper Flower Bouquet - Spring Collection",
            price: 39.99,
            originalPrice: 49.99,
            image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop",
            quantity: 1,
            category: "Paper Flowers",
            inStock: true
        },
        {
            id: 3,
            name: "Decorative Wall Art - Modern Style",
            price: 29.99,
            originalPrice: 39.99,
            image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
            quantity: 1,
            category: "Wall Decor",
            inStock: true
        }
    ])

    const [isPromoExpanded, setIsPromoExpanded] = useState(false)

    const updateQuantity = (id: number, newQuantity: number) => {
        if (newQuantity < 1) return
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        )
    }

    const removeFromCart = (id: number) => {
        setCartItems(items => items.filter(item => item.id !== id))
    }

    const moveToWishlist = (id: number) => {
        // Here you would typically move the item to wishlist
        removeFromCart(id)
        alert('Item moved to wishlist!')
    }

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0)
    const shipping = subtotal > 50 ? 0 : 9.99
    const tax = subtotal * 0.08 // 8% tax
    const total = subtotal + shipping + tax

    const promoCodes = [
        { code: 'WELCOME10', discount: 10, description: '10% off your first order' },
        { code: 'SAVE20', discount: 20, description: '20% off orders over $100' },
        { code: 'FREESHIP', discount: 0, description: 'Free shipping on any order' }
    ]

    return (
        <div className='flex-1  md:p-6'>  
            {cartItems.length === 0 ? (
                /* Empty Cart */
                <div className='bg-white rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8 lg:p-12 text-center'>
                    <FontAwesomeIcon icon={faShoppingCart} className='text-4xl md:text-5xl lg:text-6xl text-gray-300 mb-4 md:mb-6' />
                    <h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4'>Your cart is empty</h2>
                    <p className='text-gray-600 mb-6 md:mb-8 max-w-md mx-auto text-sm md:text-base'>
                        Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
                    </p>
                    <button className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm md:text-base'>
                        Continue Shopping
                    </button>
                </div>
            ) : (
                <div className='flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8'>
                    {/* Cart Items */}
                    <div className='lg:col-span-2 order-2 lg:order-1'>
                        <div className='bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6'>
                            <h2 className='text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6'>Cart Items</h2>
                            <div className='space-y-3 md:space-y-4'>
                                {cartItems.map((item) => (
                                    <div key={item.id} className='flex items-start space-x-3 md:space-x-4 p-3 md:p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200'>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className='w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg flex-shrink-0'
                                        />
                                        <div className='flex-1 min-w-0'>
                                            <div className='flex items-start justify-between'>
                                                <div className='min-w-0'>
                                                    <span className='text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full font-medium mb-1 inline-block'>
                                                        {item.category}
                                                    </span>
                                                    <h3 className='font-semibold text-gray-900 mb-1 text-sm md:text-base truncate'>{item.name}</h3>
                                                    <div className='flex items-center space-x-2 flex-wrap'>
                                                        <span className='text-base md:text-lg font-bold text-gray-900'>${item.price}</span>
                                                        <span className='text-sm text-gray-500 line-through'>${item.originalPrice}</span>
                                                        <span className='text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold'>
                                                            {Math.round((1 - item.price / item.originalPrice) * 100)}% OFF
                                                        </span>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className='text-red-500 hover:text-red-700 transition-colors duration-200 p-1 ml-2'
                                                    aria-label='Remove item'
                                                >
                                                    <FontAwesomeIcon icon={faTrash} className='text-sm' />
                                                </button>
                                            </div>

                                            <div className='flex items-center justify-between mt-3 md:mt-4'>
                                                <div className='flex items-center space-x-2 md:space-x-3'>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className='w-7 h-7 md:w-8 md:h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200'
                                                        aria-label='Decrease quantity'
                                                    >
                                                        <FontAwesomeIcon icon={faMinus} className='text-xs' />
                                                    </button>
                                                    <span className='w-6 text-center font-semibold text-sm md:text-base'>{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className='w-7 h-7 md:w-8 md:h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200'
                                                        aria-label='Increase quantity'
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} className='text-xs' />
                                                    </button>
                                                </div>

                                                <div className='flex items-center space-x-2'>
                                                    <span className='font-bold text-gray-900 text-sm md:text-base'>
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </span>
                                                    <button
                                                        onClick={() => moveToWishlist(item.id)}
                                                        className='text-purple-600 hover:text-purple-700 transition-colors duration-200 p-1'
                                                        title='Move to Wishlist'
                                                        aria-label='Move to wishlist'
                                                    >
                                                        <FontAwesomeIcon icon={faHeart} className='text-sm' />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Promo Code - Mobile Collapsible */}
                        <div className='mt-4 md:mt-6 bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6'>
                            <button
                                className='flex items-center justify-between w-full text-left'
                                onClick={() => setIsPromoExpanded(!isPromoExpanded)}
                                aria-expanded={isPromoExpanded}
                            >
                                <h3 className='text-lg font-semibold text-gray-900'>Promo Code</h3>
                                <FontAwesomeIcon
                                    icon={isPromoExpanded ? faChevronUp : faChevronDown}
                                    className='text-gray-500'
                                />
                            </button>

                            {isPromoExpanded && (
                                <div className='mt-4'>
                                    <div className='flex space-x-3'>
                                        <input
                                            type='text'
                                            placeholder='Enter promo code'
                                            className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base'
                                        />
                                        <button className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm md:text-base whitespace-nowrap'>
                                            Apply
                                        </button>
                                    </div>
                                    <div className='mt-4'>
                                        <p className='text-sm text-gray-600 mb-2'>Available codes:</p>
                                        <div className='space-y-1'>
                                            {promoCodes.map((code, index) => (
                                                <div key={index} className='flex items-center justify-between text-xs md:text-sm'>
                                                    <span className='font-medium text-purple-600'>{code.code}</span>
                                                    <span className='text-gray-600 text-right'>{code.description}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className='lg:col-span-1 order-1 lg:order-2'>
                        <div className='bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 sticky top-20 md:top-24 z-10'>
                            <h2 className='text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6'>Order Summary</h2>

                            <div className='space-y-3 md:space-y-4 mb-4 md:mb-6'>
                                <div className='flex justify-between'>
                                    <span className='text-gray-600 text-sm md:text-base'>Subtotal</span>
                                    <span className='font-semibold text-sm md:text-base'>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className='flex justify-between text-green-600'>
                                    <span className='text-sm md:text-base'>Savings</span>
                                    <span className='font-semibold text-sm md:text-base'>-${savings.toFixed(2)}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-gray-600 text-sm md:text-base'>Shipping</span>
                                    <span className='font-semibold text-sm md:text-base'>
                                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                                    </span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-gray-600 text-sm md:text-base'>Tax</span>
                                    <span className='font-semibold text-sm md:text-base'>${tax.toFixed(2)}</span>
                                </div>
                                <hr className='border-gray-200' />
                                <div className='flex justify-between font-bold text-base md:text-lg'>
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>

                            {subtotal < 50 && (
                                <div className='bg-purple-50 border border-purple-200 rounded-lg p-3 md:p-4 mb-4 md:mb-6'>
                                    <div className='flex items-center space-x-2 text-purple-700'>
                                        <FontAwesomeIcon icon={faTruck} className='text-sm' />
                                        <span className='font-medium text-sm md:text-base'>Free shipping on orders over $50</span>
                                    </div>
                                    <p className='text-xs md:text-sm text-purple-600 mt-1'>
                                        Add ${(50 - subtotal).toFixed(2)} more to qualify for free shipping
                                    </p>
                                </div>
                            )}

                            <button className='w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 md:py-4 px-4 md:px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 mb-4 flex items-center justify-center space-x-2 text-sm md:text-base'>
                                <FontAwesomeIcon icon={faCreditCard} />
                                <span>Proceed to Checkout</span>
                            </button>

                            <div className='space-y-2 md:space-y-3'>
                                <div className='flex items-center space-x-2 text-xs md:text-sm text-gray-600'>
                                    <FontAwesomeIcon icon={faShield} className='text-xs md:text-sm' />
                                    <span>Secure checkout</span>
                                </div>
                                <div className='flex items-center space-x-2 text-xs md:text-sm text-gray-600'>
                                    <FontAwesomeIcon icon={faTruck} className='text-xs md:text-sm' />
                                    <span>Fast delivery</span>
                                </div>
                                <div className='flex items-center space-x-2 text-xs md:text-sm text-gray-600'>
                                    <FontAwesomeIcon icon={faGift} className='text-xs md:text-sm' />
                                    <span>Gift wrapping available</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartPage