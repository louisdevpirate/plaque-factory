"use client";
import { useState } from "react";
import React from "react";

export default function PersonalizationSection() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section id="personnalisation" className="section-personnalisation">
      <div className="personnalisation-container max-w-7xl m-auto">
        {/* Loader pendant le chargement de l'iframe */}
        {!iframeLoaded && (
          <div className="iframe-loader flex justify-center items-center ">
            <span className="loading loading-dots text-6xl text-white"></span>
          </div>
        )}

        <div className="iframe-wrapper">
          <iframe
            src="https://deploy-preview-384--module-plaqueimmat.netlify.app/361?iframe=1"
            onLoad={() => setIframeLoaded(true)}
            className={`iframe-content ${iframeLoaded ? "loaded" : ""}`}
          />
        </div>
        <a
          href="https://module.plaqueimmat.fr/?aff=cc58d6de-e03b-45b5-b678-0f6103f8d0e6"
          target="_blank"
          rel="noopener noreferrer"
          className="module-btn"
        >
          <i className="fas fa-cog cta-cog"></i> Accéder au module complet{" "}
          <i className="fas fa-arrow-right cta-arrow"></i>
        </a>
      </div>
    </section>
  );
}
