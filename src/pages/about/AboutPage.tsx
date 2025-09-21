import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHeart, 
    faLeaf, 
    faGem,
    faUsers,
    faAward,
    faHandHolding,
    faPaperPlane,
    faPalette,
    faGlobe
} from '@fortawesome/free-solid-svg-icons'

function AboutPage() {
    const values = [
        {
            icon: faHeart,
            title: "Passion for Craft",
            description: "Every piece we create is made with love and attention to detail, ensuring the highest quality for our customers."
        },
        {
            icon: faLeaf,
            title: "Eco-Friendly",
            description: "We're committed to sustainability, using recycled and biodegradable materials whenever possible."
        },
        {
            icon: faGem,
            title: "Premium Quality",
            description: "Only the finest materials and techniques go into creating our beautiful paper decorations."
        },
        {
            icon: faUsers,
            title: "Community Focus",
            description: "We support local artisans and believe in building a community around the art of paper crafting."
        }
    ]

    const team = [
        {
            name: "Sarah Johnson",
            role: "Founder & Lead Designer",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
            bio: "Sarah started WishBox with a vision to bring beautiful paper art into every home."
        },
        {
            name: "Michael Chen",
            role: "Master Origami Artist",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
            bio: "Michael has been practicing origami for over 15 years and creates our most intricate pieces."
        },
        {
            name: "Emma Rodriguez",
            role: "Paper Flower Specialist",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
            bio: "Emma's floral arrangements have been featured in weddings and events worldwide."
        }
    ]

    const milestones = [
        {
            year: "2020",
            title: "Founded",
            description: "WishBox was born from a passion for paper art"
        },
        {
            year: "2021",
            title: "1000+ Happy Customers",
            description: "Reached our first major milestone"
        },
        {
            year: "2022",
            title: "Eco-Friendly Initiative",
            description: "Launched our sustainability program"
        },
        {
            year: "2023",
            title: "International Shipping",
            description: "Expanded to serve customers worldwide"
        },
        {
            year: "2024",
            title: "10,000+ Orders",
            description: "Celebrating our continued growth"
        }
    ]

    return (
        <div className='flex-1'>
            {/* Hero Section */}
            <div className='mb-12'>
                <div className='bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center'>
                    <div className='max-w-4xl mx-auto'>
                        <FontAwesomeIcon icon={faHeart} className='text-5xl mb-6' />
                        <h1 className='text-4xl md:text-6xl font-bold mb-6'>About WishBox</h1>
                        <p className='text-purple-100 text-lg md:text-xl leading-relaxed'>
                            We're passionate about creating beautiful paper decorations that bring joy and elegance 
                            to your space. From intricate origami to stunning paper flowers, every piece is 
                            handcrafted with love and attention to detail.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Story */}
            <div className='mb-12'>
                <div className='bg-white rounded-2xl shadow-lg p-8 md:p-12'>
                    <div className='max-w-4xl mx-auto text-center'>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Our Story</h2>
                        <div className='prose prose-lg text-gray-600 max-w-none'>
                            <p className='mb-6'>
                                WishBox began as a small studio in 2020, founded by Sarah Johnson with a simple mission: 
                                to create beautiful, eco-friendly paper decorations that could transform any space into 
                                something magical.
                            </p>
                            <p className='mb-6'>
                                What started as a hobby quickly grew into a passion, and then into a business that now 
                                serves thousands of customers worldwide. We believe that paper art has the power to 
                                bring people together, create lasting memories, and add beauty to everyday life.
                            </p>
                            <p>
                                Today, our team of skilled artisans continues to push the boundaries of what's possible 
                                with paper, creating unique pieces that are both beautiful and sustainable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Values */}
            <div className='mb-12'>
                <div className='text-center mb-8'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Our Values</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        These core principles guide everything we do at WishBox
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {values.map((value, index) => (
                        <div key={index} className='bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300'>
                            <div className='bg-gradient-to-r from-purple-100 to-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                                <FontAwesomeIcon icon={value.icon} className='text-purple-600 text-2xl' />
                            </div>
                            <h3 className='text-xl font-semibold text-gray-900 mb-3'>{value.title}</h3>
                            <p className='text-gray-600'>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Team */}
            <div className='mb-12'>
                <div className='text-center mb-8'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Meet Our Team</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        The talented artists behind every beautiful piece
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {team.map((member, index) => (
                        <div key={index} className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                            <img 
                                src={member.image} 
                                alt={member.name}
                                className='w-full h-64 object-cover'
                            />
                            <div className='p-6'>
                                <h3 className='text-xl font-semibold text-gray-900 mb-1'>{member.name}</h3>
                                <p className='text-purple-600 font-medium mb-3'>{member.role}</p>
                                <p className='text-gray-600'>{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Journey */}
            <div className='mb-12'>
                <div className='bg-white rounded-2xl shadow-lg p-8 md:p-12'>
                    <div className='text-center mb-8'>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Our Journey</h2>
                        <p className='text-gray-600 max-w-2xl mx-auto'>
                            Key milestones in our growth and development
                        </p>
                    </div>
                    <div className='relative'>
                        <div className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-200 to-pink-200'></div>
                        <div className='space-y-8'>
                            {milestones.map((milestone, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <div className='w-1/2 px-8'>
                                        <div className={`bg-white p-6 rounded-2xl shadow-lg border-2 ${index % 2 === 0 ? 'border-purple-200' : 'border-pink-200'}`}>
                                            <div className={`text-2xl font-bold mb-2 ${index % 2 === 0 ? 'text-purple-600' : 'text-pink-600'}`}>
                                                {milestone.year}
                                            </div>
                                            <h3 className='text-xl font-semibold text-gray-900 mb-2'>{milestone.title}</h3>
                                            <p className='text-gray-600'>{milestone.description}</p>
                                        </div>
                                    </div>
                                    <div className='w-16 h-16 bg-white rounded-full border-4 border-purple-200 flex items-center justify-center z-10'>
                                        <FontAwesomeIcon icon={faAward} className='text-purple-600 text-xl' />
                                    </div>
                                    <div className='w-1/2'></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className='bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center'>
                <div className='max-w-3xl mx-auto'>
                    <FontAwesomeIcon icon={faHandHolding} className='text-4xl mb-4' />
                    <h2 className='text-3xl md:text-4xl font-bold mb-4'>Join Our Community</h2>
                    <p className='text-purple-100 text-lg mb-6'>
                        Be part of our growing community of paper art lovers and get inspired by beautiful creations.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <button className='bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300'>
                            Shop Now
                        </button>
                        <button className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300'>
                            Follow Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
