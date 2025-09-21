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
    faGift
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
        <div className='flex-1'>
            {/* Page Header */}
            <div className='mb-8'>
                <div className='bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 md:p-8 text-white'>
                    <div className='flex items-center space-x-4 mb-4'>
                        <FontAwesomeIcon icon={faShoppingCart} className='text-4xl' />
                        <div>
                            <h1 className='text-3xl md:text-4xl font-bold mb-2'>Shopping Cart</h1>
                            <p className='text-purple-100'>
                                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {cartItems.length === 0 ? (
                /* Empty Cart */
                <div className='bg-white rounded-2xl shadow-lg p-12 text-center'>
                    <FontAwesomeIcon icon={faShoppingCart} className='text-6xl text-gray-300 mb-6' />
                    <h2 className='text-2xl font-bold text-gray-900 mb-4'>Your cart is empty</h2>
                    <p className='text-gray-600 mb-8 max-w-md mx-auto'>
                        Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
                    </p>
                    <button className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300'>
                        Continue Shopping
                    </button>
                </div>
            ) : (
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    {/* Cart Items */}
                    <div className='lg:col-span-2'>
                        <div className='bg-white rounded-2xl shadow-lg p-6'>
                            <h2 className='text-xl font-semibold text-gray-900 mb-6'>Cart Items</h2>
                            <div className='space-y-4'>
                                {cartItems.map((item) => (
                                    <div key={item.id} className='flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200'>
                                        <img 
                                            src={item.image} 
                                            alt={item.name}
                                            className='w-20 h-20 object-cover rounded-lg'
                                        />
                                        <div className='flex-1'>
                                            <div className='flex items-start justify-between'>
                                                <div>
                                                    <span className='text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full font-medium mb-1 inline-block'>
                                                        {item.category}
                                                    </span>
                                                    <h3 className='font-semibold text-gray-900 mb-1'>{item.name}</h3>
                                                    <div className='flex items-center space-x-2'>
                                                        <span className='text-lg font-bold text-gray-900'>${item.price}</span>
                                                        <span className='text-sm text-gray-500 line-through'>${item.originalPrice}</span>
                                                        <span className='text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold'>
                                                            {Math.round((1 - item.price / item.originalPrice) * 100)}% OFF
                                                        </span>
                                                    </div>
                                                </div>
                                                <button 
                                                    onClick={() => removeFromCart(item.id)}
                                                    className='text-red-500 hover:text-red-700 transition-colors duration-200'
                                                >
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </div>
                                            
                                            <div className='flex items-center justify-between mt-4'>
                                                <div className='flex items-center space-x-3'>
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className='w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200'
                                                    >
                                                        <FontAwesomeIcon icon={faMinus} className='text-sm' />
                                                    </button>
                                                    <span className='w-8 text-center font-semibold'>{item.quantity}</span>
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className='w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200'
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} className='text-sm' />
                                                    </button>
                                                </div>
                                                
                                                <div className='flex items-center space-x-2'>
                                                    <span className='font-bold text-gray-900'>
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </span>
                                                    <button 
                                                        onClick={() => moveToWishlist(item.id)}
                                                        className='text-purple-600 hover:text-purple-700 transition-colors duration-200'
                                                        title='Move to Wishlist'
                                                    >
                                                        <FontAwesomeIcon icon={faHeart} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Promo Code */}
                        <div className='mt-6 bg-white rounded-2xl shadow-lg p-6'>
                            <h3 className='text-lg font-semibold text-gray-900 mb-4'>Promo Code</h3>
                            <div className='flex space-x-4'>
                                <input 
                                    type='text' 
                                    placeholder='Enter promo code'
                                    className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                                />
                                <button className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300'>
                                    Apply
                                </button>
                            </div>
                            <div className='mt-4'>
                                <p className='text-sm text-gray-600 mb-2'>Available codes:</p>
                                <div className='space-y-1'>
                                    {promoCodes.map((code, index) => (
                                        <div key={index} className='flex items-center justify-between text-sm'>
                                            <span className='font-medium text-purple-600'>{code.code}</span>
                                            <span className='text-gray-600'>{code.description}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className='lg:col-span-1'>
                        <div className='bg-white rounded-2xl shadow-lg p-6 sticky top-24'>
                            <h2 className='text-xl font-semibold text-gray-900 mb-6'>Order Summary</h2>
                            
                            <div className='space-y-4 mb-6'>
                                <div className='flex justify-between'>
                                    <span className='text-gray-600'>Subtotal</span>
                                    <span className='font-semibold'>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className='flex justify-between text-green-600'>
                                    <span>Savings</span>
                                    <span className='font-semibold'>-${savings.toFixed(2)}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-gray-600'>Shipping</span>
                                    <span className='font-semibold'>
                                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                                    </span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-gray-600'>Tax</span>
                                    <span className='font-semibold'>${tax.toFixed(2)}</span>
                                </div>
                                <hr className='border-gray-200' />
                                <div className='flex justify-between text-lg font-bold'>
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>

                            {subtotal < 50 && (
                                <div className='bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6'>
                                    <div className='flex items-center space-x-2 text-purple-700'>
                                        <FontAwesomeIcon icon={faTruck} />
                                        <span className='font-medium'>Free shipping on orders over $50</span>
                                    </div>
                                    <p className='text-sm text-purple-600 mt-1'>
                                        Add ${(50 - subtotal).toFixed(2)} more to qualify for free shipping
                                    </p>
                                </div>
                            )}

                            <button className='w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 mb-4 flex items-center justify-center space-x-2'>
                                <FontAwesomeIcon icon={faCreditCard} />
                                <span>Proceed to Checkout</span>
                            </button>

                            <div className='space-y-3'>
                                <div className='flex items-center space-x-3 text-sm text-gray-600'>
                                    <FontAwesomeIcon icon={faShield} />
                                    <span>Secure checkout</span>
                                </div>
                                <div className='flex items-center space-x-3 text-sm text-gray-600'>
                                    <FontAwesomeIcon icon={faTruck} />
                                    <span>Fast delivery</span>
                                </div>
                                <div className='flex items-center space-x-3 text-sm text-gray-600'>
                                    <FontAwesomeIcon icon={faGift} />
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
