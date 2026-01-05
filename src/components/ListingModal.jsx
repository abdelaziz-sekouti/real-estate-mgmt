import { motion, AnimatePresence } from 'framer-motion';
import { X, Bed, Bath, Building2 } from 'lucide-react';

export default function ListingModal({ listing, isOpen, onClose }) {
    if (!isOpen || !listing) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row"
                >
                    {/* Image Side */}
                    <div className="md:w-1/2 h-64 md:h-auto relative">
                        <img
                            src={listing.image}
                            alt={listing.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1.5 rounded-full font-bold shadow-lg">
                            {listing.price}
                        </div>
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 md:hidden bg-white/90 p-2 rounded-full shadow-lg text-gray-800"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Content Side */}
                    <div className="md:w-1/2 p-8 overflow-y-auto">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">{listing.title}</h2>
                                <p className="text-gray-500 font-medium">{listing.location}</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="hidden md:block text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 p-2 rounded-full"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-gray-100">
                            <div className="text-center">
                                <div className="flex items-center justify-center text-blue-600 mb-2">
                                    <Bed className="w-6 h-6" />
                                </div>
                                <div className="font-bold text-gray-900">{listing.beds}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Beds</div>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center text-blue-600 mb-2">
                                    <Bath className="w-6 h-6" />
                                </div>
                                <div className="font-bold text-gray-900">{listing.baths}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Baths</div>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center text-blue-600 mb-2">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <div className="font-bold text-gray-900">{listing.sqft}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Sqft</div>
                            </div>
                        </div>

                        <h3 className="font-bold text-gray-900 mb-3">Description</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Experience luxury living at its finest. This stunning property features modern amenities,
                            breathtaking views, and premium finishes throughout. Perfect for those seeking a
                            sophisticated lifestyle in a prime location.
                        </p>

                        <h3 className="font-bold text-gray-900 mb-3">Features</h3>
                        <ul className="space-y-2 mb-8 columns-2">
                            {['Swimming Pool', 'Garden', 'Garage', 'Smart Home', 'Security', 'Terrace'].map((feature, i) => (
                                <li key={i} className="flex items-center text-gray-600 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-4">
                            <button className="flex-1 bg-blue-600 text-white py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25">
                                Schedule Viewing
                            </button>
                            <button className="flex-1 bg-white border-2 border-gray-100 text-gray-900 py-3.5 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                                Contact Agent
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
