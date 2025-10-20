// components/home/UpcomingEvents.tsx
'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchEvents, type Event } from '@/lib/api'
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import Link from 'next/link'

export function UpcomingEvents() {
  const { data: eventsData, isLoading, error } = useQuery({
    queryKey: ['events', 'upcoming'],
    queryFn: () => fetchEvents({ upcoming: true, per_page: 2 })
  })

  const events: Event[] = eventsData?.data || []

  // Handle error state
  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <div className="bg-red-50 rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              Gagal memuat event
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
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Event Mendatang
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Workshop, seminar, dan kegiatan komunitas terbaru
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="card animate-pulse">
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-4 w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-1/2"></div>
                  <div className="h-10 bg-gray-200 rounded mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : events.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="card group"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2">
                          {event.description}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0 ml-4">
                        <div className="bg-emerald-100 text-emerald-700 rounded-lg px-3 py-2 text-center">
                          <div className="text-sm font-medium">
                            {new Date(event.date).toLocaleDateString('id-ID', { 
                              day: 'numeric',
                              month: 'short'
                            })}
                          </div>
                          <div className="text-xs">
                            {new Date(event.date).getFullYear()}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString('id-ID', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      {event.registration_link ? (
                        <a
                          href={event.registration_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm"
                        >
                          Daftar Sekarang
                        </a>
                      ) : (
                        <Link 
                          href={`/event/${event.slug}`}
                          className="btn-primary text-sm"
                        >
                          Detail Event
                        </Link>
                      )}
                      <Link 
                        href={`/event/${event.slug}`}
                        className="btn-secondary text-sm"
                      >
                        Info Lengkap
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <Link 
                href="/event"
                className="btn-secondary"
              >
                Lihat Semua Event
              </Link>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tidak ada event mendatang
              </h3>
              <p className="text-gray-600">
                Nantikan event-event menarik dari kami
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}