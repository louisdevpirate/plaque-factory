// src/app/api/articles/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const articles = await prisma.article.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
    include: { author: true }
  })

  return NextResponse.json(articles)
}