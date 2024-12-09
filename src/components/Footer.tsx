export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* À propos */}
            <div>
              <h3 className="text-lg font-bold mb-4">Plaque Factory</h3>
              <p className="text-gray-400">
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
                <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CGV</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contact@plaquefactory.fr</li>
                <li>Service client: 01 23 45 67 89</li>
              </ul>
            </div>
          </div>
  
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Plaque Factory. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    )
  }