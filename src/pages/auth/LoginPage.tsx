import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEye,
    faEyeSlash,
    faUser,
    faLock,
    faEnvelope,
    faArrowRight,

    faCheckCircle
} from '@fortawesome/free-solid-svg-icons'

function LoginPage() {
    const [isLogin, setIsLogin] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false)
            setShowSuccess(true)
            setTimeout(() => setShowSuccess(false), 3000)
        }, 2000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // const socialLogins = [
    //     { name: 'Google', icon: faGoogle, color: 'bg-red-500 hover:bg-red-600' },
    //     { name: 'Facebook', icon: faFacebook, color: 'bg-blue-600 hover:bg-blue-700' },
    //     { name: 'Apple', icon: faApple, color: 'bg-gray-800 hover:bg-gray-900' }
    // ]

    return (
        <div className='min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-md w-full space-y-8'>
                {/* Header */}
                <div className='text-center'>
                    <div className='mx-auto h-16 w-16 bg-orange-500 rounded-full flex items-center justify-center mb-4'>
                        <span className='text-2xl font-bold text-white'>WB</span>
                    </div>
                    <h2 className='text-3xl font-bold text-gray-900 mb-2'>
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h2>
                    <p className='text-gray-600'>
                        {isLogin
                            ? 'Sign in to your account to continue shopping'
                            : 'Join WishBox to discover beautiful paper decorations'
                        }
                    </p>
                </div>

                {/* Success Message */}
                {showSuccess && (
                    <div className='bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3'>
                        <FontAwesomeIcon icon={faCheckCircle} className='text-green-500' />
                        <span className='text-green-700 font-medium'>
                            {isLogin ? 'Login successful!' : 'Account created successfully!'}
                        </span>
                    </div>
                )}

                {/* Main Form */}
                <div className='bg-white rounded-2xl shadow-lg p-8'>
                    {/* Social Login Buttons */}
                    {/* <div className='space-y-3 mb-6'>
                    <p className='text-center text-sm text-gray-500 mb-4'>Or continue with</p>
                    <div className='grid grid-cols-3 gap-3'>
                        {socialLogins.map((social, index) => (
                            <button
                                key={index}
                                className={`${social.color} text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center`}
                            >
                                <FontAwesomeIcon icon={social.icon} className='text-lg' />
                            </button>
                        ))}
                    </div>
                </div> */}

                    {/* Divider */}
                    <div className='relative mb-6'>
                        <div className='absolute inset-0 flex items-center'>
                            <div className='w-full border-t border-gray-300' />
                        </div>
                        <div className='relative flex justify-center text-sm'>
                            <span className='px-2 bg-white text-gray-500'>Or use email</span>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        {/* Name Fields for Registration */}
                        {!isLogin && (
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <label htmlFor='firstName' className='block text-sm font-medium text-gray-700 mb-2'>
                                        First Name
                                    </label>
                                    <div className='relative'>
                                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                            <FontAwesomeIcon icon={faUser} className='h-5 w-5 text-gray-400' />
                                        </div>
                                        <input
                                            id='firstName'
                                            name='firstName'
                                            type='text'
                                            required={!isLogin}
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className='appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200'
                                            placeholder='First name'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor='lastName' className='block text-sm font-medium text-gray-700 mb-2'>
                                        Last Name
                                    </label>
                                    <div className='relative'>
                                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                            <FontAwesomeIcon icon={faUser} className='h-5 w-5 text-gray-400' />
                                        </div>
                                        <input
                                            id='lastName'
                                            name='lastName'
                                            type='text'
                                            required={!isLogin}
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className='appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200'
                                            placeholder='Last name'
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Email Field */}
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                                Email Address
                            </label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <FontAwesomeIcon icon={faEnvelope} className='h-5 w-5 text-gray-400' />
                                </div>
                                <input
                                    id='email'
                                    name='email'
                                    type='email'
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200'
                                    placeholder='Enter your email'
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-2'>
                                Password
                            </label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <FontAwesomeIcon icon={faLock} className='h-5 w-5 text-gray-400' />
                                </div>
                                <input
                                    id='password'
                                    name='password'
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className='appearance-none relative block w-full pl-10 pr-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200'
                                    placeholder='Enter your password'
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='absolute inset-y-0 right-0 pr-3 flex items-center'
                                >
                                    <FontAwesomeIcon
                                        icon={showPassword ? faEyeSlash : faEye}
                                        className='h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200'
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password Field for Registration */}
                        {!isLogin && (
                            <div>
                                <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700 mb-2'>
                                    Confirm Password
                                </label>
                                <div className='relative'>
                                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                        <FontAwesomeIcon icon={faLock} className='h-5 w-5 text-gray-400' />
                                    </div>
                                    <input
                                        id='confirmPassword'
                                        name='confirmPassword'
                                        type='password'
                                        required={!isLogin}
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className='appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200'
                                        placeholder='Confirm your password'
                                    />
                                </div>
                            </div>
                        )}

                        {/* Remember Me & Forgot Password */}
                        {isLogin && (
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <input
                                        id='remember-me'
                                        name='remember-me'
                                        type='checkbox'
                                        className='h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded'
                                    />
                                    <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>
                                        Remember me
                                    </label>
                                </div>
                                <div className='text-sm'>
                                    <Link to='/forgot-password' className='text-orange-600 hover:text-orange-500 font-medium transition-colors duration-200'>
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type='submit'
                            disabled={isLoading}
                            className='group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200'
                        >
                            {isLoading ? (
                                <div className='flex items-center space-x-2'>
                                    <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white'></div>
                                    <span>Processing...</span>
                                </div>
                            ) : (
                                <div className='flex items-center space-x-2'>
                                    <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                                    <FontAwesomeIcon icon={faArrowRight} className='text-sm group-hover:translate-x-1 transition-transform duration-200' />
                                </div>
                            )}
                        </button>
                    </form>

                    {/* Switch Mode */}
                    <div className='mt-6 text-center'>
                        <p className='text-sm text-gray-600'>
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className='ml-2 text-orange-600 hover:text-orange-500 font-medium transition-colors duration-200'
                            >
                                {isLogin ? 'Sign up' : 'Sign in'}
                            </button>
                        </p>
                    </div>
                </div>

                {/* Terms and Privacy */}
                <div className='text-center text-xs text-gray-500'>
                    By continuing, you agree to our{' '}
                    <Link to='/terms' className='text-orange-600 hover:text-orange-500'>Terms of Service</Link>
                    {' '}and{' '}
                    <Link to='/privacy' className='text-orange-600 hover:text-orange-500'>Privacy Policy</Link>
                </div>

                <div className='text-center'>
                    <Link
                        to='/'
                        className='inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200'
                    >
                        <span>←</span>
                        <span>Back to WishBox</span>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default LoginPage
