// src/components/BlogCard.tsx

import Link from "next/link"
import Image from "next/image"
import { FC } from "react"
import { Article } from "@prisma/client" // ✅ Important : types auto-générés

type Props = {
  article: Article
}

const BlogCard: FC<Props> = ({ article }) => {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="block rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 border"
    >
      <div className="relative w-full h-48">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold leading-snug mb-1 text-left line-clamp-2">{article.title}</h3>
        <p className="text-sm text-gray-600">{article.description}</p>
      </div>
    </Link>
  )
}

export default BlogCard
