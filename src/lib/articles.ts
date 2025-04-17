import { supabase } from "@/lib/supabase";

export async function getAllArticles() {
  const { data, error } = await supabase
    .from("Article")
    .select("*, author:Author(*)")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Erreur récupération articles :", error);
    return [];
  }

  return data;
}

export async function getArticleBySlug(slug: string) {
  const { data, error } = await supabase
    .from("Article")
    .select("*, author:Author(*)")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Erreur récupération article par slug :", error);
    return null;
  }

  return data;
}