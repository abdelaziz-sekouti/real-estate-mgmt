import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                    alt="Modern Real Estate"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-medium mb-6">
                        Premier Real Estate Services
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                        Find Your Dream Home <br />
                        <span className="text-blue-400">With Sekouti</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
                        Luxury properties and exclusive listings in Morocco.
                        Experience excellence in real estate management.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                        <a href="#contact" className="group flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl shadow-blue-600/30">
                            Start Your Journey
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="tel:+212612236660" className="flex items-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all font-semibold">
                            <Phone className="mr-2" size={20} />
                            +212 612 236 660
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base text-gray-300">
                        <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-green-400 mr-2" />
                            Sekouti Abdelaziz
                        </div>
                        <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-2" />
                            sekoutiabdelaziz0@gmail.com
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
