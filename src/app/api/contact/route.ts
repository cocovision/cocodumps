import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { contactService } from '@/lib/contact-service'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  serviceType: z.string().min(1),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  address: z.string().min(5),
  message: z.string().min(10),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = contactSchema.parse(body)

    // Log submission for monitoring
    console.log('New contact form submission:', {
      name: data.name,
      email: data.email,
      serviceType: data.serviceType,
      timestamp: new Date().toISOString(),
    })

    // Process the contact form submission
    const result = await contactService.submitContactForm(data)

    return NextResponse.json(result, {
      status: result.success ? 200 : 500
    })
  } catch (error) {
    console.error('Contact form validation error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'There was an error processing your message. Please try calling us directly.' 
      },
      { status: 400 }
    )
  }
}