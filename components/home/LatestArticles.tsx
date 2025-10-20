// components/home/LatestArticles.tsx
'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchArticles, type Article } from '@/lib/api'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function LatestArticles() {
  const { data: articlesData, isLoading, error } = useQuery({
    queryKey: ['articles', 'latest'],
    queryFn: () => fetchArticles({ page: 1, per_page: 3 })
  })

  const articles: Article[] = articlesData?.data || []

  // Handle error state
  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <div className="bg-red-50 rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              Gagal memuat artikel
            </h3>
            <p className="text-red-600">
              Silakan refresh halaman atau coba lagi nanti
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Artikel Terbaru
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Update terbaru seputar bekam, kesehatan, dan perkembangan organisasi
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card animate-pulse">
                <div className="aspect-video bg-gray-200 rounded-t-2xl"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded mb-4 w-1/2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="card group"
                >
                  <Link href={`/artikel/${article.slug}`}>
                    <div className="aspect-video relative overflow-hidden rounded-t-2xl">
                      {article.featured_image ? (
                        <Image
                          src={article.featured_image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center">
                          <div className="text-emerald-600 text-4xl font-bold">PB</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.published_at).toLocaleDateString('id-ID')}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors">
                        Baca selengkapnya
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <Link 
                href="/artikel"
                className="btn-secondary"
              >
                Lihat Semua Artikel
              </Link>
            </motion.div>
          </>
        )}
      </div>
    </section>
  )
}