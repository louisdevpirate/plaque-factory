/**
 * Génère l'URL du module de personnalisation selon le code de la catégorie
 */
export function getPersonnalizationUrl(categoryCode: string): string {
  const baseUrl = "https://module.plaqueimmat.fr";
  const affiliateCode = "?aff=9c7pyekcpurn";
  
  return `${baseUrl}/${categoryCode}${affiliateCode}`;
}
