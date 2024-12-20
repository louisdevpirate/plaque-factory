export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Grille principale avec espacement égal */}
        <div className="flex justify-evenly items-start">
          {/* Logo et description */}
          <div className="max-w-xs">
            <img 
              src="/images/logo/1.png"
              alt="Plaque Factory Logo"
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-400 font-light">
              Personnalisation de plaques d'immatriculation homologuées et accessoires décoratifs.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#personnalisation" className="hover:text-white transition-colors">Personnaliser</a></li>
              <li><a href="#galerie" className="hover:text-white transition-colors">Galerie</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Catégories</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <h3 className="text-lg font-bold mb-4">Informations</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://plaqueimmat.fr/pages/mentions-legales" className="hover:text-white transition-colors">Mentions légales</a></li>
              <li><a href="https://plaqueimmat.fr/pages/conditions-generales-de-vente" className="hover:text-white transition-colors">CGV</a></li>
              <li><a href="https://plaqueimmat.fr/pages/politique-de-remboursement" className="hover:text-white transition-colors">Politique de remboursement</a></li>
              <li><a href="https://plaqueimmat.fr/contact.php" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2017 - {new Date().getFullYear()} - PlaqueImmat.fr - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  )
}