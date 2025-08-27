import { NextResponse } from 'next/server'

const BASE_URL = 'https://www.labonneplaque.fr'

export async function GET() {
  const staticUrls = [
    { loc: '/', priority: 1.0, lastmod: new Date().toISOString() },
    { loc: '/about', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/blog', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/#catégories', priority: 0.7, lastmod: new Date().toISOString() },
    { loc: '/#faq', priority: 0.6, lastmod: new Date().toISOString() },
    { loc: '/#personnalisation', priority: 0.9, lastmod: new Date().toISOString() }
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