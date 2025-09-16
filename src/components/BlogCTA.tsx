"use client";

import CTAButton from "./CTAButton";
import CTAContainer from "./CTAContainer";

export default function BlogCTA() {
  return (
    <CTAContainer direction="col" gap="md" className="mb-12 text-center">
      <CTAButton
        href="/blog"
        variant="secondary"
        size="md"
      >
        Voir tous les articles
      </CTAButton>
      <CTAButton
        href="https://module.plaqueimmat.fr/361?aff=9c7pyekcpurn"
        variant="blog"
        size="md"
        external
      >
        Créer ma plaque dès 15€
      </CTAButton>
    </CTAContainer>
  );
}
