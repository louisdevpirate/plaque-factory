import Image from "next/image";
import { TruckIcon } from "./Icons";

export default function PaymentSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row items-center">
          {" "}
          <p className="text-sm text-center md:text-left mr-4">
            Paiement sécurisé via
          </p>
          <div className="flex justify-center md:justify-start items-center">
            {" "}
            <Image
              src="/images/logo/visa.png"
              alt="Visa"
              width={60}
              height={40}
              className="transition-transform duration-200 ease-in-out hover:scale-110"
            />
            <Image
              src="/images/logo/paypal.png"
              alt="PayPal"
              width={60}
              height={40}
              className="transition-transform duration-200 ease-in-out hover:scale-110"
            />
            <Image
              src="/images/logo/mastercard.png"
              alt="Mastercard"
              width={60}
              height={40}
              className="transition-transform duration-200 ease-in-out hover:scale-110"
            />
            <Image
              src="/images/logo/american-express.png"
              alt="American Express"
              width={60}
              height={40}
              className="transition-transform duration-200 ease-in-out hover:scale-110"
            />
            <Image
              src="/images/logo/googlepay.png"
              alt="Google Pay"
              width={60}
              height={40}
              className="transition-transform duration-200 ease-in-out hover:scale-110"
            />
            <Image
              src="/images/logo/applepay.png"
              alt="Apple Pay"
              width={60}
              height={40}
              className="transition-transform duration-200 ease-in-out hover:scale-110"
            />
          </div>
        </div>
        <div className="flex-col lg:flex-row items-center md:items-start text-center md:text-left">
          <div className="flex items-center">
            <TruckIcon className="w-6 h-6 mr-2" />
            <p className="text-lg font-semibold"> Livraison 24/48H*</p>
          </div>
          <p className="text-xs text-gray-500 mt-1 ml-6">
            *en France métropolitaine
          </p>
        </div>
      </div>
    </section>
  );
}
