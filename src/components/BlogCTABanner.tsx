"use client";
import CTAButton from "./CTAButton";

export default function BlogCTABanner() {
  return (
    <div className="w-full max-w-4xl mx-auto my-12 px-4">
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-8 text-center shadow-lg">
        <h3 className="text-2xl font-semibold text-black mb-3">
          Créez votre plaque personnalisée dès maintenant
        </h3>
        <p className="text-black/80 mb-6 text-lg">
          Homologuée CE, fabrication française, livrée en 48h. En quelques clics, votre plaque est prête.
        </p>
        <CTAButton
          href="https://module.plaqueimmat.fr/361?aff=9c7pyekcpurn"
          variant="primary"
          size="lg"
          external
          className="font-medium text-lg py-3"
        >
          Commander ma plaque homologuée →
        </CTAButton>
      </div>
    </div>
  );
}
