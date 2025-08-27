import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'companyInfo',
  title: 'Company Information',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'aboutText',
      title: 'About Text',
      type: 'text',
    }),
    defineField({
      name: 'yearsInBusiness',
      title: 'Years in Business',
      type: 'number',
    }),
    defineField({
      name: 'servicesOffered',
      title: 'Services Offered',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'companyName',
      subtitle: 'email',
    },
  },
})