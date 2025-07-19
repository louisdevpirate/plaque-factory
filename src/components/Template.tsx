import { Category } from "@/types/category";
import Navbar from "@/components/Navbar";
import FooterOptimized from "./FooterOptimized";
import FaqSectionOptimized from "./FaqSectionOptimized";
import PersonalizationSectionLazy from "./PersonalizationSectionLazy";
import BlogSectionServer from "./BlogSectionServer";
import { ArrowRightIcon } from "./Icons";
import FeedbackSection from "./FeedbackSection";
import { DeliverySection } from "./DeliverySection";

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
          className="absolute inset-0 object-cover w-full h-full"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-30">
          <div className="mb-8">
            <h1>{category.title}</h1>
            <p className="mt-2">{category.description}</p>
          </div>
          <a
            href="#personnalisation"
            className="header-cta bg-yellow-400 text-black font-normal py-4 px-6 rounded-lg shadow-lg transition duration-300 inline-flex items-center"
            title="Créer ma plaque personnalisée maintenant"
          >
            Je crée ma plaque <ArrowRightIcon className="inline w-4 h-4 ml-2" />
          </a>
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
