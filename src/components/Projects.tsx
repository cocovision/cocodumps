'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'

interface Project {
  _id: string
  title: string
  description?: string
  category: string
  projectDate: string
  beforeImages?: Array<{
    asset: { _ref: string; _type: string }
    alt?: string
  }>
  afterImages?: Array<{
    asset: { _ref: string; _type: string }
    alt?: string
  }>
}

const defaultProjects = [
  {
    _id: '1',
    title: 'Complete Garage Cleanout',
    description: 'Transformed a cluttered garage into a clean, organized space',
    category: 'residential',
    projectDate: '2024-01-15',
    beforeImages: [],
    afterImages: []
  },
  {
    _id: '2',
    title: 'Office Renovation Cleanup',
    description: 'Removed construction debris and old furniture from office renovation',
    category: 'commercial',
    projectDate: '2024-01-10',
    beforeImages: [],
    afterImages: []
  },
  {
    _id: '3',
    title: 'Estate Cleanout Service',
    description: 'Respectful and thorough estate cleanout with donation sorting',
    category: 'estate',
    projectDate: '2024-01-05',
    beforeImages: [],
    afterImages: []
  }
]

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'construction', label: 'Construction' },
  { value: 'estate', label: 'Estate Cleanout' },
  { value: 'appliance', label: 'Appliance Removal' }
]

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(defaultProjects)
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(defaultProjects)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "project"] | order(projectDate desc) {
            _id,
            title,
            description,
            category,
            projectDate,
            beforeImages[]{
              asset,
              alt
            },
            afterImages[]{
              asset,
              alt
            }
          }
        `)
        if (data && data.length > 0) {
          setProjects(data)
          setFilteredProjects(data)
        }
      } catch {
        console.log('Using default projects')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory))
    }
  }, [selectedCategory, projects])

  const ProjectCard = ({ project }: { project: Project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const images = [...(project.beforeImages || []), ...(project.afterImages || [])]
    const hasImages = images.length > 0

    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <div className="relative">
          {hasImages ? (
            <>
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <Image
                  src={urlFor(images[currentImageIndex]?.asset).width(800).height(450).url()}
                  alt={images[currentImageIndex]?.alt || project.title}
                  className="w-full h-full object-cover"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>
              {images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full ${
                        currentImageIndex === index ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="aspect-video bg-gradient-to-r from-green-100 to-blue-100 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <p className="font-medium">{project.title}</p>
                <p className="text-sm mt-1">Project Gallery</p>
              </div>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
              {categories.find(cat => cat.value === project.category)?.label || project.category}
            </span>
            <span className="text-sm text-gray-500">
              {new Date(project.projectDate).toLocaleDateString()}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
          
          {project.description && (
            <p className="text-gray-600 mb-4">{project.description}</p>
          )}
          
          <a
            href="#contact"
            className="text-green-600 font-semibold hover:text-green-700 transition-colors"
          >
            Get Similar Service →
          </a>
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the difference our professional junk removal services make. From cluttered spaces to clean, organized areas.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category.value
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                <div className="aspect-video bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}

        {filteredProjects.length === 0 && !loading && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No projects found in this category.</p>
            <p className="text-gray-500 mt-2">Check back soon for new project galleries!</p>
          </div>
        )}

        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-gray-600 mb-6">
              Let us help you reclaim your space with our professional junk removal services.
            </p>
            <a
              href="#contact"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}