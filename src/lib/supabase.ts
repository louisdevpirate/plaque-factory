import { createClient } from "@supabase/supabase-js";
import { unstable_cache } from "next/cache";

// Create a singleton Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("❌ Supabase environment variables missing:", {
    url: !!supabaseUrl,
    key: !!supabaseAnonKey
  });
}

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

// Get single article by slug (temporarily without cache for debugging)
export const getCachedArticleBySlug = async (slug: string) => {
  console.log("🔍 Fetching article with slug:", slug);
  
  // First, let's see all available slugs (no limit to see all)
  const { data: allSlugs, error: slugsError } = await supabase
    .from("Article")
    .select("slug, title, id");
  
  console.log("📋 Available articles:", allSlugs?.map(a => ({ id: a.id, slug: a.slug, title: a.title })));
  
  // Check if the specific article exists by ID (046)
  const { data: articleById, error: idError } = await supabase
    .from("Article")
    .select("*")
    .eq("id", "046")
    .single();
    
  console.log("🔍 Article by ID 046:", articleById ? { id: articleById.id, slug: articleById.slug, title: articleById.title } : "NOT FOUND");
  
  // Now try to fetch the specific article
  const { data, error } = await supabase
    .from("Article")
    .select(
      "*, category:categoryId(name), author:authorId(name, avatar, bio)"
    )
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("❌ Error fetching article:", {
      slug,
      error: error.message || error,
      code: error.code,
      details: error.details,
      hint: error.hint
    });
    
    // Try without relations to see if it's a relation issue
    const { data: simpleData, error: simpleError } = await supabase
      .from("Article")
      .select("*")
      .eq("slug", slug)
      .single();
      
    if (simpleError) {
      console.error("❌ Even simple query failed:", simpleError);
    } else {
      console.log("✅ Simple query worked:", simpleData?.title);
    }
    
    return null;
  }

  console.log("✅ Article found:", data?.title);
  return data as Article;
};

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
