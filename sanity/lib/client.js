import { createClient } from 'next-sanity'
const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-04-06'

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const useCdn = false

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})