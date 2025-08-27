import { Phone, Mail, MapPin, Recycle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Recycle className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold">Cocodumps</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Professional junk removal services in Southern California. Fast, reliable, and eco-friendly solutions for all your cleanout needs.
            </p>
            <div className="flex space-x-4">
              <div className="bg-green-600 text-white p-2 rounded">
                <Phone size={16} />
              </div>
              <div className="bg-green-600 text-white p-2 rounded">
                <Mail size={16} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#services" className="hover:text-green-400 transition-colors">
                  Residential Cleanouts
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400 transition-colors">
                  Commercial Removal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400 transition-colors">
                  Construction Debris
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400 transition-colors">
                  Estate Cleanouts
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400 transition-colors">
                  Appliance Removal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#home" className="hover:text-green-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-green-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-green-400 transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-green-400" />
                <a href="tel:9097474497" className="hover:text-green-400 transition-colors">
                  (909) 747-4497
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-green-400" />
                <a href="mailto:jesse@cocovision.ai" className="hover:text-green-400 transition-colors">
                  jesse@cocovision.ai
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-green-400" />
                <span>Southern California</span>
              </div>
            </div>

            <div className="mt-4">
              <h5 className="font-medium mb-2">Business Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Mon-Sat: 8:00 AM - 6:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-gray-300 text-sm">
              © 2024 Cocodumps. All rights reserved. Licensed, bonded, and insured junk removal services.
            </div>
            <div className="text-gray-300 text-sm md:text-right">
              <span>Eco-friendly disposal • Same-day service available</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}