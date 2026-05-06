"use client";

import { useState } from 'react'
import { getCategoryFAQ } from '@/data/categoryFAQ'
import { QuestionIcon } from './Icons'
import StructuredData from './StructuredData'

interface CategoryFAQSectionProps {
  slug: string
  title: string
}

export default function CategoryFAQSection({ slug, title }: CategoryFAQSectionProps) {
  const faqItems = getCategoryFAQ(slug)
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  if (faqItems.length === 0) return null

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <section className="bg-gray-900 py-12 md:py-16 text-white">
      <StructuredData type="FAQPage" data={{ faqItems }} />
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1 text-xs font-medium bg-white/10 border border-white/20 rounded-full px-3 py-1">
            <QuestionIcon className="w-3 h-3" />
            FAQ
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Questions fréquentes sur les{' '}
          <span className="italic">{title.toLowerCase()}</span>
        </h2>
        <div
          itemScope
          itemType="https://schema.org/FAQPage"
          className="space-y-2"
        >
          {faqItems.map((item, index) => (
            <div
              key={index}
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Question"
              className="border border-white/20 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/5 transition-colors"
              >
                <span itemProp="name" className="font-medium text-sm md:text-base pr-4">
                  {item.question}
                </span>
                <span className="flex-shrink-0 text-white/60 text-lg leading-none">
                  {openIndexes.includes(index) ? '−' : '+'}
                </span>
              </button>
              {openIndexes.includes(index) && (
                <div
                  itemProp="acceptedAnswer"
                  itemScope
                  itemType="https://schema.org/Answer"
                  className="px-5 pb-4 border-t border-white/10"
                >
                  <p itemProp="text" className="text-white/80 text-sm leading-relaxed pt-3">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
