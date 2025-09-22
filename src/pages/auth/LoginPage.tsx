import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import {
    faCircleCheck,
    faSeedling,
    faRecycle,
    faTree,
    faArrowLeft,
    faRedo
} from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../../utils/context/ContextProvider';

function LoginPage() {

    // context
    const { authReloader, setauthReloader } = userContext()
    // State for phone number entry phase
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // State for OTP verification phase
    const [otp, setOtp] = useState(['', '', '', '']);
    const [isVerifying, setIsVerifying] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const [showOtpScreen, setShowOtpScreen] = useState(false);

    const inputRefs = useRef([]);

    // Handle phone number submission
    const handlePhoneSubmit = async (e) => {
        e.preventDefault();

        // Validate Indian phone number (10 digits starting with 6-9)
        const indianPhoneRegex = /^[6-9]\d{9}$/;
        if (!indianPhoneRegex.test(phoneNumber)) {
            alert("Please enter a valid Indian phone number");
            return;
        }

        setIsLoading(true);

        // Simulate API call to send OTP
        setTimeout(() => {
            setIsLoading(false);
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                setShowOtpScreen(true);
                setCountdown(30); // 30 second countdown
            }, 1500);
        }, 2000);
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        // Limit to 10 digits for Indian numbers
        if (value.length <= 10) {
            setPhoneNumber(value);
        }
    };

    // Handle OTP input change
    const handleOtpChange = (index, value) => {
        if (!/^\d*$/.test(value)) return; // Only allow numbers
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus to next input
        if (value && index < 3) {
            inputRefs.current[index + 1].focus();
        }

        // Auto-submit if all fields are filled
        if (newOtp.every(digit => digit !== '') && index === 3) {
            handleOtpSubmit();
        }
    };

    // Handle OTP paste
    const handleOtpPaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('text').slice(0, 4);
        if (/^\d+$/.test(pasteData)) {
            const newOtp = pasteData.split('');
            setOtp(newOtp);

            // Focus on the last input after pasting
            if (newOtp.length === 4) {
                inputRefs.current[3].focus();
            }
        }
    };

    // Handle OTP backspace
    const handleOtpKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            // Move focus to previous input on backspace
            inputRefs.current[index - 1].focus();
        }
    };

    // Handle OTP submission
    const handleOtpSubmit = () => {
        setIsVerifying(true);

        // Simulate OTP verification
        setTimeout(() => {
            setIsVerifying(false);
            const enteredOtp = otp.join('');
            if (enteredOtp === '1234') { // For demo purposes, use 1234 as valid OTP
                setIsVerified(true);
                setauthReloader(!authReloader)
            } else {
                setauthReloader(!authReloader)

                alert("Invalid OTP. Please try again.");
                setOtp(['', '', '', '']);
                if (inputRefs.current[0]) {
                    inputRefs.current[0].focus();
                }
            }
        }, 1500);
    };

    // Handle back button to return to phone entry
    const handleBackToPhone = () => {
        setShowOtpScreen(false);
        setOtp(['', '', '', '']);
        setIsVerified(false);
    };

    // Handle resend OTP
    const handleResendOtp = () => {
        setCountdown(30);
        setOtp(['', '', '', '']);
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }

        // Simulate resending OTP
        setTimeout(() => {
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 2000);
        }, 1000);
    };

    // Countdown timer effect
    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    useEffect(() => {
        if (showOtpScreen && inputRefs.current[0]) {
            setTimeout(() => inputRefs.current[0].focus(), 100);
        }
    }, [showOtpScreen]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-6">
                {/* Header */}
                <div className="text-center">
                    <div className="mx-auto h-20 w-20 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-amber-200">
                        <div className="h-16 w-16 bg-amber-500 rounded-xl flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">WB</span>
                        </div>
                    </div>
                    <h1 className="text-3xl font-serif font-bold text-amber-900 mb-2">
                        WishBox
                    </h1>
                    <p className="text-amber-700 font-medium">
                        Handmade Paper Creations
                    </p>
                    <div className="mt-2 bg-amber-100 inline-flex items-center px-3 py-1 rounded-full">
                        <FontAwesomeIcon icon={faRecycle} className="text-amber-600 mr-1 text-xs" />
                        <span className="text-xs text-amber-700">Eco-Friendly Products</span>
                    </div>
                </div>

                {/* Success Message */}
                {showSuccess && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center space-x-3 animate-pulse">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 text-lg" />
                        <span className="text-green-700 font-medium text-sm">
                            {showOtpScreen ? "OTP resent successfully!" : "Verification code sent to your WhatsApp!"}
                        </span>
                    </div>
                )}

                {/* Main Content */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-amber-100">
                    {!showOtpScreen ? (
                        /* Phone Entry Screen */
                        <>
                            <h2 className="text-xl font-serif font-bold text-amber-900 mb-2 text-center">
                                Welcome to WishBox
                            </h2>
                            <p className="text-amber-600 text-center text-sm mb-6">
                                Enter your WhatsApp number to explore our paper creations
                            </p>

                            {/* WhatsApp Form */}
                            <form onSubmit={handlePhoneSubmit} className="space-y-4">
                                {/* WhatsApp Number Input */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-amber-800 mb-1">
                                        WhatsApp Number
                                    </label>
                                    <div className="flex rounded-lg shadow-sm">
                                        <div className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-amber-300 bg-amber-50 text-amber-800 text-sm">
                                            +91
                                        </div>
                                        <div className="relative flex-1">
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                required
                                                value={phoneNumber}
                                                onChange={handlePhoneChange}
                                                className="appearance-none relative block w-full pl-3 pr-3 py-3 border border-amber-300 placeholder-amber-400 text-amber-900 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                                                placeholder="10-digit number"
                                                maxLength="10"
                                            />
                                        </div>
                                    </div>
                                    <p className="mt-2 text-xs text-amber-500">
                                        We'll send a 4-digit verification code via WhatsApp
                                    </p>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading || phoneNumber.length !== 10}
                                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center space-x-2">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                            <span className="text-sm">Sending code...</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center space-x-2">
                                            <FontAwesomeIcon icon={faWhatsapp} className="text-base" />
                                            <span className="text-sm">Continue with WhatsApp</span>
                                        </div>
                                    )}
                                </button>
                            </form>
                        </>
                    ) : (
                        /* OTP Verification Screen */
                        <>
                            <button
                                onClick={handleBackToPhone}
                                className="flex items-center text-amber-600 hover:text-amber-700 mb-4 text-sm"
                            >
                                <FontAwesomeIcon icon={faArrowLeft} className="mr-1" />
                                Back
                            </button>

                            <h2 className="text-xl font-serif font-bold text-amber-900 mb-2 text-center">
                                Verify Your Number
                            </h2>
                            <p className="text-amber-600 text-center text-sm mb-2">
                                Enter the 4-digit code sent to
                            </p>
                            <p className="text-amber-800 font-medium text-center mb-6">
                                +91 {phoneNumber}
                            </p>

                            {isVerified ? (
                                <div className="text-center py-8">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                                        <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 text-3xl" />
                                    </div>
                                    <h3 className="text-lg font-medium text-amber-900 mb-2">Verification Successful!</h3>
                                    <p className="text-amber-600">You're being redirected to your account...</p>
                                </div>
                            ) : (
                                <>
                                    {/* OTP Input Fields */}
                                    <div className="flex justify-center space-x-3 mb-6" onPaste={handleOtpPaste}>
                                        {[0, 1, 2, 3].map((index) => (
                                            <input
                                                key={index}
                                                ref={(el) => (inputRefs.current[index] = el)}
                                                type="text"
                                                inputMode="numeric"
                                                maxLength="1"
                                                value={otp[index]}
                                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                                onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                                className="w-14 h-14 text-center text-2xl font-bold border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                                            />
                                        ))}
                                    </div>

                                    {/* Verify Button */}
                                    <button
                                        onClick={handleOtpSubmit}
                                        disabled={isVerifying || otp.some(digit => digit === '')}
                                        className="w-full py-3 px-4 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 disabled:opacity-70 disabled:cursor-not-allowed transition-colors duration-200 mb-4 shadow-sm hover:shadow-md"
                                    >
                                        {isVerifying ? (
                                            <div className="flex items-center justify-center space-x-2">
                                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                                <span>Verifying...</span>
                                            </div>
                                        ) : (
                                            'Verify OTP'
                                        )}
                                    </button>

                                    {/* Resend OTP */}
                                    <div className="text-center">
                                        {countdown > 0 ? (
                                            <p className="text-amber-600 text-sm">
                                                Request new code in {countdown} seconds
                                            </p>
                                        ) : (
                                            <button
                                                onClick={handleResendOtp}
                                                className="text-amber-600 hover:text-amber-700 text-sm inline-flex items-center focus:outline-none focus:ring-1 focus:ring-amber-500 rounded-md px-2 py-1"
                                            >
                                                <FontAwesomeIcon icon={faRedo} className="mr-1" />
                                                Resend OTP
                                            </button>
                                        )}
                                    </div>
                                </>
                            )}
                        </>
                    )}

                    {/* Benefits Section - Only show on phone entry screen */}
                    {!showOtpScreen && (
                        <div className="mt-6 pt-5 border-t border-amber-100">
                            <h3 className="text-xs font-semibold text-amber-900 mb-3 text-center">WHY CHOOSE WISHBOX?</h3>
                            <div className="grid grid-cols-3 gap-3 text-center">
                                <div className="p-2 bg-amber-50 rounded-lg">
                                    <FontAwesomeIcon icon={faRecycle} className="text-amber-600 text-lg mb-1" />
                                    <p className="text-xs text-amber-700">Eco-Friendly</p>
                                </div>
                                <div className="p-2 bg-amber-50 rounded-lg">
                                    <FontAwesomeIcon icon={faSeedling} className="text-amber-600 text-lg mb-1" />
                                    <p className="text-xs text-amber-700">Sustainable</p>
                                </div>
                                <div className="p-2 bg-amber-50 rounded-lg">
                                    <FontAwesomeIcon icon={faTree} className="text-amber-600 text-lg mb-1" />
                                    <p className="text-xs text-amber-700">Tree-Free</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Paper Texture Background Element */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-amber-200"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-3 bg-amber-50 text-xs text-amber-500">
                            Handmade with care
                        </span>
                    </div>
                </div>

                {/* Terms and Privacy */}
                <div className="text-center text-xs text-amber-600">
                    By continuing, you agree to our{' '}
                    <a href="/terms" className="text-amber-700 hover:text-amber-800 font-medium">Terms</a>
                    {' '}and{' '}
                    <a href="/privacy" className="text-amber-700 hover:text-amber-800 font-medium">Privacy</a>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;