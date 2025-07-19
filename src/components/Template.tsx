import { Category } from "@/types/category";
import Navbar from "@/components/Navbar";
import FooterOptimized from "./FooterOptimized";
import FaqSectionOptimized from "./FaqSectionOptimized";
import PersonalizationSectionLazy from "./PersonalizationSectionLazy";
import BlogSectionServer from "./BlogSectionServer";
import { ArrowRightIcon } from "./Icons";
import FeedbackSection from "./FeedbackSection";
import { DeliverySection } from "./DeliverySection";
import Image from "next/image";

type Props = {
  category: Category;
};

export default function Template({ category }: Props) {
  return (
    <>
      <Navbar />

      <div className="h-20 bg-white"></div>

      <header className="relative w-full h-[70vh] overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="absolute inset-0 object-cover w-full h-full brightness-50"
        />

        <a
          href="/#catégories"
          className="hidden md:block absolute top-4 left-4 z-40 text-white px-4 py-2 cursor-pointer hover:text-white"
        >
          <ArrowRightIcon className="rotate-180 w-3 h-3 inline mr-2 text-white" />
          Retour
        </a>

        <div className="absolute inset-0 z-30 flex items-center justify-center max-w-7xl h-full px-4 md:px-12 mx-auto">
          <div className="w-1/2 flex flex-col items-start justify-center text-white text-left max-w-md">
            <h1 className="text-3xl md:text-6xl">{category.title}</h1>
            <p className="mt-4 mb-8 text-base md:text-lg">
              {category.description}
            </p>
            <a
              href="#personnalisation"
              className="header-cta bg-yellow-400 text-black font-normal py-4 px-6 rounded-lg shadow-lg transition duration-300 inline-flex items-center"
              title="Créer ma plaque personnalisée maintenant"
            >
              Je crée ma plaque{" "}
              <ArrowRightIcon className="inline w-4 h-4 ml-2" />
            </a>
          </div>
          <div className="w-1/2 hidden md:flex justify-center items-center">
            <Image
              src={category.imagePlaque}
              width={500}
              height={100}
              alt="Moto décorative"
              priority
            />
          </div>
        </div>
      </header>

      <DeliverySection />
      <PersonalizationSectionLazy />
      <FeedbackSection />
      <FaqSectionOptimized />
      <BlogSectionServer />

      <FooterOptimized />
    </>
  );
}
