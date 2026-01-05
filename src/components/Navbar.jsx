import { Phone, Mail, Menu } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                            SekoutiRealEstate
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                        <a href="#listings" className="text-gray-700 hover:text-blue-600 transition-colors">Listings</a>
                        <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
                        <a href="#contact" className="px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 font-medium">
                            Contact Me
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2">
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <a href="#home" className="block py-2 text-gray-700">Home</a>
                            <a href="#listings" className="block py-2 text-gray-700">Listings</a>
                            <a href="#about" className="block py-2 text-gray-700">About</a>
                            <div className="pt-4 space-y-3">
                                <div className="flex items-center text-gray-600">
                                    <Phone size={18} className="mr-2" />
                                    <span>+212 612 236 660</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <Mail size={18} className="mr-2" />
                                    <span>sekoutiabdelaziz0@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
