import { PrismaClient } from '@prisma/client';

// Étendre l'objet global de Node.js pour inclure Prisma
declare global {
  // Déclare prismaGlobal comme une propriété sur global
  let prismaGlobal: PrismaClient | undefined;
}

// Crée une instance unique de PrismaClient
const prisma = prismaGlobal ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  prismaGlobal = prisma;
}

export { prisma };

export async function getAllArticles() {
  return await prisma.article.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      author: true,
    },
  });
}

// 🧭 Récupère un seul article par son slug
export async function getArticleBySlug(slug: string) {
  return await prisma.article.findUnique({
    where: {
      slug,
    },
    include: {
      author: true,
    },
  });
}
