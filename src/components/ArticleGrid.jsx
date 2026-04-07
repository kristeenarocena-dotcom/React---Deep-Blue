import { Fish } from 'lucide-react'
import ArticleCard from './ArticleCard'

function MarineLife({ articles }) {
  // Filter only Marine Life + Deep Sea category articles for this section
  const marineArticles = articles.filter(
    (a) => a.category === 'Marine Life' || a.category === 'Deep Sea'
  )

  return (
    <section id="marine" className="bg-[#f8fafc] px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-100">
            <Fish size={20} className="text-cyan-600" />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">
              Marine Life
            </h2>
            <p className="text-sm text-slate-500">
              Discover the incredible creatures of our oceans
            </p>
          </div>
        </div>

        {/* Cards Grid — same card component, same sizing */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {marineArticles.map((article, index) => (
            <ArticleCard key={index} article={article} variant="marine" />
          ))}
        </div>

      </div>
    </section>
  )
}

export default MarineLife