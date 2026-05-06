import { getCategoryContent } from '@/data/categoryContent'
import { CheckIcon } from './Icons'

interface CategoryInfoBlockProps {
  slug: string
  title: string
}

export default function CategoryInfoBlock({ slug, title }: CategoryInfoBlockProps) {
  const content = getCategoryContent(slug)
  if (!content) return null

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Tout savoir sur les {title.toLowerCase()}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-base">
            {content.intro}
          </p>
          <ul className="space-y-2 mb-6">
            {content.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700 text-sm">
                <span className="mt-0.5 flex-shrink-0 text-green-500">
                  <CheckIcon />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          {content.note && (
            <p className="text-sm text-gray-500 bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
              {content.note}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
