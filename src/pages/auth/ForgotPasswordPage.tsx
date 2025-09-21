import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faEnvelope, 
    faArrowLeft,
    faCheckCircle,
    faSpinner
} from '@fortawesome/free-solid-svg-icons'

function ForgotPasswordPage() {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isEmailSent, setIsEmailSent] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false)
            setIsEmailSent(true)
        }, 2000)
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
                        {isEmailSent ? 'Check Your Email' : 'Forgot Password?'}
                    </h2>
                    <p className='text-gray-600'>
                        {isEmailSent 
                            ? 'We\'ve sent a password reset link to your email address'
                            : 'Enter your email address and we\'ll send you a link to reset your password'
                        }
                    </p>
                </div>

                {/* Main Form */}
                <div className='bg-white rounded-2xl shadow-lg p-8'>
                    {!isEmailSent ? (
                        <form onSubmit={handleSubmit} className='space-y-6'>
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
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className='appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200'
                                        placeholder='Enter your email address'
                                    />
                                </div>
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
                                        <span>Sending...</span>
                                    </div>
                                ) : (
                                    <span>Send Reset Link</span>
                                )}
                            </button>
                        </form>
                    ) : (
                        <div className='text-center space-y-6'>
                            <div className='mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center'>
                                <FontAwesomeIcon icon={faCheckCircle} className='h-8 w-8 text-green-500' />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold text-gray-900 mb-2'>Email Sent!</h3>
                                <p className='text-gray-600 text-sm'>
                                    We've sent a password reset link to <strong>{email}</strong>
                                </p>
                            </div>
                            <div className='space-y-3'>
                                <p className='text-sm text-gray-500'>
                                    Didn't receive the email? Check your spam folder or try again.
                                </p>
                                <button
                                    onClick={() => setIsEmailSent(false)}
                                    className='w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200'
                                >
                                    Try Another Email
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Back to Login */}
                <div className='text-center'>
                    <Link 
                        to='/login' 
                        className='inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200'
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className='text-sm' />
                        <span>Back to Login</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage
