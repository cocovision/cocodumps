import { Home, Building, Hammer, Package, Recycle, Trash2 } from 'lucide-react'

const services = [
  {
    title: 'Residential Cleanouts',
    description: 'Complete home cleanouts, basement and attic clearing, garage organization, and decluttering services.',
    icon: Home,
    features: ['Furniture Removal', 'Appliance Disposal', 'Basement Cleanouts', 'Garage Clearing']
  },
  {
    title: 'Commercial Services',
    description: 'Office cleanouts, retail space clearing, warehouse cleanup, and commercial property maintenance.',
    icon: Building,
    features: ['Office Furniture', 'Equipment Removal', 'Retail Cleanouts', 'Warehouse Clearing']
  },
  {
    title: 'Construction Debris',
    description: 'Post-construction cleanup, renovation debris removal, and building material disposal.',
    icon: Hammer,
    features: ['Drywall Removal', 'Flooring Disposal', 'Debris Cleanup', 'Material Hauling']
  },
  {
    title: 'Estate Cleanouts',
    description: 'Compassionate estate cleanout services with respectful handling of personal belongings.',
    icon: Package,
    features: ['Full Estate Clearing', 'Donation Sorting', 'Sensitive Handling', 'Family Support']
  },
  {
    title: 'Appliance Removal',
    description: 'Safe removal and disposal of old appliances including refrigerators, washers, and more.',
    icon: Recycle,
    features: ['Refrigerator Removal', 'Washer/Dryer', 'HVAC Units', 'Eco-Friendly Disposal']
  },
  {
    title: 'General Junk',
    description: 'Any unwanted items, furniture, electronics, and household goods removal service.',
    icon: Trash2,
    features: ['Furniture Pickup', 'Electronics Disposal', 'Yard Waste', 'Household Items']
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Junk Removal Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential cleanouts to commercial debris removal, we handle it all with professional care and environmental responsibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 text-white p-3 rounded-lg mr-4">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                  >
                    Get Quote →
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-green-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Not Sure What We Can Remove?
            </h3>
            <p className="text-gray-600 mb-6">
              If you can point to it, we can haul it away! Contact us for any junk removal needs.
            </p>
            <a
              href="#contact"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Ask About Your Items
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}