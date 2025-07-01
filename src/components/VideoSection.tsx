import React from "react";

export default function VideoSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 text-center">
      <div className="badge badge-sm mb-2 rounded-2xl">
        <i className="fa fa-play"></i>Avis
      </div>
      <h2 className="">
        Découvrez notre<br />
        <span className="text-yellow-400 italic">savoir-faire</span> en action
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Plongez dans l'univers de La Bonne Plaque avec cette vidéo de présentation : fabrication, personnalisation et expédition rapide de vos plaques homologuées avec soin et précision.
      </p>
      <div className="overflow-hidden rounded-2xl shadow-md border border-gray-200 p-1 max-w-3xl mx-auto">
        <video
          src="/videos/ugc.mp4"
          autoPlay
          muted
          loop
          controls
          playsInline
          className="rounded-xl shadow-lg w-full max-w-4xl mx-auto"
        ></video>
      </div>
    </section>
  );
}