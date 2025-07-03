"use client";
import { useState } from "react";
import React from "react";

export default function PersonalizationSection() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section id="personnalisation" className="section-personnalisation bg-white text-center">
      <div className="personnalisation-container max-w-7xl m-auto px-4"><a
          href="https://module.plaqueimmat.fr/?aff=cc58d6de-e03b-45b5-b678-0f6103f8d0e6"
          target="_blank"
          rel="noopener noreferrer"
          className="module-btn"
        >
                  <div className="badge badge-sm mb-6 rounded-2xl"><i className="fa fa-magic"></i>Personnalisation</div>

        </a>
        <h2>Personnalise ta plaque à ton image !</h2>
        <span>Inscris ton texte, et si tu veux pousser la personnalisation encore plus loin, <br />tu peux cliquer sur le bouton ci-dessous</span>
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
            className={`iframe-content ${iframeLoaded ? "loaded" : ""}`}
          />
        </div>
        
      </div>
    </section>
  );
}
