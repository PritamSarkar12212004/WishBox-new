import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faUser, 
    faEnvelope, 
    faPhone, 
    faMapMarkerAlt,
    faEdit,
    faSave,
    faTimes,
    faHeart,
    faShoppingCart,
    faGift,
    faCog,
    faBell,
    faShield,
    faCreditCard,
    faSignOutAlt,
    faCamera
} from '@fortawesome/free-solid-svg-icons'

function ProfilePage() {
    const [activeTab, setActiveTab] = useState('profile')
    const [isEditing, setIsEditing] = useState(false)
    const [profileData, setProfileData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        address: '123 Main Street, City, State 12345',
        bio: 'Paper art enthusiast and collector of beautiful decorations.'
    })

    const tabs = [
        { id: 'profile', name: 'Profile', icon: faUser },
        { id: 'orders', name: 'Orders', icon: faShoppingCart },
        { id: 'wishlist', name: 'Wishlist', icon: faHeart },
        { id: 'addresses', name: 'Addresses', icon: faMapMarkerAlt },
        { id: 'settings', name: 'Settings', icon: faCog }
    ]

    const orders = [
        {
            id: 'ORD-001',
            date: '2024-01-15',
            status: 'Delivered',
            total: 89.97,
            items: 3
        },
        {
            id: 'ORD-002',
            date: '2024-01-10',
            status: 'Shipped',
            total: 45.99,
            items: 2
        },
        {
            id: 'ORD-003',
            date: '2024-01-05',
            status: 'Processing',
            total: 67.50,
            items: 4
        }
    ]

    const wishlistItems = [
        {
            id: 1,
            name: 'Origami Crane Set',
            price: 24.99,
            image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&h=200&fit=crop',
            addedDate: '2024-01-12'
        },
        {
            id: 2,
            name: 'Paper Flower Bouquet',
            price: 39.99,
            image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=200&h=200&fit=crop',
            addedDate: '2024-01-10'
        }
    ]

    const handleSave = () => {
        setIsEditing(false)
        // Here you would typically save the data to your backend
    }

    const renderProfileTab = () => (
        <div className='space-y-6'>
         
            {/* Profile Information */}
            <div className='bg-white rounded-2xl shadow-lg p-6'>
                <div className='flex items-center justify-between mb-6'>
                    <h2 className='text-xl font-semibold text-gray-900'>Personal Information</h2>
                    {!isEditing ? (
                        <button 
                            onClick={() => setIsEditing(true)}
                            className='flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors duration-200'
                        >
                            <FontAwesomeIcon icon={faEdit} />
                            <span>Edit</span>
                        </button>
                    ) : (
                        <div className='flex space-x-2'>
                            <button 
                                onClick={handleSave}
                                className='flex items-center space-x-2 bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors duration-200'
                            >
                                <FontAwesomeIcon icon={faSave} />
                                <span>Save</span>
                            </button>
                            <button 
                                onClick={() => setIsEditing(false)}
                                className='flex items-center space-x-2 bg-gray-600 text-white px-3 py-1 rounded-lg hover:bg-gray-700 transition-colors duration-200'
                            >
                                <FontAwesomeIcon icon={faTimes} />
                                <span>Cancel</span>
                            </button>
                        </div>
                    )}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Full Name</label>
                        {isEditing ? (
                            <input
                                type='text'
                                value={profileData.name}
                                onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                            />
                        ) : (
                            <p className='text-gray-900 font-medium'>{profileData.name}</p>
                        )}
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
                        {isEditing ? (
                            <input
                                type='email'
                                value={profileData.email}
                                onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                            />
                        ) : (
                            <p className='text-gray-900 font-medium'>{profileData.email}</p>
                        )}
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Phone</label>
                        {isEditing ? (
                            <input
                                type='tel'
                                value={profileData.phone}
                                onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                            />
                        ) : (
                            <p className='text-gray-900 font-medium'>{profileData.phone}</p>
                        )}
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Address</label>
                        {isEditing ? (
                            <textarea
                                value={profileData.address}
                                onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                                rows={3}
                                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none'
                            />
                        ) : (
                            <p className='text-gray-900 font-medium'>{profileData.address}</p>
                        )}
                    </div>
                </div>

                <div className='mt-6'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Bio</label>
                    {isEditing ? (
                        <textarea
                            value={profileData.bio}
                            onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                            rows={3}
                            className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none'
                        />
                    ) : (
                        <p className='text-gray-900'>{profileData.bio}</p>
                    )}
                </div>
            </div>
        </div>
    )

    const renderOrdersTab = () => (
        <div className='space-y-6'>
            <div className='bg-white rounded-2xl shadow-lg p-6'>
                <h2 className='text-xl font-semibold text-gray-900 mb-6'>Order History</h2>
                <div className='space-y-4'>
                    {orders.map((order) => (
                        <div key={order.id} className='border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h3 className='font-semibold text-gray-900'>Order #{order.id}</h3>
                                    <p className='text-gray-600 text-sm'>Placed on {order.date}</p>
                                    <p className='text-gray-600 text-sm'>{order.items} items</p>
                                </div>
                                <div className='text-right'>
                                    <p className='font-semibold text-gray-900'>${order.total}</p>
                                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                        'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {order.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

    const renderWishlistTab = () => (
        <div className='space-y-6'>
            <div className='bg-white rounded-2xl shadow-lg p-6'>
                <h2 className='text-xl font-semibold text-gray-900 mb-6'>My Wishlist</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {wishlistItems.map((item) => (
                        <div key={item.id} className='border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200'>
                            <img 
                                src={item.image} 
                                alt={item.name}
                                className='w-full h-48 object-cover'
                            />
                            <div className='p-4'>
                                <h3 className='font-semibold text-gray-900 mb-2'>{item.name}</h3>
                                <p className='text-purple-600 font-semibold mb-2'>${item.price}</p>
                                <p className='text-gray-600 text-sm mb-3'>Added on {item.addedDate}</p>
                                <div className='flex space-x-2'>
                                    <button className='flex-1 bg-purple-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors duration-200'>
                                        Add to Cart
                                    </button>
                                    <button className='bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition-colors duration-200'>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

    return (
        <div className='flex-1'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
                {/* Sidebar */}
                <div className='lg:col-span-1'>
                    <div className='bg-white rounded-2xl shadow-lg p-6 sticky top-24'>
                        <nav className='space-y-2'>
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                                        activeTab === tab.id
                                            ? 'bg-purple-100 text-purple-700'
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    <FontAwesomeIcon icon={tab.icon} className='text-sm' />
                                    <span className='font-medium'>{tab.name}</span>
                                </button>
                            ))}
                        </nav>

                        <div className='mt-8 pt-6 border-t border-gray-200'>
                            <button className='w-full flex items-center space-x-3 p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200'>
                                <FontAwesomeIcon icon={faSignOutAlt} className='text-sm' />
                                <span className='font-medium'>Sign Out</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className='lg:col-span-3'>
                    {activeTab === 'profile' && renderProfileTab()}
                    {activeTab === 'orders' && renderOrdersTab()}
                    {activeTab === 'wishlist' && renderWishlistTab()}
                    {activeTab === 'addresses' && (
                        <div className='bg-white rounded-2xl shadow-lg p-6'>
                            <h2 className='text-xl font-semibold text-gray-900 mb-6'>Addresses</h2>
                            <p className='text-gray-600'>Address management coming soon...</p>
                        </div>
                    )}
                    {activeTab === 'settings' && (
                        <div className='bg-white rounded-2xl shadow-lg p-6'>
                            <h2 className='text-xl font-semibold text-gray-900 mb-6'>Settings</h2>
                            <p className='text-gray-600'>Settings coming soon...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
