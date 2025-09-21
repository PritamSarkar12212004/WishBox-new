import { useState } from 'react'
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
    faGem
} from '@fortawesome/free-solid-svg-icons'

function ShopPage() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
    const [selectedSort, setSelectedSort] = useState('newest')
    const [selectedFilters, setSelectedFilters] = useState({
        category: ''
    })

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
        { name: "All Festivals", value: "", color: "from-orange-400 to-red-400" },
        { name: "Navratri", value: "Navratri", color: "from-orange-400 to-red-400" },
        { name: "Diwali", value: "Diwali", color: "from-yellow-400 to-orange-400" },
        { name: "Holi", value: "Holi", color: "from-pink-400 to-purple-400" },
        { name: "Raksha Bandhan", value: "Raksha Bandhan", color: "from-pink-400 to-red-400" },
        { name: "Karva Chauth", value: "Karva Chauth", color: "from-red-400 to-pink-400" },
        { name: "Janmashtami", value: "Janmashtami", color: "from-blue-400 to-purple-400" },
        { name: "Dussehra", value: "Dussehra", color: "from-orange-400 to-yellow-400" },
        { name: "Eid", value: "Eid", color: "from-green-400 to-blue-400" },
        { name: "Christmas", value: "Christmas", color: "from-green-400 to-red-400" }
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
        <div className='flex-1'>
            {/* Page Header */}
            <div className='mb-8'>
                <div className='bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl p-6 md:p-8 text-white'>
                    <h1 className='text-3xl md:text-4xl font-bold mb-2'>Festival Decorations</h1>
                    <p className='text-orange-100 text-lg'>Discover beautiful paper decorations for all Indian festivals</p>
                    <div className='flex items-center justify-between mt-6'>
                        <div className='flex items-center space-x-4'>
                            <span className='bg-white/20 px-3 py-1 rounded-full text-sm'>
                                {filteredProducts.length} Products
                            </span>
                            <span className='bg-white/20 px-3 py-1 rounded-full text-sm'>
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

            {/* Festival Categories Section */}
            <div className='mb-8'>
                <div className='bg-white rounded-2xl shadow-lg p-6'>
                    <h2 className='text-2xl font-bold text-gray-900 mb-6 text-center'>Festival Categories</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedFilters({...selectedFilters, category: category.value})}
                                className={`group p-4 rounded-2xl text-center transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                                    selectedFilters.category === category.value
                                        ? 'bg-gradient-to-br ' + category.color + ' text-white shadow-lg'
                                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                                }`}
                            >
                                <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${
                                    selectedFilters.category === category.value
                                        ? 'bg-white/20'
                                        : 'bg-gradient-to-br ' + category.color
                                }`}>
                                    <FontAwesomeIcon 
                                        icon={faGem} 
                                        className={`text-xl ${
                                            selectedFilters.category === category.value
                                                ? 'text-white'
                                                : 'text-white'
                                        }`} 
                                    />
                                </div>
                                <h3 className={`font-semibold text-sm ${
                                    selectedFilters.category === category.value
                                        ? 'text-white'
                                        : 'text-gray-700'
                                }`}>{category.name}</h3>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Toolbar */}
            <div className='bg-white rounded-2xl shadow-sm p-4 mb-6'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                    <div className='flex items-center space-x-4'>
                        <div className='text-gray-600'>
                            Showing {filteredProducts.length} products
                        </div>
                    </div>

                    <div className='flex items-center space-x-4'>
                        {/* Sort Dropdown */}
                        <div className='relative'>
                            <select 
                                value={selectedSort}
                                onChange={(e) => setSelectedSort(e.target.value)}
                                className='appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                            >
                                {sortOptions.map((option, index) => (
                                    <option key={index} value={option.value}>
                                        {option.name}
                                    </option>
                                ))}
                            </select>
                            <FontAwesomeIcon 
                                icon={faChevronDown} 
                                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none'
                            />
                        </div>

                        {/* View Mode Toggle */}
                        <div className='flex bg-gray-100 rounded-lg p-1'>
                            <button 
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-md transition-colors duration-200 ${
                                    viewMode === 'grid' 
                                        ? 'bg-white text-orange-600 shadow-sm' 
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                <FontAwesomeIcon icon={faTh} />
                            </button>
                            <button 
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-md transition-colors duration-200 ${
                                    viewMode === 'list' 
                                        ? 'bg-white text-orange-600 shadow-sm' 
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                <FontAwesomeIcon icon={faList} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Grid/List */}
            <div className={`${
                viewMode === 'grid' 
                    ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
                    : 'space-y-6'
            }`}>
                {filteredProducts.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`} className={`group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden block ${
                        viewMode === 'list' ? 'flex' : ''
                    }`}>
                        <div className={`relative ${viewMode === 'list' ? 'w-1/3' : ''}`}>
                            <img 
                                src={product.image} 
                                alt={product.name}
                                className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                                    viewMode === 'list' ? 'h-48' : 'w-full h-48 md:h-56'
                                }`}
                            />
                            {product.isNew && (
                                <div className='absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full'>
                                    New
                                </div>
                            )}
                            {!product.inStock && (
                                <div className='absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full'>
                                    Out of Stock
                                </div>
                            )}
                            <div className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <button className='bg-white/90 hover:bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300'>
                                    <FontAwesomeIcon icon={faHeart} className='text-gray-600 hover:text-red-500' />
                                </button>
                            </div>
                            <div className='absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <button className='bg-white/90 hover:bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300'>
                                    <FontAwesomeIcon icon={faEye} className='text-gray-600 hover:text-orange-600' />
                                </button>
                            </div>
                        </div>
                        <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                            <div className='flex items-center justify-between mb-2'>
                                <span className='text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-medium'>
                                    {product.category}
                                </span>
                                <div className='flex items-center space-x-1'>
                                    {[...Array(5)].map((_, i) => (
                                        <FontAwesomeIcon 
                                            key={i} 
                                            icon={faStar} 
                                            className={`text-xs ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                                        />
                                    ))}
                                </div>
                            </div>
                            <h3 className='font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300'>
                                {product.name}
                            </h3>
                            {viewMode === 'list' && (
                                <p className='text-gray-600 text-sm mb-3 line-clamp-2'>{product.description}</p>
                            )}
                            <div className='flex items-center justify-between mb-3'>
                                <div className='flex items-center space-x-2'>
                                    <span className='text-lg font-bold text-gray-900'>${product.price}</span>
                                    <span className='text-sm text-gray-500 line-through'>${product.originalPrice}</span>
                                </div>
                                <span className='text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold'>
                                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                                </span>
                            </div>
                            <button 
                                disabled={!product.inStock}
                                className={`w-full py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                                    product.inStock 
                                        ? 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white hover:shadow-lg hover:scale-105' 
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                            >
                                <FontAwesomeIcon icon={faShoppingCart} className='text-sm' />
                                <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                            </button>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            <div className='mt-12 flex justify-center'>
                <div className='flex items-center space-x-2'>
                    <button className='px-3 py-2 text-gray-500 hover:text-orange-600 transition-colors duration-200'>
                        Previous
                    </button>
                    <button className='px-3 py-2 bg-orange-600 text-white rounded-lg'>1</button>
                    <button className='px-3 py-2 text-gray-500 hover:text-orange-600 transition-colors duration-200'>2</button>
                    <button className='px-3 py-2 text-gray-500 hover:text-orange-600 transition-colors duration-200'>3</button>
                    <button className='px-3 py-2 text-gray-500 hover:text-orange-600 transition-colors duration-200'>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ShopPage
