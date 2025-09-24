import ReactMarkdown from "react-markdown";
import Link from "next/link";

interface ArticleContentWithLinksProps {
  content: string;
  articleTitle: string;
}

// Composants personnalisés pour ReactMarkdown
const CustomLink = ({ href, children, ...props }: any) => {
  // Mots-clés liés aux catégories avec leurs liens correspondants
  const categoryKeywords: { [key: string]: string } = {
    // Plaques moto
    'moto': '/categories/moto',
    'motos': '/categories/moto',
    'motocyclette': '/categories/moto',
    'motocyclettes': '/categories/moto',
    'deux-roues': '/categories/moto',
    'scooter': '/categories/moto',
    'scooters': '/categories/moto',
    
    // Plaques US
    'américain': '/categories/us',
    'américaine': '/categories/us',
    'américains': '/categories/us',
    'américaines': '/categories/us',
    'usa': '/categories/us',
    'us': '/categories/us',
    'style américain': '/categories/us',
    
    // Plaques SUV/4x4
    'suv': '/categories/suv',
    '4x4': '/categories/suv',
    'quatre-quatre': '/categories/suv',
    'tout-terrain': '/categories/suv',
    'cross': '/categories/suv',
    
    // Plaques collection
    'collection': '/categories/collection',
    'vintage': '/categories/collection',
    'ancien': '/categories/collection',
    'ancienne': '/categories/collection',
    'anciens': '/categories/collection',
    'anciennes': '/categories/collection',
    'rétro': '/categories/collection',
    
    // Plaques cyclo
    'cyclo': '/categories/cyclo',
    'cyclomoteur': '/categories/cyclo',
    'cyclomoteurs': '/categories/cyclo',
    
    // Plaques personnalisées
    'personnalisé': '/plaques-personnalisees',
    'personnalisée': '/plaques-personnalisees',
    'personnalisés': '/plaques-personnalisees',
    'personnalisées': '/plaques-personnalisees',
    'custom': '/plaques-personnalisees',
    'sur mesure': '/plaques-personnalisees',
  };

  // Si c'est un lien externe, utiliser le composant Link normal
  if (href?.startsWith('http')) {
    return <a href={href} {...props}>{children}</a>;
  }

  // Si c'est un mot-clé de catégorie, créer un lien vers la catégorie
  const text = children?.toString().toLowerCase();
  const categoryLink = categoryKeywords[text || ''];
  
  if (categoryLink) {
    // Générer des titres optimisés selon la catégorie
    const getOptimizedTitle = (category: string, text: string) => {
      const titles: { [key: string]: string } = {
        '/categories/moto': `Commander une plaque moto personnalisée dès 15€`,
        '/categories/us': `Plaques US personnalisées pour véhicules américains`,
        '/categories/suv': `Plaques SUV et 4x4 personnalisées`,
        '/categories/collection': `Plaques collection vintage et anciennes`,
        '/categories/cyclo': `Plaques cyclomoteur personnalisées`,
        '/plaques-personnalisees': `Personnaliser votre plaque d'immatriculation`
      }
      return titles[category] || `Découvrir nos plaques ${text}`
    }

    return (
      <Link 
        href={categoryLink} 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors"
        title={getOptimizedTitle(categoryLink, text)}
      >
        {children}
      </Link>
    );
  }

  // Sinon, utiliser le composant Link normal pour les liens internes
  return <Link href={href || '#'} {...props}>{children}</Link>;
};

export default function ArticleContentWithLinks({ 
  content, 
  articleTitle 
}: ArticleContentWithLinksProps) {
  return (
    <div
      className="prose prose-lg text-left leading-relaxed [&_h1]:text-2xl
        [&_h2]:text-[2rem] [&_h2]:mt-4 [&_h2]:mb-4
        [&_h3]:text-xl [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-gray-800
        [&_p]:mb-5 [&_p]:text-gray-700
        [&_ul]:pl-6 [&_ul]:list-disc [&_li]:mb-2
        [&_a]:text-blue-600 hover:[&_a]:underline [&_p]:mt-2
        [&_a]:font-medium [&_a]:transition-colors"
    >
      <ReactMarkdown 
        components={{
          a: CustomLink,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
