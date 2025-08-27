import { Truck, Clock, Shield, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-32 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              Professional Junk Removal in 
              <span className="text-green-600"> Southern California</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Fast, reliable, and eco-friendly junk removal services. We handle everything from household cleanouts to commercial waste removal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors text-center"
              >
                Get Free Quote
              </a>
              <a
                href="tel:9097474497"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors text-center"
              >
                Call (909) 747-4497
              </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-md mb-2">
                  <Truck className="w-8 h-8 text-green-600 mx-auto" />
                </div>
                <p className="text-sm font-medium">Same-Day Service</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-md mb-2">
                  <Clock className="w-8 h-8 text-green-600 mx-auto" />
                </div>
                <p className="text-sm font-medium">Fast & Efficient</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-md mb-2">
                  <Shield className="w-8 h-8 text-green-600 mx-auto" />
                </div>
                <p className="text-sm font-medium">Fully Insured</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-md mb-2">
                  <Star className="w-8 h-8 text-green-600 mx-auto" />
                </div>
                <p className="text-sm font-medium">5-Star Rated</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-video bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Truck className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-600">Professional Junk Removal Team</p>
                  <p className="text-sm text-gray-500 mt-2">Serving Southern California</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}