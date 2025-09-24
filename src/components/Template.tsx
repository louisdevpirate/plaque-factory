import { Category } from "@/types/category";
import Navbar from "@/components/Navbar";
import FooterOptimized from "./FooterOptimized";
import FaqSectionOptimized from "./FaqSectionOptimized";
import PersonalizationSectionLazy from "./PersonalizationSectionLazy";
import BlogSectionServer from "./BlogSectionServer";
import HeroHeader from "./HeroHeader";
import FeedbackSection from "./FeedbackSection";
import { DeliverySection } from "./DeliverySection";

type Props = {
  category: Category;
};

export default function Template({ category }: Props) {
  return (
    <>
      <Navbar />
      <HeroHeader
        title={category.title}
        description={category.description}
        backgroundImage={category.image}
        plaqueImage={category.imagePlaque}
        ctaText="Je crée ma plaque"
        ctaHref="#personnalisation"
        showBackButton={true}
      />
      <DeliverySection />
      <PersonalizationSectionLazy code={category.code} />
      <FeedbackSection />
      <FaqSectionOptimized />
      <BlogSectionServer />
      <FooterOptimized />
    </>
  );
}
