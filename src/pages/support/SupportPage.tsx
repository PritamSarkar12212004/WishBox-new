import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHeadset, 
    faSearch, 
    faQuestionCircle,
    faShippingFast,
    faUndo,
    faCreditCard,
    faGift,
    faCog,
    faPaperPlane,
    faUser,
    faEnvelope,
    faMessage,
    faBars,
    faTimes
} from '@fortawesome/free-solid-svg-icons'

function SupportPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false)

    const categories = [
        { id: 'all', name: 'All Topics', icon: faQuestionCircle },
        { id: 'shipping', name: 'Shipping', icon: faShippingFast },
        { id: 'returns', name: 'Returns', icon: faUndo },
        { id: 'payment', name: 'Payment', icon: faCreditCard },
        { id: 'products', name: 'Products', icon: faGift },
        { id: 'account', name: 'Account', icon: faCog }
    ]

    const faqs = [
        {
            category: 'shipping',
            question: 'How long does shipping take?',
            answer: 'Standard shipping takes 3-5 business days. Express shipping (1-2 business days) is available for an additional fee. Free shipping is provided on orders over $50.'
        },
        {
            category: 'shipping',
            question: 'Do you ship internationally?',
            answer: 'Yes! We ship to most countries worldwide. International shipping typically takes 7-14 business days. Please note that customs fees may apply.'
        },
        {
            category: 'returns',
            question: 'What is your return policy?',
            answer: 'We offer a 30-day return policy for unused items in original packaging. Custom orders are non-returnable unless there\'s a defect.'
        },
        {
            category: 'returns',
            question: 'How do I return an item?',
            answer: 'Contact our support team to initiate a return. We\'ll provide you with a return label and instructions. Returns are processed within 5-7 business days of receipt.'
        },
        {
            category: 'payment',
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are processed securely.'
        },
        {
            category: 'products',
            question: 'Are your products eco-friendly?',
            answer: 'Yes! We\'re committed to sustainability and use recycled, biodegradable materials whenever possible. All our products are made with eco-friendly processes.'
        },
        {
            category: 'products',
            question: 'Do you offer custom orders?',
            answer: 'Absolutely! We specialize in custom paper decorations for weddings, events, and special occasions. Contact us with your requirements for a personalized quote.'
        },
        {
            category: 'account',
            question: 'How do I track my order?',
            answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order in your account dashboard.'
        }
    ]

    const filteredFAQs = faqs.filter(faq => {
        const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
        const matchesSearch = searchQuery === '' || 
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className='flex-1'>
     

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8'>
                {/* Mobile Category Toggle */}
                <div className='lg:hidden'>
                    <button 
                        onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
                        className='w-full flex items-center justify-between bg-white rounded-xl shadow-lg p-4'
                    >
                        <span className='font-medium text-gray-900'>
                            {categories.find(c => c.id === selectedCategory)?.name || 'Browse Categories'}
                        </span>
                        <FontAwesomeIcon 
                            icon={isCategoryMenuOpen ? faTimes : faBars} 
                            className='text-gray-600'
                        />
                    </button>
                </div>

                {/* Categories Sidebar */}
                <div className={`lg:col-span-1 ${isCategoryMenuOpen ? 'block' : 'hidden'} lg:block`}>
                    <div className='bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 md:p-6 lg:sticky lg:top-24'>
                        <h3 className='text-lg font-semibold text-gray-900 mb-3 md:mb-4 hidden lg:block'>Browse by Category</h3>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2 lg:gap-2'>
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => {
                                        setSelectedCategory(category.id)
                                        setIsCategoryMenuOpen(false)
                                    }}
                                    className={`flex items-center space-x-2 lg:space-x-3 p-2 lg:p-3 rounded-lg transition-colors duration-200 ${
                                        selectedCategory === category.id
                                            ? 'bg-purple-100 text-purple-700'
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    <FontAwesomeIcon icon={category.icon} className='text-xs md:text-sm' />
                                    <span className='font-medium text-sm lg:text-base'>{category.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ Content */}
                <div className='lg:col-span-3'>
                    <div className='bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 lg:p-8'>
                        <div className='flex items-center justify-between mb-4 md:mb-6'>
                            <h2 className='text-xl md:text-2xl font-bold text-gray-900'>
                                {selectedCategory === 'all' ? 'All Questions' : categories.find(c => c.id === selectedCategory)?.name}
                            </h2>
                            <span className='bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium'>
                                {filteredFAQs.length} results
                            </span>
                        </div>

                        {filteredFAQs.length === 0 ? (
                            <div className='text-center py-8 md:py-12'>
                                <FontAwesomeIcon icon={faSearch} className='text-gray-300 text-3xl md:text-4xl mb-3 md:mb-4' />
                                <h3 className='text-lg font-semibold text-gray-900 mb-2'>No results found</h3>
                                <p className='text-gray-600'>Try adjusting your search or browse by category.</p>
                            </div>
                        ) : (
                            <div className='space-y-3 md:space-y-4'>
                                {filteredFAQs.map((faq, index) => (
                                    <div key={index} className='border border-gray-200 rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow duration-200'>
                                        <h3 className='text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3'>{faq.question}</h3>
                                        <p className='text-gray-600 leading-relaxed text-sm md:text-base'>{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Contact Support */}
                    <div className='mt-6 md:mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8'>
                        <div className='text-center mb-4 md:mb-6'>
                            <h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-2'>Still need help?</h2>
                            <p className='text-gray-600 text-sm md:text-base'>Can't find what you're looking for? Our support team is here to help!</p>
                        </div>
                        
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                            <div className='bg-white rounded-lg p-4 md:p-6 text-center'>
                                <FontAwesomeIcon icon={faEnvelope} className='text-purple-600 text-xl md:text-2xl mb-2 md:mb-3' />
                                <h3 className='font-semibold text-gray-900 mb-1 md:mb-2 text-base md:text-lg'>Email Support</h3>
                                <p className='text-gray-600 text-xs md:text-sm mb-3 md:mb-4'>Get help via email within 24 hours</p>
                                <a 
                                    href='mailto:support@wishbox.com'
                                    className='inline-block bg-purple-600 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-purple-700 transition-colors duration-200'
                                >
                                    Email Us
                                </a>
                            </div>
                            
                            <div className='bg-white rounded-lg p-4 md:p-6 text-center'>
                                <FontAwesomeIcon icon={faMessage} className='text-pink-600 text-xl md:text-2xl mb-2 md:mb-3' />
                                <h3 className='font-semibold text-gray-900 mb-1 md:mb-2 text-base md:text-lg'>Live Chat</h3>
                                <p className='text-gray-600 text-xs md:text-sm mb-3 md:mb-4'>Chat with us in real-time</p>
                                <button className='inline-block bg-pink-600 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-pink-700 transition-colors duration-200'>
                                    Start Chat
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className='mt-6 md:mt-8 bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 lg:p-8'>
                        <h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6'>Quick Links</h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>
                            <div className='text-center'>
                                <div className='bg-purple-100 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3'>
                                    <FontAwesomeIcon icon={faShippingFast} className='text-purple-600 text-sm md:text-base' />
                                </div>
                                <h3 className='font-semibold text-gray-900 mb-1 text-sm md:text-base'>Track Order</h3>
                                <p className='text-gray-600 text-xs md:text-sm'>Check your order status</p>
                            </div>
                            <div className='text-center'>
                                <div className='bg-pink-100 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3'>
                                    <FontAwesomeIcon icon={faUndo} className='text-pink-600 text-sm md:text-base' />
                                </div>
                                <h3 className='font-semibold text-gray-900 mb-1 text-sm md:text-base'>Start Return</h3>
                                <p className='text-gray-600 text-xs md:text-sm'>Begin return process</p>
                            </div>
                            <div className='text-center'>
                                <div className='bg-purple-100 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3'>
                                    <FontAwesomeIcon icon={faUser} className='text-purple-600 text-sm md:text-base' />
                                </div>
                                <h3 className='font-semibold text-gray-900 mb-1 text-sm md:text-base'>My Account</h3>
                                <p className='text-gray-600 text-xs md:text-sm'>Manage your account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportPage