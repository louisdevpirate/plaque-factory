import { Category } from "@/types/category";
import Navbar from "@/components/Navbar";
import FooterOptimized from "./FooterOptimized";
import BlogSectionServer from "./BlogSectionServer";
import CategoryHero from "./CategoryHero";
import FeedbackSection from "./FeedbackSection";
import { DeliverySection } from "./DeliverySection";
import CategoryInfoBlock from "./CategoryInfoBlock";
import CategoryFAQSection from "./CategoryFAQSection";

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
      <CategoryInfoBlock slug={category.slug} title={category.title} />
      <CategoryFAQSection slug={category.slug} title={category.title} />
      <BlogSectionServer categoryCode={category.code} />
      <FooterOptimized />
    </>
  );
}
