import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-10">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Learn Japanese with Us!</h2>
                    <p className="text-sm text-gray-400">Start your journey to mastering the Japanese language with our tutorials, exercises, and more!</p>
                </div>

                <div className="flex justify-center space-x-6 mb-6">
                    {/* Social Media Links */}
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter text-white hover:text-gray-400 text-2xl"></i>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook text-white hover:text-gray-400 text-2xl"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram text-white hover:text-gray-400 text-2xl"></i>
                    </a>
                </div>

                <div className="text-sm">
                    <a href="/terms" className="text-gray-400 hover:text-white mx-4">Terms & Conditions</a>
                    <a href="/privacy" className="text-gray-400 hover:text-white mx-4">Privacy Policy</a>
                    <a href="/contact" className="text-gray-400 hover:text-white mx-4">Contact Us</a>
                </div>

                <div className="mt-6 text-gray-400 text-xs">
                    <p>&copy; 2024 LearnJapanese. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
