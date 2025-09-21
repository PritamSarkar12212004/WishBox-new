import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faStar, 
    faHeart, 
    faShoppingCart, 
    faEye,
    faTh,
    faList,
    faChevronDown,
    faGem,
    faFilter,
    faTimes
} from '@fortawesome/free-solid-svg-icons'

function ShopPage() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
    const [selectedSort, setSelectedSort] = useState('newest')
    const [selectedFilters, setSelectedFilters] = useState({
        category: ''
    })
    const [isMobile, setIsMobile] = useState(false)
    const [showFilters, setShowFilters] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
        
        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    const products = [
        {
            id: 1,
            name: "Origami Crane Set - Premium Collection",
            price: 24.99,
            originalPrice: 34.99,
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
            rating: 4.8,
            reviews: 156,
            category: "Origami",
            isNew: true,
            inStock: true,
            description: "Beautiful handcrafted origami cranes in various colors and sizes."
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
            isNew: false,
            inStock: true,
            description: "Stunning paper flower bouquet perfect for home decoration."
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
            isNew: true,
            inStock: true,
            description: "Contemporary wall art made from recycled paper materials."
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
            isNew: false,
            inStock: true,
            description: "Colorful paper lanterns perfect for celebrations and festivals."
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
            isNew: false,
            inStock: true,
            description: "Sustainable gift boxes made from recycled paper."
        },
        {
            id: 6,
            name: "Origami Butterfly Collection",
            price: 22.99,
            originalPrice: 32.99,
            image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop",
            rating: 4.8,
            reviews: 98,
            category: "Origami",
            isNew: true,
            inStock: true,
            description: "Delicate paper butterflies in various sizes and colors."
        },
        {
            id: 7,
            name: "Paper Rose Garden Set",
            price: 34.99,
            originalPrice: 44.99,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
            rating: 4.9,
            reviews: 145,
            category: "Paper Flowers",
            isNew: false,
            inStock: false,
            description: "Romantic paper roses perfect for special occasions."
        },
        {
            id: 8,
            name: "Wall Hanging Mobile - Boho Style",
            price: 27.99,
            originalPrice: 37.99,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
            rating: 4.7,
            reviews: 112,
            category: "Wall Decor",
            isNew: true,
            inStock: true,
            description: "Bohemian style wall hanging made from natural paper."
        }
    ]

    const categories = [
        { name: "All Festivals", value: "", color: "from-orange-400 to-red-400", icon: "🎉" },
        { name: "Navratri", value: "Navratri", color: "from-orange-400 to-red-400", icon: "🪔" },
        { name: "Diwali", value: "Diwali", color: "from-yellow-400 to-orange-400", icon: "✨" },
        { name: "Holi", value: "Holi", color: "from-pink-400 to-purple-400", icon: "🎨" },
        { name: "Raksha Bandhan", value: "Raksha Bandhan", color: "from-pink-400 to-red-400", icon: "🎗️" },
        { name: "Karva Chauth", value: "Karva Chauth", color: "from-red-400 to-pink-400", icon: "🌙" },
        { name: "Janmashtami", value: "Janmashtami", color: "from-blue-400 to-purple-400", icon: "🐚" },
        { name: "Dussehra", value: "Dussehra", color: "from-orange-400 to-yellow-400", icon: "🏹" },
        { name: "Eid", value: "Eid", color: "from-green-400 to-blue-400", icon: "🌙" },
        { name: "Christmas", value: "Christmas", color: "from-green-400 to-red-400", icon: "🎄" }
    ]

    const sortOptions = [
        { name: "Newest First", value: "newest" },
        { name: "Oldest First", value: "oldest" },
        { name: "Price: Low to High", value: "price-low" },
        { name: "Price: High to Low", value: "price-high" },
        { name: "Highest Rated", value: "rating" },
        { name: "Most Popular", value: "popular" }
    ]

    const filteredProducts = products.filter(product => {
        if (selectedFilters.category && product.category !== selectedFilters.category) return false
        return true
    })

    return (
        <div className='flex-1  md:p-6'>
            {/* Page Header */}
            <div className='mb-6 md:mb-8'>
                <div className='bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl p-4 md:p-6 lg:p-8 text-white'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-2'>Festival Decorations</h1>
                    <p className='text-orange-100 text-sm md:text-base lg:text-lg'>Discover beautiful paper decorations for all Indian festivals</p>
                    <div className='flex items-center justify-between mt-4 md:mt-6'>
                        <div className='flex items-center space-x-2 md:space-x-4'>
                            <span className='bg-white/20 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm'>
                                {filteredProducts.length} Products
                            </span>
                            <span className='bg-white/20 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm'>
                                Festival Ready
                            </span>
                        </div>
                        <div className='hidden md:flex items-center space-x-2'>
                            <FontAwesomeIcon icon={faGem} className='text-sm' />
                            <span className='text-sm'>Traditional & Modern</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Filter Toggle */}
            {isMobile && (
                <div className='mb-4'>
                    <button 
                        onClick={() => setShowFilters(!showFilters)}
                        className='w-full bg-white rounded-xl p-3 shadow-sm flex items-center justify-between'
                    >
                        <div className='flex items-center space-x-2'>
                            <FontAwesomeIcon icon={faFilter} className='text-orange-600' />
                            <span className='font-medium'>Filter & Sort</span>
                        </div>
                        <FontAwesomeIcon 
                            icon={showFilters ? faTimes : faChevronDown} 
                            className={`text-gray-500 ${showFilters ? '' : 'transform rotate-0'}`}
                        />
                    </button>
                </div>
            )}

            {/* Festival Categories Section - Mobile Optimized */}
            {(showFilters || !isMobile) && (
                <div className='mb-6 md:mb-8'>
                    <div className='bg-white rounded-2xl shadow-lg p-4 md:p-6'>
                        <h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center'>Festival Categories</h2>
                        <div className={`grid ${isMobile ? 'grid-cols-3 gap-2' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4'}`}>
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setSelectedFilters({...selectedFilters, category: category.value})
                                        if (isMobile) setShowFilters(false)
                                    }}
                                    className={`group p-2 md:p-3 rounded-xl md:rounded-2xl text-center transition-all duration-300 hover:shadow-lg ${
                                        selectedFilters.category === category.value
                                            ? 'bg-gradient-to-br ' + category.color + ' text-white shadow-lg scale-105'
                                            : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                                    }`}
                                >
                                    <div className={`${isMobile ? 'w-8 h-8 md:w-10 md:h-10' : 'w-10 h-10 md:w-12 md:h-12'} rounded-lg md:rounded-xl mx-auto mb-1 md:mb-2 flex items-center justify-center ${
                                        selectedFilters.category === category.value
                                            ? 'bg-white/20'
                                            : 'bg-gradient-to-br ' + category.color
                                    }`}>
                                        <span className="text-sm md:text-base">{category.icon}</span>
                                    </div>
                                    <h3 className={`font-semibold text-xs md:text-sm ${
                                        selectedFilters.category === category.value
                                            ? 'text-white'
                                            : 'text-gray-700'
                                    }`}>{isMobile ? category.name.split(' ')[0] : category.name}</h3>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Toolbar - Mobile Optimized */}
            {(showFilters || !isMobile) && (
                <div className='bg-white rounded-2xl shadow-sm p-3 md:p-4 mb-4 md:mb-6'>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4'>
                        <div className='flex items-center space-x-2 md:space-x-4 text-sm md:text-base'>
                            <div className='text-gray-600'>
                                Showing {filteredProducts.length} products
                            </div>
                        </div>

                        <div className='flex items-center space-x-3 md:space-x-4 w-full md:w-auto'>
                            {/* Sort Dropdown */}
                            <div className='relative flex-1 md:flex-none'>
                                <select 
                                    value={selectedSort}
                                    onChange={(e) => setSelectedSort(e.target.value)}
                                    className='w-full appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm md:text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                                >
                                    {sortOptions.map((option, index) => (
                                        <option key={index} value={option.value}>
                                            {option.name}
                                        </option>
                                    ))}
                                </select>
                                <FontAwesomeIcon 
                                    icon={faChevronDown} 
                                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs md:text-sm pointer-events-none'
                                />
                            </div>

                            {/* View Mode Toggle */}
                            <div className='flex bg-gray-100 rounded-lg p-1'>
                                <button 
                                    onClick={() => setViewMode('grid')}
                                    className={`p-1 md:p-2 rounded-md transition-colors duration-200 ${
                                        viewMode === 'grid' 
                                            ? 'bg-white text-orange-600 shadow-sm' 
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    <FontAwesomeIcon icon={faTh} className='text-xs md:text-sm' />
                                </button>
                                <button 
                                    onClick={() => setViewMode('list')}
                                    className={`p-1 md:p-2 rounded-md transition-colors duration-200 ${
                                        viewMode === 'list' 
                                            ? 'bg-white text-orange-600 shadow-sm' 
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    <FontAwesomeIcon icon={faList} className='text-xs md:text-sm' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Products Grid/List - Mobile Optimized */}
            <div className={`${
                viewMode === 'grid' 
                    ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-6' 
                    : 'space-y-4 md:space-y-6'
            }`}>
                {filteredProducts.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`} className={`group bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden block ${
                        viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
                    }`}>
                        <div className={`relative ${viewMode === 'list' ? 'sm:w-1/3' : ''}`}>
                            <img 
                                src={product.image} 
                                alt={product.name}
                                className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                                    viewMode === 'list' ? 'h-40 sm:h-48' : 'w-full h-40 sm:h-48 md:h-56'
                                }`}
                            />
                            {product.isNew && (
                                <div className='absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-1.5 py-0.5 md:px-2 md:py-1 rounded-full'>
                                    New
                                </div>
                            )}
                            {!product.inStock && (
                                <div className='absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 md:px-2 md:py-1 rounded-full'>
                                    Out of Stock
                                </div>
                            )}
                            <div className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <button className='bg-white/90 hover:bg-white rounded-full p-1 md:p-2 shadow-md hover:shadow-lg transition-all duration-300'>
                                    <FontAwesomeIcon icon={faHeart} className='text-gray-600 hover:text-red-500 text-xs md:text-sm' />
                                </button>
                            </div>
                            <div className='absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <button className='bg-white/90 hover:bg-white rounded-full p-1 md:p-2 shadow-md hover:shadow-lg transition-all duration-300'>
                                    <FontAwesomeIcon icon={faEye} className='text-gray-600 hover:text-orange-600 text-xs md:text-sm' />
                                </button>
                            </div>
                        </div>
                        <div className={`p-3 md:p-4 ${viewMode === 'list' ? 'sm:flex-1' : ''}`}>
                            <div className='flex items-center justify-between mb-1 md:mb-2'>
                                <span className='text-xs bg-orange-100 text-orange-600 px-1.5 py-0.5 md:px-2 md:py-1 rounded-full font-medium'>
                                    {product.category}
                                </span>
                                <div className='flex items-center space-x-0.5 md:space-x-1'>
                                    {[...Array(5)].map((_, i) => (
                                        <FontAwesomeIcon 
                                            key={i} 
                                            icon={faStar} 
                                            className={`text-xs ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                                        />
                                    ))}
                                    <span className='text-xs text-gray-500 ml-1'>({product.reviews})</span>
                                </div>
                            </div>
                            <h3 className='font-semibold text-gray-900 text-sm md:text-base mb-1 md:mb-2 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2'>
                                {product.name}
                            </h3>
                            {viewMode === 'list' && (
                                <p className='text-gray-600 text-xs md:text-sm mb-2 md:mb-3 line-clamp-2'>{product.description}</p>
                            )}
                            <div className='flex items-center justify-between mb-2 md:mb-3'>
                                <div className='flex items-center space-x-1 md:space-x-2'>
                                    <span className='text-base md:text-lg font-bold text-gray-900'>${product.price}</span>
                                    <span className='text-xs md:text-sm text-gray-500 line-through'>${product.originalPrice}</span>
                                </div>
                                <span className='text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full font-semibold'>
                                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                                </span>
                            </div>
                            <button 
                                disabled={!product.inStock}
                                className={`w-full py-1.5 md:py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-1 md:space-x-2 text-xs md:text-sm ${
                                    product.inStock 
                                        ? 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white hover:shadow-md' 
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                            >
                                <FontAwesomeIcon icon={faShoppingCart} className='text-xs md:text-sm' />
                                <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                            </button>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination - Mobile Optimized */}
            <div className='mt-8 md:mt-12 flex justify-center'>
                <div className='flex items-center space-x-1 md:space-x-2'>
                    <button className='px-2 py-1 md:px-3 md:py-2 text-gray-500 hover:text-orange-600 transition-colors duration-200 text-sm md:text-base'>
                        Previous
                    </button>
                    <button className='px-2 py-1 md:px-3 md:py-2 bg-orange-600 text-white rounded-lg text-sm md:text-base'>1</button>
                    <button className='px-2 py-1 md:px-3 md:py-2 text-gray-500 hover:text-orange-600 transition-colors duration-200 text-sm md:text-base'>2</button>
                    <button className='px-2 py-1 md:px-3 md:py-2 text-gray-500 hover:text-orange-600 transition-colors duration-200 text-sm md:text-base'>3</button>
                    <button className='px-2 py-1 md:px-3 md:py-2 text-gray-500 hover:text-orange-600 transition-colors duration-200 text-sm md:text-base'>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ShopPage