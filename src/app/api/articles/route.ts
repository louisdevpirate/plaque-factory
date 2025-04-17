// src/app/api/articles/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  const { data: articles, error } = await supabase
    .from('article')
    .select('*, author(*)') // on récupère les articles et les infos de l'auteur
    .order('createdAt', { ascending: false })
    .limit(5)

  if (error) {
    console.error('Erreur Supabase :', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(articles)
}