import { MetadataRoute } from 'next'
import { PRODUCTS } from '@/lib/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://navnind.com'

  const staticPages = [
    '',
    '/about',
    '/products',
    '/brands',
    '/dealers',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const productPages = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...productPages]
}
