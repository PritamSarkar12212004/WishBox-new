import React from 'react'

function HomeWraper({ children }: any) {
    return (
        <div className='flex-1 min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30'>
            <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8'>
                {children}
            </div>
        </div>
    )
}

export default HomeWraper