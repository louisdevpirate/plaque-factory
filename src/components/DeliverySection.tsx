import DeliveryPartners from "./DeliveryPartners";

export const DeliverySection = () => {
  return (
    <section className="relative py-8 md:py-6 h-fit flex flex-col items-start md:items-center bg-[url('/images/bg/bg.webp')] bg-cover border-t border-b text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mx-auto flex flex-col md:flex-col-rev lg:flex-row justify-center items-center gap-4 mb-8">
          <div className="flex justify-center items-center border border-white/30 rounded-2xl p-6 gap-6 w-full lg:w-fit shadow-md max-w-xl md:h-24 bg-black">
            <p className="text-5xl font-extrabold italic w-32 text-center">
              24H
            </p>
            <p className="text-sm text-left w-[260px]">
              Production de votre plaque <br />
              d’immatriculation en 24 heures
            </p>
          </div>
          <div className="flex justify-center items-center border border-white/30 rounded-2xl p-6 gap-6 w-full lg:w-fit shadow-md max-w-xl md:h-24 bg-black">
            <p className="text-5xl font-extrabold italic w-32 text-center">
              48H
            </p>
            <p className="text-sm text-left w-[260px]">
              Livraison sous 48 heures
              <br />
              si la commande est passée avant 12h
            </p>
          </div>
        </div>
        <DeliveryPartners />
      </div>
    </section>
  );
};
