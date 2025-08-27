import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'beforeImages',
      title: 'Before Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'afterImages',
      title: 'After Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'projectDate',
      title: 'Project Date',
      type: 'date',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Residential', value: 'residential' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Construction', value: 'construction' },
          { title: 'Estate Cleanout', value: 'estate' },
          { title: 'Appliance Removal', value: 'appliance' },
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'afterImages.0',
    },
  },
})