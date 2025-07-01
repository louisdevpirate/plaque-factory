"use client";
import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";
import React from 'react';

export default function FaqSection() {
  const theme = useTheme();
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    setOpenIndexes(
      (prevIndexes) =>
        prevIndexes.includes(index)
          ? prevIndexes.filter((i) => i !== index) // Ferme la question si déjà ouverte
          : [...prevIndexes, index] // Ouvre la question si elle est fermée
    );
  };

  return (
    <section id="faq" className="faq-section relative bg-[url('/images/bg/bg.png')] bg-fixed bg-cover">      
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-20 items-start">
        <div className="w-full md:w-1/2 h-full">
          <div className="relative h-full z-40">
            <Image
              src="/images/illustration.png"
              alt="Illustration FAQ"
              width={600}
              height={600}
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-fit z-40">
        <div className="badge badge-sm mb-4 rounded-2xl"><i className="fa fa-question-circle"></i>FAQ</div>
        <h2 className="font-extralight text-6xl mb-8 text-left">Questions fréquemment posées</h2>
          <div className="faq-list h-fit">
            {theme.faq.items.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${
                  openIndexes.includes(index) ? "open" : ""
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleQuestion(index)}
                  className="faq-question"
                >
                  <span>{item.question}</span>
                  <span className="faq-toggle">
                    {openIndexes.includes(index) ? "−" : "+"}
                  </span>
                </button>

                {/* Réponse */}
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-white/70 to-white pointer-events-none z-0" />
    </section>
  );
}
