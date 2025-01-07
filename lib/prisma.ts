/* eslint-disable no-var */
import { PrismaClient } from '@prisma/client';

// Étendre l'objet global de Node.js pour inclure Prisma
declare global {
  // Déclare prisma comme une propriété sur global
  var prisma: PrismaClient | undefined;
}

// Crée une instance unique de PrismaClient
export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
