# Cocodumps - Junk Removal Business Website

A modern Next.js website template for junk removal businesses with Sanity CMS backend.

## Features

- **Modern Design**: Responsive, professional design optimized for conversion
- **Sanity CMS**: Easy-to-use content management system for updating content
- **Service Management**: Add, edit, and organize your services
- **Project Gallery**: Showcase before/after photos of your work
- **Customer Reviews**: Display and manage customer testimonials
- **Contact Forms**: Lead capture with appointment scheduling
- **SEO Optimized**: Built for search engine visibility
- **Mobile-First**: Fully responsive design
- **Fast Performance**: Optimized for speed and Core Web Vitals

## Quick Setup

### 1. Environment Variables

Create a `.env.local` file with your Sanity credentials:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_api_token
```

### 2. Sanity Setup

1. Create a Sanity account at [sanity.io](https://sanity.io)
2. Create a new project
3. Add your project ID to the environment variables
4. Generate an API token with Editor permissions
5. Access your Sanity Studio at `/studio` (e.g., `localhost:3000/studio`)

### 3. Customization

#### Company Information
Update the following files with your business details:
- `src/components/Header.tsx` - Company name, phone, email
- `src/components/Hero.tsx` - Hero section content
- `src/components/Footer.tsx` - Contact information
- `src/app/layout.tsx` - SEO metadata

#### Services
Add your services through the Sanity Studio at `/studio`

#### Styling
- Colors: Edit the Tailwind config or component files
- Fonts: Update `src/app/layout.tsx` for Google Fonts
- Logo: Replace with your logo in components

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Hosting Providers

This is a standard Next.js application and can be deployed to:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify
- Any Node.js hosting provider

## Content Management

Access your Sanity Studio at `/studio` to manage:

- **Company Info**: Business details, contact information
- **Services**: Service descriptions, pricing, features
- **Projects**: Before/after photos, project details
- **Reviews**: Customer testimonials and ratings

## Template Customization for Other Businesses

This template can be easily adapted for other junk removal businesses:

1. Update company information in the code
2. Customize colors and branding
3. Replace default content
4. Set up new Sanity project
5. Deploy to new domain

## Support

For technical support or customization requests, contact jesse@cocovision.ai

## License

This project is licensed under the MIT License.
