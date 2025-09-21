import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faEnvelope, 
    faPhone, 
    faMapMarkerAlt, 
    faClock,
    faPaperPlane,
    faUser,
    faMessage,
    faCheckCircle,
    faBars,
    faTimes
} from '@fortawesome/free-solid-svg-icons'

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate form submission
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 3000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const contactInfo = [
        {
            icon: faMapMarkerAlt,
            title: "Visit Our Studio",
            details: "123 Paper Street, Craft City, CC 12345",
            description: "Come visit our beautiful studio and see our crafts in person"
        },
        {
            icon: faPhone,
            title: "Call Us",
            details: "+1 (555) 123-4567",
            description: "Mon-Fri 9AM-6PM, Sat 10AM-4PM"
        },
        {
            icon: faEnvelope,
            title: "Email Us",
            details: "hello@wishbox.com",
            description: "We'll respond within 24 hours"
        },
        {
            icon: faClock,
            title: "Business Hours",
            details: "Mon-Fri: 9AM-6PM",
            description: "Sat: 10AM-4PM, Sun: Closed"
        }
    ]

    return (
        <div className='flex-1  md:px-6'>
            {/* Mobile Menu Button - Only visible on small screens */}
            <div className='lg:hidden fixed top-4 right-4 z-50'>
               
            </div>

            {/* Hero Section */}
            <div className='mb-8 mt-4 md:mt-0'>
                <div className='bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 md:p-8 text-white text-center'>
                    <div className='max-w-3xl mx-auto'>
                        <FontAwesomeIcon icon={faEnvelope} className='text-3xl md:text-4xl mb-3 md:mb-4' />
                        <h1 className='text-3xl md:text-4xl font-bold mb-3 md:mb-4'>Get in Touch</h1>
                        <p className='text-purple-100 text-base md:text-lg'>
                            We'd love to hear from you! Whether you have questions about our products, 
                            need custom paper decorations, or just want to say hello.
                        </p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8'>
                {/* Contact Information - Hidden on mobile when menu is closed */}
                <div className={`lg:col-span-1 ${mobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
                    <div className='bg-white rounded-2xl shadow-lg p-5 md:p-6 lg:sticky lg:top-24'>
                        <h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6'>Contact Information</h2>
                        <div className='space-y-4 md:space-y-6'>
                            {contactInfo.map((info, index) => (
                                <div key={index} className='flex items-start space-x-3 md:space-x-4'>
                                    <div className='bg-gradient-to-r from-purple-100 to-pink-100 p-2 md:p-3 rounded-xl flex-shrink-0'>
                                        <FontAwesomeIcon icon={info.icon} className='text-purple-600 text-base md:text-lg' />
                                    </div>
                                    <div className='min-w-0'>
                                        <h3 className='font-semibold text-gray-900 mb-1 text-sm md:text-base'>{info.title}</h3>
                                        <p className='text-gray-900 font-medium mb-1 text-sm md:text-base truncate'>{info.details}</p>
                                        <p className='text-gray-600 text-xs md:text-sm'>{info.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Media */}
                        <div className='mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200'>
                            <h3 className='font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base'>Follow Us</h3>
                            <div className='flex space-x-3 md:space-x-4'>
                                <a href='#' className='bg-purple-100 hover:bg-purple-200 p-2 md:p-3 rounded-xl transition-colors duration-200'>
                                    <span className='text-purple-600 font-semibold text-sm md:text-base'>FB</span>
                                </a>
                                <a href='#' className='bg-pink-100 hover:bg-pink-200 p-2 md:p-3 rounded-xl transition-colors duration-200'>
                                    <span className='text-pink-600 font-semibold text-sm md:text-base'>IG</span>
                                </a>
                                <a href='#' className='bg-purple-100 hover:bg-purple-200 p-2 md:p-3 rounded-xl transition-colors duration-200'>
                                    <span className='text-purple-600 font-semibold text-sm md:text-base'>TW</span>
                                </a>
                                <a href='#' className='bg-red-100 hover:bg-red-200 p-2 md:p-3 rounded-xl transition-colors duration-200'>
                                    <span className='text-red-600 font-semibold text-sm md:text-base'>PT</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className='lg:col-span-2'>
                    <div className='bg-white rounded-2xl shadow-lg p-5 md:p-6 lg:p-8'>
                        <h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6'>Send us a Message</h2>
                        
                        {isSubmitted ? (
                            <div className='text-center py-6 md:py-8'>
                                <FontAwesomeIcon icon={faCheckCircle} className='text-green-500 text-3xl md:text-4xl mb-3 md:mb-4' />
                                <h3 className='text-lg md:text-xl font-semibold text-gray-900 mb-2'>Message Sent!</h3>
                                <p className='text-gray-600 text-sm md:text-base'>Thank you for contacting us. We'll get back to you soon!</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                                    <div>
                                        <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                                            <FontAwesomeIcon icon={faUser} className='mr-2 text-purple-600' />
                                            Full Name
                                        </label>
                                        <input
                                            type='text'
                                            id='name'
                                            name='name'
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm md:text-base'
                                            placeholder='Your full name'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                                            <FontAwesomeIcon icon={faEnvelope} className='mr-2 text-purple-600' />
                                            Email Address
                                        </label>
                                        <input
                                            type='email'
                                            id='email'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm md:text-base'
                                            placeholder='your.email@example.com'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-2'>
                                        Subject
                                    </label>
                                    <input
                                        type='text'
                                        id='subject'
                                        name='subject'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm md:text-base'
                                        placeholder='What is this about?'
                                    />
                                </div>

                                <div>
                                    <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                                        <FontAwesomeIcon icon={faMessage} className='mr-2 text-purple-600' />
                                        Message
                                    </label>
                                    <textarea
                                        id='message'
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className='w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none text-sm md:text-base'
                                        placeholder='Tell us how we can help you...'
                                    />
                                </div>

                                <button
                                    type='submit'
                                    className='w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 md:py-4 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm md:text-base'
                                >
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                    <span>Send Message</span>
                                </button>
                            </form>
                        )}
                    </div>

                    {/* FAQ Section */}
                    <div className='mt-6 md:mt-8 bg-white rounded-2xl shadow-lg p-5 md:p-6 lg:p-8'>
                        <h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6'>Frequently Asked Questions</h2>
                        <div className='space-y-3 md:space-y-4'>
                            <div className='border border-gray-200 rounded-lg p-3 md:p-4'>
                                <h3 className='font-semibold text-gray-900 mb-2 text-sm md:text-base'>Do you offer custom paper decorations?</h3>
                                <p className='text-gray-600 text-sm md:text-base'>Yes! We specialize in custom paper decorations for special events, weddings, and corporate functions.</p>
                            </div>
                            <div className='border border-gray-200 rounded-lg p-3 md:p-4'>
                                <h3 className='font-semibold text-gray-900 mb-2 text-sm md:text-base'>What is your shipping policy?</h3>
                                <p className='text-gray-600 text-sm md:text-base'>We offer free shipping on orders over $50. Standard shipping takes 3-5 business days.</p>
                            </div>
                            <div className='border border-gray-200 rounded-lg p-3 md:p-4'>
                                <h3 className='font-semibold text-gray-900 mb-2 text-sm md:text-base'>Can I return items?</h3>
                                <p className='text-gray-600 text-sm md:text-base'>Yes, we offer a 30-day return policy for unused items in original packaging.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage