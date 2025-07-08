import React from "react";

export default function VideoSection() {
  return (
    <section className="py-10 md:py-16 text-left bg-white w-full">
      <div className="max-w-3xl mx-auto lg:flex flex-col justify-center">
        <div className="badge badge-sm mb-4 rounded-2xl mx-auto">
          <i className="fa fa-play"></i>Vidéo
        </div>
        <h2 className="text-left lg:text-center lg:max-w-lg mx-auto">
          Découvrez notre
          <span className="text-[#FFD713]"> savoir-faire</span> en action
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-left lg:text-center">
          Chaque commande est préparée avec précision et
          passion pour vous fabriquer une plaque d'immatriculation conforme, stylée et prête à
          poser sans prise de tête.
        </p>
        <div className="overflow-hidden rounded-2xl shadow-md border border-gray-200 p-1 mx-auto">
          <video
            src="/videos/ugc.webm"
            autoPlay
            muted
            loop
            controls
            playsInline
            className="rounded-xl shadow-lg w-full max-w-4xl mx-auto"
          ></video>
        </div>
      </div>
    </section>
  );
}
