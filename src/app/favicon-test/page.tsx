export default function FaviconTestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          🎨 Test des Favicons - La Bonne Plaque
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">✅ Kit de Favicon Créé</h2>
          <p className="text-gray-600 mb-4">
            Votre image <code className="bg-gray-200 px-2 py-1 rounded">3.svg</code> a été convertie en kit complet de favicon.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium text-sm text-gray-700">Favicon Standard</h3>
              <ul className="text-xs text-gray-600 mt-2 space-y-1">
                <li>• favicon.ico (16x16, 32x32, 48x48)</li>
                <li>• favicon-16x16.png</li>
                <li>• favicon-32x32.png</li>
                <li>• favicon-48x48.png</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium text-sm text-gray-700">Apple Touch Icons</h3>
              <ul className="text-xs text-gray-600 mt-2 space-y-1">
                <li>• apple-touch-icon.png (180x180)</li>
                <li>• apple-touch-icon-152x152.png</li>
                <li>• apple-touch-icon-167x167.png</li>
                <li>• apple-touch-icon-180x180.png</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium text-sm text-gray-700">Android Chrome</h3>
              <ul className="text-xs text-gray-600 mt-2 space-y-1">
                <li>• android-chrome-192x192.png</li>
                <li>• android-chrome-512x512.png</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium text-sm text-gray-700">Windows Tiles</h3>
              <ul className="text-xs text-gray-600 mt-2 space-y-1">
                <li>• mstile-150x150.png</li>
                <li>• msapplication-144x144.png</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium text-sm text-gray-700">Autres Tailles</h3>
              <ul className="text-xs text-gray-600 mt-2 space-y-1">
                <li>• favicon-64x64.png</li>
                <li>• favicon-96x96.png</li>
                <li>• favicon-128x128.png</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium text-sm text-gray-700">Configuration</h3>
              <ul className="text-xs text-gray-600 mt-2 space-y-1">
                <li>• site.webmanifest</li>
                <li>• browserconfig.xml</li>
                <li>• favicon.svg</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">🔍 Comment Vérifier</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <span className="text-green-500 text-xl">1.</span>
              <div>
                <p className="font-medium">Vérifiez l'onglet du navigateur</p>
                <p className="text-sm text-gray-600">L'icône devrait maintenant afficher votre design "LA BONNE PLAQUE"</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-green-500 text-xl">2.</span>
              <div>
                <p className="font-medium">Testez sur mobile</p>
                <p className="text-sm text-gray-600">Ajoutez le site à l'écran d'accueil pour voir l'icône Apple/Android</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-green-500 text-xl">3.</span>
              <div>
                <p className="font-medium">Vérifiez les favoris</p>
                <p className="text-sm text-gray-600">L'icône devrait s'afficher dans la barre de favoris</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">📁 Emplacement des Fichiers</h2>
          <p className="text-gray-600 mb-3">
            Tous vos favicons sont maintenant dans le dossier <code className="bg-gray-200 px-2 py-1 rounded">public/favicon/</code>
          </p>
          <p className="text-sm text-gray-500">
            Vous pouvez supprimer les anciens fichiers favicon de la racine du dossier <code className="bg-gray-200 px-1 rounded">public/</code> si vous le souhaitez.
          </p>
        </div>
      </div>
    </div>
  );
}
