export default function HeaderSection() {
  return (
    <header className="h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-6xl font-bold mb-8 text-white">
        Votre Plaque, Votre Style
      </h1>
      <p className="text-xl text-gray-100 max-w-2xl mb-10 leading-relaxed">
        Créez des plaques d'immatriculation personnalisées et homologuées qui reflètent votre personnalité.
      </p>
      <a 
        href="#personnalisation"
        className="px-10 py-6 text-md bg-gradient-to-r from-orange-500 to-orange-400 rounded-full shadow-sm
          text-white font-bold transition-all duration-300 hover:-translate-y-[2px] cursor-pointer 
          hover:shadow-md hover:from-orange-600 hover:to-orange-500"
      >
        Commencer à personnaliser
      </a>
    </header>
  )
}