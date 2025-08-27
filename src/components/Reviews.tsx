'use client'

import { Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import { client } from '@/lib/sanity'

interface Review {
  _id: string
  customerName: string
  rating: number
  reviewText: string
  reviewDate: string
  location?: string
}

const defaultReviews = [
  {
    _id: '1',
    customerName: 'Sarah Johnson',
    rating: 5,
    reviewText: 'Cocodumps made my garage cleanout so easy! They arrived on time, worked efficiently, and left everything spotless. Highly recommend!',
    reviewDate: '2024-01-15',
    location: 'Riverside, CA'
  },
  {
    _id: '2',
    customerName: 'Mike Chen',
    rating: 5,
    reviewText: 'Fantastic service for our office renovation cleanup. Professional team, fair pricing, and they handled everything with care.',
    reviewDate: '2024-01-10',
    location: 'San Bernardino, CA'
  },
  {
    _id: '3',
    customerName: 'Lisa Rodriguez',
    rating: 5,
    reviewText: 'After my father passed, I needed help clearing his estate. The Cocodumps team was respectful, compassionate, and incredibly helpful during a difficult time.',
    reviewDate: '2024-01-05',
    location: 'Ontario, CA'
  }
]

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(defaultReviews)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "review"] | order(reviewDate desc) {
            _id,
            customerName,
            rating,
            reviewText,
            reviewDate,
            location
          }
        `)
        if (data && data.length > 0) {
          setReviews(data)
        }
      } catch {
        console.log('Using default reviews')
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. See what our satisfied customers have to say about our junk removal services.
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-lg animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.slice(0, 6).map((review) => (
              <div key={review._id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">{review.rating}/5</span>
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic">
                  &ldquo;{review.reviewText}&rdquo;
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-800">{review.customerName}</p>
                    {review.location && (
                      <p className="text-sm text-gray-600">{review.location}</p>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(review.reviewDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-16">
          <div className="bg-green-600 rounded-xl p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <div className="flex mr-3">
                {renderStars(5)}
              </div>
              <span className="text-2xl font-bold">5.0 Rating</span>
            </div>
            <p className="text-xl mb-6">Join hundreds of satisfied customers in Southern California</p>
            <a
              href="#contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Free Quote Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}