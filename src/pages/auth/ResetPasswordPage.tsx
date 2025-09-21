import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faLock, 
    faEye, 
    faEyeSlash,
    faCheckCircle,
    faSpinner,
    faArrowLeft
} from '@fortawesome/free-solid-svg-icons'

function ResetPasswordPage() {
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false)
            setIsSuccess(true)
        }, 2000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-md w-full space-y-8'>
                {/* Header */}
                <div className='text-center'>
                    <div className='mx-auto h-16 w-16 bg-orange-500 rounded-full flex items-center justify-center mb-4'>
                        <span className='text-2xl font-bold text-white'>WB</span>
                    </div>
                    <h2 className='text-3xl font-bold text-gray-900 mb-2'>
                        {isSuccess ? 'Password Reset Successfully' : 'Reset Your Password'}
                    </h2>
                    <p className='text-gray-600'>
                        {isSuccess 
                            ? 'Your password has been successfully reset. You can now sign in with your new password.'
                            : 'Enter your new password below'
                        }
                    </p>
                </div>

                {/* Main Form */}
                <div className='bg-white rounded-2xl shadow-lg p-8'>
                    {!isSuccess ? (
                        <form onSubmit={handleSubmit} className='space-y-6'>
                            {/* New Password Field */}
                            <div>
                                <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-2'>
                                    New Password
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
                                        placeholder='Enter new password'
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

                            {/* Confirm Password Field */}
                            <div>
                                <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700 mb-2'>
                                    Confirm New Password
                                </label>
                                <div className='relative'>
                                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                        <FontAwesomeIcon icon={faLock} className='h-5 w-5 text-gray-400' />
                                    </div>
                                    <input
                                        id='confirmPassword'
                                        name='confirmPassword'
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        required
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className='appearance-none relative block w-full pl-10 pr-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200'
                                        placeholder='Confirm new password'
                                    />
                                    <button
                                        type='button'
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className='absolute inset-y-0 right-0 pr-3 flex items-center'
                                    >
                                        <FontAwesomeIcon 
                                            icon={showConfirmPassword ? faEyeSlash : faEye} 
                                            className='h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200' 
                                        />
                                    </button>
                                </div>
                            </div>

                            {/* Password Requirements */}
                            <div className='bg-gray-50 rounded-lg p-4'>
                                <h4 className='text-sm font-medium text-gray-900 mb-2'>Password Requirements:</h4>
                                <ul className='text-xs text-gray-600 space-y-1'>
                                    <li className='flex items-center space-x-2'>
                                        <div className={`w-1.5 h-1.5 rounded-full ${formData.password.length >= 8 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                                        <span>At least 8 characters</span>
                                    </li>
                                    <li className='flex items-center space-x-2'>
                                        <div className={`w-1.5 h-1.5 rounded-full ${/[A-Z]/.test(formData.password) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                                        <span>One uppercase letter</span>
                                    </li>
                                    <li className='flex items-center space-x-2'>
                                        <div className={`w-1.5 h-1.5 rounded-full ${/[0-9]/.test(formData.password) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                                        <span>One number</span>
                                    </li>
                                    <li className='flex items-center space-x-2'>
                                        <div className={`w-1.5 h-1.5 rounded-full ${formData.password === formData.confirmPassword && formData.password !== '' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                                        <span>Passwords match</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Submit Button */}
                            <button
                                type='submit'
                                disabled={isLoading}
                                className='group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200'
                            >
                                {isLoading ? (
                                    <div className='flex items-center space-x-2'>
                                        <FontAwesomeIcon icon={faSpinner} className='animate-spin h-4 w-4' />
                                        <span>Updating Password...</span>
                                    </div>
                                ) : (
                                    <span>Reset Password</span>
                                )}
                            </button>
                        </form>
                    ) : (
                        <div className='text-center space-y-6'>
                            <div className='mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center'>
                                <FontAwesomeIcon icon={faCheckCircle} className='h-8 w-8 text-green-500' />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold text-gray-900 mb-2'>Success!</h3>
                                <p className='text-gray-600 text-sm'>
                                    Your password has been reset successfully. You can now sign in with your new password.
                                </p>
                            </div>
                            <Link
                                to='/login'
                                className='w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-200'
                            >
                                Continue to Login
                            </Link>
                        </div>
                    )}
                </div>

                {/* Back to Login */}
                {!isSuccess && (
                    <div className='text-center'>
                        <Link 
                            to='/login' 
                            className='inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200'
                        >
                            <FontAwesomeIcon icon={faArrowLeft} className='text-sm' />
                            <span>Back to Login</span>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ResetPasswordPage
