import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const BASE_URL = 'https://www.labonneplaque.fr'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function GET() {
  const { data: articles, error } = await supabase
    .from('Article')
    .select('slug, updatedAt')

  if (error || !articles) {
    return new NextResponse('Erreur lors de la génération du sitemap', { status: 500 })
  }

  const staticUrls = [
    { loc: '/', priority: 1.0 },
    { loc: '/blog', priority: 0.8 }
  ]

  const dynamicUrls = articles.map((article) => ({
    loc: `/blog/${article.slug}`,
    lastmod: new Date(article.updatedAt).toISOString(),
    priority: 0.7
  }))

type UrlEntry = {
  loc: string
  priority: number
  lastmod?: string
}

const urls: UrlEntry[] = [...staticUrls, ...dynamicUrls]
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      ({ loc, lastmod, priority }) => `
  <url>
    <loc>${BASE_URL}${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
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