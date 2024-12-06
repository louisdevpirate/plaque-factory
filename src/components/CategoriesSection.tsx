export default function CategoriesSection() {
    const categories = [
      {
        id: 1,
        title: "Moto",
        description: "Des plaques personnalisées pour votre deux-roues",
        link: "#"
      },
      {
        id: 2,
        title: "4x4",
        description: "Des designs robustes pour véhicules tout-terrain",
        link: "#"
      },
      {
        id: 3,
        title: "Collection",
        description: "Plaques vintage et designs rétro",
        link: "#"
      },
      {
        id: 4,
        title: "Gaming",
        description: "Inspiré de vos jeux vidéo préférés",
        link: "#"
      }
    ];
  
    return (
      <section id="categories" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos Catégories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <a 
                  href={category.link} 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Explorer →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }