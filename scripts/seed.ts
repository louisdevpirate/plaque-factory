import { prisma } from "../src/lib/prisma"

async function main() {
  // Auteurs à injecter
  const authors = [
    {
      id: "auteur1",
      name: "Manon Dusselier",
      avatar: "/images/authors/manon-dusselier.jpg",
      bio: "Journaliste spécialisée dans l’automobile depuis 2010.",
    },
    {
      id: "auteur2",
      name: "Thomas Pillot",
      avatar: "/images/authors/thomas-pillot.jpg",
      bio: "Ancien technicien de contrôle technique passionné de véhicules anciens.",
    },
    {
      id: "auteur3",
      name: "Maxime Toussaint",
      avatar: "/images/authors/maxime-toussaint.jpg",
      bio: "Expert en législation automobile et mobilité durable.",
    },
  ]

  // Création des auteurs
  for (const author of authors) {
    await prisma.author.upsert({
      where: { id: author.id },
      update: {},
      create: author,
    })
  }

  // Articles à injecter
  const articles = [
    {
      slug: "choisir-plaque-immatriculation",
      title: "Comment bien choisir sa plaque d'immatriculation ?",
      description: "Tous les critères pour choisir une plaque adaptée à votre véhicule.",
      content: "Voici le contenu complet de l'article sur le choix des plaques...",
      image: "/images/blog/car1.jpg",
      authorId: "auteur1",
    },
    {
      slug: "plaques-plexi-vs-aluminium",
      title: "Plexiglass ou aluminium : quel matériau choisir ?",
      description: "Un comparatif simple et efficace entre deux matériaux très utilisés.",
      content: "Contenu détaillé sur les avantages et inconvénients du plexiglass vs aluminium...",
      image: "/images/blog/car2.jpg",
      authorId: "auteur2",
    },
    {
      slug: "histoire-plaques-france",
      title: "L’histoire des plaques d’immatriculation en France",
      description: "Plongez dans l’évolution visuelle et légale des plaques françaises.",
      content: "Un voyage dans le temps, depuis les premières plaques jusqu’aux modèles actuels...",
      image: "/images/blog/car3.jpg",
      authorId: "auteur3",
    },
  ]

  // Création des articles
  for (const article of articles) {
    await prisma.article.upsert({
      where: { slug: article.slug },
      update: {},
      create: article,
    })
  }

  console.log("✅ Auteurs et articles injectés dans Supabase !")
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})