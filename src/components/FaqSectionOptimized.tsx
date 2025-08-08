"use client";
import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import React from "react";
import LazyBackgroundSection from "./LazyBackgroundSection";
import { QuestionIcon } from "./Icons";

export default function FaqSectionOptimized() {
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
    <LazyBackgroundSection
      id="faq"
      backgroundImage="/images/bg/bg-dark.webp"
      className="faq-section relative bg-cover py-10 md:py-14 text-white min-h-[50px]"
      threshold={0.1}
      rootMargin="100px"
    >
      <div className="absolute inset-0 bg-black/50 -z-0 pointer-events-none" />
      <div className="md:max-w-2xl lg:max-w-5xl mx-auto flex flex-col-reverse md:flex-row gap-10 items-center">
        <div className="w-full max-w-3xl h-fit z-40 text-left mx-auto">
          <div className="badge badge-sm mb-4 rounded-2xl border-white/30 text-white">
            <QuestionIcon className="w-3 h-3" />
            <span>FAQ</span>
          </div>
          <h2 className="text-left mb-8">
            <span className="italic">Questions</span> fréquemment posées
          </h2>
          <div
            className="faq-list h-fit border-white/30"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            {theme.faq?.items?.map(
              (item, index) =>
                item && (
                  <div
                    key={index}
                    className={`faq-item ${
                      openIndexes.includes(index) ? "open" : ""
                    }`}
                    itemProp="mainEntity"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="faq-question px-4 py-3 gap-5"
                    >
                      <span itemProp="name">{item?.question || ""}</span>
                      <span className="faq-toggle">
                        {openIndexes.includes(index) ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className="faq-answer"
                      itemProp="acceptedAnswer"
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <p itemProp="text">{item?.answer}</p>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </LazyBackgroundSection>
  );
}
