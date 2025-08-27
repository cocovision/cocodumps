'use client'

import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-4">
            <a href="#home" className="flex items-center">
              <Image
                src="/COCO.png"
                alt="Cocodumps Junk Removal"
                width={300}
                height={80}
                className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                priority
              />
            </a>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">
              Services
            </a>
            <a href="#projects" className="text-gray-700 hover:text-green-600 transition-colors">
              Projects
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-green-600 transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:9097474497" 
              className="flex items-center space-x-2 text-green-600 hover:text-green-700"
            >
              <Phone size={16} />
              <span>(909) 747-4497</span>
            </a>
            <a
              href="#contact"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Get Quote
            </a>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-green-600">Home</a>
              <a href="#services" className="text-gray-700 hover:text-green-600">Services</a>
              <a href="#projects" className="text-gray-700 hover:text-green-600">Projects</a>
              <a href="#reviews" className="text-gray-700 hover:text-green-600">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600">Contact</a>
              <div className="flex flex-col space-y-2 pt-2">
                <a href="tel:9097474497" className="flex items-center space-x-2 text-green-600">
                  <Phone size={16} />
                  <span>(909) 747-4497</span>
                </a>
                <a
                  href="#contact"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg text-center hover:bg-green-700"
                >
                  Get Quote
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}