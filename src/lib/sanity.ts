import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: { asset: { _ref: string; _type: string } } | { _ref: string; _type: string }) {
  return builder.image('asset' in source ? source.asset : source)
}