// src/data/articles.ts
import { ReactNode } from "react"

type Article = {
  slug: string
  title: string
  description: string
  image: string
  content: ReactNode
}

const articles: Article[] = [
  {
    slug: "plaques-rallye-2024",
    title: "Les plaques rallye les plus iconiques",
    description: "Explorez les plaques rallye qui ont marqué l'histoire automobile.",
    image: "/images/car.jpg",
    content: (
      <>{}
        <p>
          Depuis les premières éditions du Monte-Carlo jusqu'aux 24h du Mans, certaines plaques
          rallye ont marqué les esprits par leur design et leur histoire.
        </p>
        <h2>Les années 60 : un âge d'or</h2>
        <p>
          Dans les années 60, les plaques arboraient fièrement des typographies racing et des logos
          d'écurie mythiques...
        </p>
      </>
    ),
  },
  {
    slug: "astuces-pose-plaque",
    title: "Comment poser sa plaque comme un pro ?",
    description: "Tous les secrets pour une pose propre et durable.",
    image: "/images/car.jpg",
    content: (
      <>
        <p>
          Vis, rivets, double-face ? On fait le point sur les meilleures techniques pour fixer sa
          plaque sans stress.
        </p>
      </>
    ),
  },
]

export default articles
