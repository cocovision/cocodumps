import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (rule) => rule.required().min(1).max(5),
      options: {
        list: [
          { title: '1 Star', value: 1 },
          { title: '2 Stars', value: 2 },
          { title: '3 Stars', value: 3 },
          { title: '4 Stars', value: 4 },
          { title: '5 Stars', value: 5 },
        ],
      },
    }),
    defineField({
      name: 'reviewText',
      title: 'Review Text',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'reviewDate',
      title: 'Review Date',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Review',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'customerName',
      subtitle: 'rating',
      description: 'reviewText',
    },
    prepare(selection) {
      const { title, subtitle, description } = selection
      return {
        title,
        subtitle: `${subtitle} stars`,
        description: description?.slice(0, 100) + '...',
      }
    },
  },
})