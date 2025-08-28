import { Resend } from 'resend'

export interface ContactFormData {
  name: string
  email: string
  phone: string
  serviceType: string
  preferredDate?: string
  preferredTime?: string
  address: string
  message: string
}

export interface ContactSubmissionResult {
  success: boolean
  message: string
  error?: string
}

class ContactService {
  private resend: Resend | null = null

  constructor() {
    if (process.env.RESEND_API_KEY) {
      this.resend = new Resend(process.env.RESEND_API_KEY)
    }
  }

  async submitContactForm(data: ContactFormData): Promise<ContactSubmissionResult> {
    try {
      // Future: Add database storage here
      // await this.saveToDatabase(data)

      // Send email notification
      const emailResult = await this.sendEmailNotification(data)
      
      if (!emailResult.success) {
        throw new Error(emailResult.error || 'Failed to send email notification')
      }

      return {
        success: true,
        message: "Thank you! We'll contact you within 24 hours to schedule your free quote."
      }
    } catch (error) {
      console.error('Contact form submission error:', error)
      return {
        success: false,
        message: 'There was an error sending your message. Please try calling us directly.',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  private async sendEmailNotification(data: ContactFormData): Promise<ContactSubmissionResult> {
    if (!this.resend) {
      console.warn('Resend not configured - email notification skipped')
      return { success: true, message: 'Email service not configured' }
    }

    try {
      const contactEmail = process.env.CONTACT_EMAIL || 'jesse@cocovision.ai'
      
      console.log('Attempting to send email to:', contactEmail)
      
      const result = await this.resend.emails.send({
        from: 'Cocodumps Website <onboarding@resend.dev>', // Using Resend's default domain for testing
        to: [contactEmail],
        subject: `New Quote Request from ${data.name}`,
        html: this.generateEmailHTML(data),
        text: this.generateEmailText(data),
      })

      console.log('Email sent successfully:', result)
      return { success: true, message: 'Email sent successfully' }
    } catch (error) {
      console.error('Email sending error:', error)
      return {
        success: false,
        message: 'Failed to send email',
        error: error instanceof Error ? error.message : 'Unknown email error'
      }
    }
  }

  private generateEmailHTML(data: ContactFormData): string {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #059669;">New Quote Request - Cocodumps</h2>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Customer Information</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Service Address:</strong> ${data.address}</p>
        </div>

        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Service Details</h3>
          <p><strong>Service Type:</strong> ${data.serviceType}</p>
          ${data.preferredDate ? `<p><strong>Preferred Date:</strong> ${data.preferredDate}</p>` : ''}
          ${data.preferredTime ? `<p><strong>Preferred Time:</strong> ${data.preferredTime}</p>` : ''}
        </div>

        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Project Description</h3>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        </div>

        <div style="background: #059669; color: white; padding: 15px; border-radius: 8px; text-align: center;">
          <p style="margin: 0;"><strong>📞 Contact them at: ${data.phone}</strong></p>
          <p style="margin: 5px 0 0 0;">Submitted: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `
  }

  private generateEmailText(data: ContactFormData): string {
    return `
NEW QUOTE REQUEST - COCODUMPS

Customer Information:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
- Address: ${data.address}

Service Details:
- Service Type: ${data.serviceType}
${data.preferredDate ? `- Preferred Date: ${data.preferredDate}` : ''}
${data.preferredTime ? `- Preferred Time: ${data.preferredTime}` : ''}

Project Description:
${data.message}

Contact them at: ${data.phone}
Submitted: ${new Date().toLocaleString()}
    `
  }

  // Future database methods (ready to implement)
  // private async saveToDatabase(data: ContactFormData): Promise<void> {
  //   // Implementation for database storage
  //   // Could use Prisma, MongoDB, Supabase, etc.
  // }
  
  // private async getSubmissions(limit?: number): Promise<ContactFormData[]> {
  //   // Implementation for retrieving submissions
  // }
}

export const contactService = new ContactService()