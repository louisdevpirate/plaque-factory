"use client";
import { useState, useEffect } from "react";
import React from "react";

export default function PersonalizationSection() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!iframeLoaded) {
      const start = Date.now();
      interval = setInterval(() => {
        const elapsed = Date.now() - start;
        const percentage = Math.min((elapsed / 5000) * 100, 100);
        setProgress(Math.floor(percentage));
      }, 100);
    } else {
      setProgress(100);
    }

    return () => clearInterval(interval);
  }, [iframeLoaded, retryKey]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!iframeLoaded) {
        console.log("Retrying iFrame load...");
        setRetryKey((prev) => prev + 1);
      }
    }, 5000); // Retry après 5s si non chargé

    return () => clearTimeout(timer);
  }, [iframeLoaded, retryKey]);

  return (
    <section
      id="personnalisation"
      className="section-personnalisation bg-[url('/images/bg/bg.webp')] bg-cover py-10 md:pt-14 text-center border-t border-b"
    >
      <div className="personnalisation-container max-w-7xl m-auto">
        <div className="max-w-2xl text-left lg:text-center mx-auto">
            <div className="badge badge-sm mb-4 rounded-2xl">
              <i className="fa fa-magic"></i>Personnalisationgjkern
            </div>
          <h2 className="text-left lg:text-center">
            Personnalisez votre plaque{" "}
            <span className="block">
              en toute <span className="text-[#FFD713]">simplicité</span>
            </span>
          </h2>
          <div className="max-w-xl mx-auto leading-relaxed mt-4 lg:text-center">
            <p>
              Votre plaque d'immatriculation en 3 clics : entrez votre numéro, votre département
              et ajoutez au panier, c&apos;est parti !
              <span className="block">
                Envie de plus d'options de personnalisations ? Cliquez sur
                &ldquo;Plus d’options&rdquo; pour tout personnaliser selon vos
                envies.
              </span>
            </p>
          </div>
        </div>

        {!iframeLoaded && (
          <div className="iframe-loader flex flex-col justify-center items-center gap-4 absolute inset-0 z-10 bg-white/80">
            <div
              className="radial-progress text-black"
              style={{ "--value": progress } as React.CSSProperties}
              aria-valuenow={progress}
              role="progressbar"
            >
              {progress}%
            </div>
            <span className="text-sm text-gray-500">
              Chargement du module...
            </span>
          </div>
        )}

        <div className="iframe-wrapper relative mt-8">
          <iframe
            key={retryKey}
            src="https://deploy-preview-384--module-plaqueimmat.netlify.app/361?iframe=1"
            onLoad={() => setIframeLoaded(true)}
            className={`iframe-content${
              iframeLoaded ? " loaded bg-white shadow-md" : ""
            } w-full border-none`}
            allowFullScreen
            title="Module de personnalisation de plaque d'immatriculation"
          />
        </div>
      </div>
    </section>
  );
}
