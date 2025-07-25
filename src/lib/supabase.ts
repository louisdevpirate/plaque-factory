import { createClient } from "@supabase/supabase-js";
import { unstable_cache } from "next/cache";

// Create a singleton Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export type Article = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  content?: string;
  category?: {
    name: string;
  };
  author?: {
    name: string;
    avatar: string;
    bio: string;
  };
};

// Cached function to get articles
export const getCachedArticles = unstable_cache(
  async (limit: number = 5) => {
    const { data, error } = await supabase
      .from("Article")
      .select(
        "id, slug, title, description, image, createdAt, category:categoryId(name)"
      )
      .order("createdAt", { ascending: false })
      .limit(limit);

    if (error) {
      console.error("Error fetching articles:", error);
      return [];
    }

    return (data || []).map((article) => ({
      ...article,
      category: article.category?.[0] || undefined,
    })) as Article[];
  },
  ["articles"], // cache key
  {
    revalidate: 3600, // revalidate every hour
    tags: ["articles"],
  }
);

// Get single article by slug
export const getCachedArticleBySlug = unstable_cache(
  async (slug: string) => {
    const { data, error } = await supabase
      .from("Article")
      .select(
        "*, category:categoryId(name), author:authorId(name, avatar, bio)"
      )
      .eq("slug", slug)
      .single();

    if (error) {
      console.error("Error fetching article:", error);
      return null;
    }

    return data as Article;
  },
  ["article-by-slug"],
  {
    revalidate: 3600,
    tags: ["articles"],
  }
);

// Get all articles (for pagination)
export const getCachedAllArticles = unstable_cache(
  async () => {
    const { data, error } = await supabase
      .from("Article")
      .select(
        "id, slug, title, description, image, createdAt, category:categoryId(name)"
      )
      .order("createdAt", { ascending: false });

    if (error) {
      console.error("Error fetching all articles:", error);
      return [];
    }

    return (data || []).map((article) => ({
      ...article,
      category: article.category?.[0] || undefined,
    })) as Article[];
  },
  ["all-articles"],
  {
    revalidate: 3600,
    tags: ["articles"],
  }
);

// Function to invalidate cache when needed
export async function revalidateArticles() {
  const { revalidateTag } = await import("next/cache");
  revalidateTag("articles");
}
