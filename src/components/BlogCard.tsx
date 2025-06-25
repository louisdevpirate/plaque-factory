// src/components/BlogCard.tsx

import Link from "next/link"
import Image from "next/image"
import { FC } from "react"

type Article = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  category?: {
    name: string;
  };
};

type Props = {
  article: Article;
};

const BlogCard: FC<Props> = ({ article }) => {
  console.log("Catégorie reçue :", article.category);
  console.log("Nom de catégorie :", article.category?.name);
  return (
    <div className="blog-card group flex flex-col justify-between h-[460px] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 border">
      <Link href={`/blog/${article.slug}`} className="flex-grow block h-full">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          {typeof article.category?.name === "string" && (
            <p className="text-xs uppercase text-gray-500 mb-1 tracking-wide">
              {article.category.name}
            </p>
          )}
          <h3 className="text-base font-semibold leading-snug mb-2 text-left line-clamp-2 text-black">
            {article.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3">
            {article.description}
          </p>
        </div>
      </Link>
      <div className="px-4 pb-4 mt-auto">
        <Link
          href={`/blog/${article.slug}`}
          className="group/button inline-block w-full text-center px-4 py-2 text-sm font-medium text-white bg-black rounded"
        >
          <span className="inline-flex items-center justify-center gap-1 text-white transition-all duration-300 group-hover:scale-105">
            Lire
            <span className="transform translate-x-1 opacity-0 transition-all duration-300 group-hover/button:translate-x-2 group-hover/button:opacity-100">
                <i className="fas fa-eye"></i>
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
