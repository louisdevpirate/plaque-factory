"use client";
import { useState } from "react";
import React from "react";

export default function PersonalizationSection() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section id="personnalisation" className="section-personnalisation bg-[url('/images/bg/bg.png')] bg-cover pt-20 pb-10 text-center border-t border-b">
      <div className="personnalisation-container max-w-7xl m-auto">
        <div className="badge badge-sm mb-4 rounded-2xl"><i className="fa fa-magic"></i>Personnalisation</div>

      
        <h2 className="px-4">Personnalise ta plaque à ton image !</h2>
        <span className="">Inscris ton texte, et si tu veux pousser la personnalisation encore plus loin, <br />tu peux cliquer sur le bouton ci-dessous</span>
        {/* Loader pendant le chargement de l'iframe */}
        {!iframeLoaded && (
          <div className="iframe-loader flex justify-center items-center ">
            <span className="loading loading-dots text-9xl text-black"></span>
          </div>
        )}

        <div className="iframe-wrapper">
          <iframe
            src="https://deploy-preview-384--module-plaqueimmat.netlify.app/361?iframe=1"
            onLoad={() => setIframeLoaded(true)}
            className={`iframe-content${iframeLoaded ? " loaded bg-white my-6 shadow-md" : ""}`}
          />
        </div>
        
      </div>
    </section>
  );
}
