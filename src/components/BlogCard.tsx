// src/components/BlogCard.tsx

import Link from "next/link"
import Image from "next/image"
import { FC } from "react"
import { FaArrowRight } from "react-icons/fa";


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
      <Link
        href={`/blog/${article.slug}`}
        title={`Lire l'article : ${article.title}`}
        className="flex-grow block h-full"
      >
        <div className="relative h-48 overflow-hidden mt-4 mr-4 ml-4 rounded-md">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-md"
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
          <p className="text-sm text-gray-600 line-clamp-3 text-left">
            {article.description}
          </p>
        </div>
      </Link>
      <div className="mt-auto">
        <Link
          href={`/blog/${article.slug}`}
          title={`Lire l'article : ${article.title}`}
          className="group/button inline-block w-full text-center px-4 py-2 text-sm font-medium text-white"
        >
          <span className="flex items-center gap-1 text-black transition-all duration-300 hover:text-gray-500">
            En Savoir Plus   <FaArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
