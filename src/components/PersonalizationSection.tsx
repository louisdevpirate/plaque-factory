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
      let start = Date.now();
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
        setRetryKey(prev => prev + 1);
      }
    }, 5000); // Retry après 5s si non chargé

    return () => clearTimeout(timer);
  }, [iframeLoaded, retryKey]);

  return (
    <section id="personnalisation" className="section-personnalisation bg-[url('/images/bg/bg.png')] bg-cover pt-20 pb-40 text-center border-t border-b">
      <div className="personnalisation-container max-w-7xl m-auto px-4">
        <a className="module-btn">
          <div className="badge badge-sm mb-4 rounded-2xl">
            <i className="fa fa-magic"></i>Personnalisation
          </div>
        </a>
        <h2 className="">Personnalise ta plaque à ton image !</h2>
        <span className="">
          Inscris ton texte, et si tu veux pousser la personnalisation encore plus loin, <br />
          tu peux cliquer sur le bouton ci-dessous
        </span>
        {!iframeLoaded && (
          <div className="iframe-loader flex flex-col justify-center items-center gap-4 min-h-[60vh]">
            <div
              className="radial-progress text-black"
              style={{ "--value": progress } as React.CSSProperties }
              aria-valuenow={progress}
              role="progressbar"
            >
              {progress}%
            </div>
            <span className="text-sm text-gray-500">Chargement du module...</span>
          </div>
        )}

        <div className="iframe-wrapper">
          <iframe
            key={retryKey}
            src="https://deploy-preview-384--module-plaqueimmat.netlify.app/361?iframe=1"
            onLoad={() => setIframeLoaded(true)}
            className={`iframe-content${iframeLoaded ? " loaded bg-white my-6 shadow-md" : ""}`}
          />
        </div>
      </div>
    </section>
  );
}
