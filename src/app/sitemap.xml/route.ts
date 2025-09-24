import { NextResponse } from 'next/server'

const BASE_URL = 'https://www.labonneplaque.fr'

export async function GET() {
  const staticUrls = [
    { loc: '/', priority: 1.0, lastmod: new Date().toISOString() },
    { loc: '/plaques-personnalisees', priority: 0.9, lastmod: new Date().toISOString() },
    { loc: '/a-propos', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/blog', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/moto', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/mentions-legales', priority: 0.3, lastmod: new Date().toISOString() },
    { loc: '/cgv', priority: 0.3, lastmod: new Date().toISOString() }
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls
    .map(
      ({ loc, lastmod, priority }) => `
  <url>
    <loc>${BASE_URL}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}