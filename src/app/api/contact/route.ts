import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

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

    // In a real application, you would:
    // 1. Send an email notification
    // 2. Save to database
    // 3. Integrate with scheduling system
    // 4. Send SMS notifications
    
    console.log('New contact form submission:', {
      ...data,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We\'ll contact you within 24 hours to schedule your free quote.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'There was an error sending your message. Please try calling us directly.' 
      },
      { status: 500 }
    )
  }
}