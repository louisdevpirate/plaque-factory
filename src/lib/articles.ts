import { supabase } from "@/lib/supabase";

export type ArticleWithAuthor = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  content: string;
  createdAt: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
};

export async function getAllArticles(): Promise<ArticleWithAuthor[]> {
  const { data, error } = await supabase
    .from("Article")
    .select("id, slug, title, description, image, content, createdAt, author:authorId(name, avatar, bio)")
    .order("createdAt", { ascending: false });

  if (error) {
    console.error("Erreur récupération articles :", error);
    return [];
  }

  const articles: ArticleWithAuthor[] = (data || []).map((article) => ({
    ...article,
    author: Array.isArray(article.author) ? article.author[0] : article.author,
  }));

  return articles;
}

export async function getArticleBySlug(slug: string): Promise<ArticleWithAuthor | null> {
  const { data, error } = await supabase
    .from("Article")
    .select("id, slug, title, description, image, content, createdAt, author:authorId(name, avatar, bio)")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Erreur récupération article par slug :", error);
    return null;
  }

  return {
    ...data,
    author: Array.isArray(data.author) ? data.author[0] : data.author,
  } as ArticleWithAuthor;
}
