"use client";
import { useState, useEffect, memo, useCallback, useMemo } from "react";
import React from "react";
import LazyBackgroundSection from "./LazyBackgroundSection";
import Image from "next/image";
import { MagicIcon } from "./Icons";

const IFRAME_LOAD_TIMEOUT = 5000;
const PROGRESS_UPDATE_INTERVAL = 100;

function PersonalizationSectionLazy() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
  const [progress, setProgress] = useState(0);

  // Memoize iframe URL
  const iframeUrl = useMemo(
    () =>
      "https://deploy-preview-384--module-plaqueimmat.netlify.app/361?iframe=1",
    []
  );

  // Memoize progress style
  const progressStyle = useMemo(
    () => ({ "--value": progress } as React.CSSProperties),
    [progress]
  );

  // Memoize iframe class
  const iframeClassName = useMemo(
    () =>
      `iframe-content${
        iframeLoaded ? " loaded bg-white shadow-md" : ""
      } w-full border-none`,
    [iframeLoaded]
  );

  // Memoize callbacks
  const handleIframeLoad = useCallback(() => {
    setIframeLoaded(true);
  }, []);

  const retryIframeLoad = useCallback(() => {
    console.log("Retrying iFrame load...");
    setRetryKey((prev) => prev + 1);
  }, []);

  // Progress effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!iframeLoaded) {
      const start = Date.now();
      interval = setInterval(() => {
        const elapsed = Date.now() - start;
        const percentage = Math.min((elapsed / IFRAME_LOAD_TIMEOUT) * 100, 100);
        setProgress(Math.floor(percentage));
      }, PROGRESS_UPDATE_INTERVAL);
    } else {
      setProgress(100);
    }

    return () => clearInterval(interval);
  }, [iframeLoaded, retryKey]);

  // Retry effect
  useEffect(() => {
    if (iframeLoaded) return;

    const timer = setTimeout(() => {
      if (!iframeLoaded) {
        retryIframeLoad();
      }
    }, IFRAME_LOAD_TIMEOUT);

    return () => clearTimeout(timer);
  }, [iframeLoaded, retryKey, retryIframeLoad]);

  return (
    <LazyBackgroundSection
      id="personnalisation"
      backgroundImage="/images/bg/bg3.webp"
      className="section-personnalisation bg-cover py-10 md:pt-14 text-center border-b relative"
      threshold={0.1}
      rootMargin="50px"
    >
      <div className="personnalisation-container max-w-7xl m-auto">
        <div className="max-w-2xl md:text-center mx-auto">
          <div className="badge badge-sm border-white/30 mb-4 rounded-2xl">
            <MagicIcon className="w-3 h-3" />
            Personnalisation
          </div>
          <ul className="steps mt-6 w-full max-w-5xl mx-auto">
            <li className="step step-primary text-xs md:text-sm text-left md:text-center">
              Personnalisez grâce à un <br />
              large choix d'options
            </li>
            <li className="step text-xs md:text-sm md:text-center">
              Sélectionnez des finitions <br />
              de haute qualité
            </li>
            <li className="step text-xs md:text-sm md:text-center">
              Validez et recevez vos plaques <br />
              en un temps record !
            </li>
          </ul>
        </div>

        {!iframeLoaded && (
          <LoadingOverlay progress={progress} progressStyle={progressStyle} />
        )}

        <div className="iframe-wrapper relative mt-8">
          <iframe
            key={retryKey}
            src={iframeUrl}
            onLoad={handleIframeLoad}
            className={iframeClassName}
            allowFullScreen
            loading="lazy"
            title="Module de personnalisation de plaque d'immatriculation"
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-6 mt-8 max-w-3xl mx-auto">
        <div>
          <Image
            src="/images/marianne.avif"
            alt="Plaque Homologuées"
            className="hover:scale-105"
            loading="lazy"
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-col gap-2 italic text-left">
          <p className="text-[0.6rem]">
            Agréé et Habilité par le Ministère de l'Intérieur et le Trésor
            public
          </p>
          <div className="flex flex-col text-[0.6rem]">
            <p>
              Agrément Trésor Public <span className="font-bold">n°59157</span>
            </p>
            <p>
              Habilitation Préfectorale{" "}
              <span className="font-bold">n°245306</span>
            </p>
          </div>
        </div>
      </div>
    </LazyBackgroundSection>
  );
}

// Memoized loading overlay component
const LoadingOverlay = memo(
  ({
    progress,
    progressStyle,
  }: {
    progress: number;
    progressStyle: React.CSSProperties;
  }) => (
    <div className="iframe-loader flex flex-col justify-center items-center gap-4 absolute inset-0 z-10 bg-white/80">
      <div
        className="radial-progress text-black"
        style={progressStyle}
        aria-valuenow={progress}
        role="progressbar"
      >
        {progress}%
      </div>
      <span className="text-sm text-gray-500">Chargement du module...</span>
    </div>
  )
);

LoadingOverlay.displayName = "LoadingOverlay";

export default memo(PersonalizationSectionLazy);
