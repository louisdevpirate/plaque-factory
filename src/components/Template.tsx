import { Category } from "@/types/category";
import Navbar from "@/components/Navbar";
import FooterOptimized from "./FooterOptimized";
import FaqSectionOptimized from "./FaqSectionOptimized";
import BlogSectionServer from "./BlogSectionServer";
import CategoryHero from "./CategoryHero";
import FeedbackSection from "./FeedbackSection";
import { DeliverySection } from "./DeliverySection";

type Props = {
  category: Category;
};

export default function Template({ category }: Props) {
  return (
    <>
      <Navbar />
      <CategoryHero category={category} />
      <DeliverySection />
      <FeedbackSection />
      <FaqSectionOptimized />
      <BlogSectionServer />
      <FooterOptimized />
    </>
  );
}
