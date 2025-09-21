import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPaperPlane,
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faHeart,
    faGift,
    faShield,
    faTruck,
    faHeadset,
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook as faFacebookBrand, faTwitter as faTwitterBrand, faInstagram as faInstagramBrand, faPinterest as faPinterestBrand, faYoutube as faYoutubeBrand } from '@fortawesome/free-brands-svg-icons'

function FooterCom() {
    const quickLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Blog', path: '/blog' },
        { name: 'Careers', path: '/careers' },
        { name: 'Press', path: '/press' },
        { name: 'FAQ', path: '/faq' }
    ]

    const categories = [
        { name: 'Origami', path: '/origami' },
        { name: 'Paper Flowers', path: '/paper-flowers' },
        { name: 'Wall Decor', path: '/wall-decor' },
        { name: 'Gift Boxes', path: '/gift-boxes' },
        { name: 'Eco-Friendly', path: '/eco-friendly' },
        { name: 'Seasonal', path: '/seasonal' }
    ]

    const customerService = [
        { name: 'Shipping Info', path: '/shipping' },
        { name: 'Returns', path: '/returns' },
        { name: 'Size Guide', path: '/size-guide' },
        { name: 'Gift Cards', path: '/gift-cards' },
        { name: 'Track Order', path: '/track-order' },
        { name: 'Size Guide', path: '/size-guide' }
    ]

    const socialLinks = [
        { icon: faFacebookBrand, name: 'Facebook', url: '#' },
        { icon: faInstagramBrand, name: 'Instagram', url: '#' },
        { icon: faTwitterBrand, name: 'Twitter', url: '#' },
        { icon: faPinterestBrand, name: 'Pinterest', url: '#' },
        { icon: faYoutubeBrand, name: 'YouTube', url: '#' }
    ]

    const features = [
        { icon: faTruck, text: 'Free Shipping on $50+' },
        { icon: faShield, text: 'Secure Payment' },
        { icon: faHeadset, text: '24/7 Support' },
        { icon: faGift, text: 'Gift Wrapping' }
    ]

    return (
        <footer className='bg-gray-900 text-white'>
            <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    
                    {/* Company Info */}
                    <div className='lg:col-span-1'>
                        <div className='flex items-center space-x-2 mb-4'>
                            <div className='bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-2 rounded-lg'>
                                <FontAwesomeIcon icon={faPaperPlane} className='text-white text-xl' />
                            </div>
                            <span className='text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent'>
                                WishBox
                            </span>
                        </div>
                        <p className='text-gray-300 mb-6 leading-relaxed'>
                            Your premier destination for beautiful paper decorations, origami, and eco-friendly home decor. 
                            Handcrafted with love, designed for life.
                        </p>
                        
                        {/* Contact Info */}
                        <div className='space-y-3 mb-6'>
                            <div className='flex items-center space-x-3 text-gray-300'>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className='text-purple-400' />
                                <span className='text-sm'>123 Paper Street, Craft City, CC 12345</span>
                            </div>
                            <div className='flex items-center space-x-3 text-gray-300'>
                                <FontAwesomeIcon icon={faPhone} className='text-purple-400' />
                                <span className='text-sm'>+1 (555) 123-4567</span>
                            </div>
                            <div className='flex items-center space-x-3 text-gray-300'>
                                <FontAwesomeIcon icon={faEnvelope} className='text-purple-400' />
                                <span className='text-sm'>hello@wishbox.com</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className='flex space-x-4'>
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.url} 
                                    className='bg-gray-800 hover:bg-purple-600 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 group'
                                    aria-label={social.name}
                                >
                                    <FontAwesomeIcon icon={social.icon} className='text-gray-300 group-hover:text-white' />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className='text-lg font-semibold mb-4 text-white'>Quick Links</h4>
                        <ul className='space-y-2'>
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        to={link.path} 
                                        className='text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm'
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className='text-lg font-semibold mb-4 text-white'>Categories</h4>
                        <ul className='space-y-2'>
                            {categories.map((category, index) => (
                                <li key={index}>
                                    <Link 
                                        to={category.path} 
                                        className='text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm'
                                    >
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className='text-lg font-semibold mb-4 text-white'>Customer Service</h4>
                        <ul className='space-y-2'>
                            {customerService.map((service, index) => (
                                <li key={index}>
                                    <Link 
                                        to={service.path} 
                                        className='text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm'
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Features Bar */}
                <div className='border-t border-gray-800 mt-12 pt-8'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                        {features.map((feature, index) => (
                            <div key={index} className='flex items-center space-x-3 text-center md:text-left'>
                                <div className='bg-purple-600/20 p-2 rounded-lg'>
                                    <FontAwesomeIcon icon={feature.icon} className='text-purple-400' />
                                </div>
                                <span className='text-gray-300 text-sm'>{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='border-t border-gray-800 mt-8 pt-8'>
                    <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                        <div className='text-gray-400 text-sm'>
                            © 2024 WishBox. All rights reserved. Made with 
                            <FontAwesomeIcon icon={faHeart} className='text-red-500 mx-1' />
                            for paper art lovers.
                        </div>
                        <div className='flex space-x-6 text-sm'>
                            <Link to='/privacy' className='text-gray-400 hover:text-purple-400 transition-colors duration-300'>
                                Privacy Policy
                            </Link>
                            <Link to='/terms' className='text-gray-400 hover:text-purple-400 transition-colors duration-300'>
                                Terms of Service
                            </Link>
                            <Link to='/cookies' className='text-gray-400 hover:text-purple-400 transition-colors duration-300'>
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterCom