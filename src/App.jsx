import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ListingModal from './components/ListingModal';

const LISTINGS = [
  {
    id: 1,
    title: "Palms Luxury Villa",
    price: "$3,500,000",
    location: "Marrakech, Palm Grove",
    beds: 5,
    baths: 6,
    sqft: "4,200",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Modern City Apartment",
    price: "$850,000",
    location: "Casablanca, Maarif",
    beds: 3,
    baths: 2,
    sqft: "1,800",
    image: "https://images.unsplash.com/photo-1600596542815-2495db98dada?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Seaside Residence",
    price: "$2,100,000",
    location: "Tangier, Malabata",
    beds: 4,
    baths: 3,
    sqft: "3,000",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80"
  }
];

function App() {
  const [selectedListing, setSelectedListing] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />

      {/* Featured Section */}
      <section id="listings" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our hand-picked selection of properties for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LISTINGS.map((listing) => (
              <div key={listing.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-blue-900">
                    {listing.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{listing.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{listing.location}</p>
                  <div className="flex items-center text-gray-600 text-sm mb-4 justify-between">
                    <span>{listing.beds} Beds</span>
                    <span>•</span>
                    <span>{listing.baths} Baths</span>
                    <span>•</span>
                    <span>{listing.sqft} sqft</span>
                  </div>
                  <button
                    onClick={() => setSelectedListing(listing)}
                    className="w-full py-2.5 bg-blue-50 text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                  alt="Sekouti Real Estate Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/10"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Your Trusted Partner in Moroccan Real Estate
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                With over a decade of experience, **Sekouti Real Estate** has been connecting clients with their perfect properties across Morocco.
                Whether you are looking for a luxury villa in Marrakech, a modern apartment in Casablanca, or a seaside retreat in Tangier, we are here to make it happen.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Exclusive Property Portfolio",
                  "Personalized Client Service",
                  "Legal & Financial Guidance",
                  "After-Sales Support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-2xl font-bold text-white mb-4">SekoutiRealEstate</h4>
            <p className="text-gray-400">
              Providing excellent real estate services across Morocco.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li>Sekouti Abdelaziz</li>
              <li>+212 612 236 660</li>
              <li>sekoutiabdelaziz0@gmail.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Office</h4>
            <p>Morocco</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Sekouti Real Estate. All rights reserved.
        </div>
      </footer>

      <ListingModal
        listing={selectedListing}
        isOpen={!!selectedListing}
        onClose={() => setSelectedListing(null)}
      />
    </div>
  );
}

export default App;
