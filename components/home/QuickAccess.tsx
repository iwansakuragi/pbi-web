// components/home/QuickAccess.tsx
'use client'

import { motion } from 'framer-motion'
import { Search, FileCheck, UserPlus, Info } from 'lucide-react'
import Link from 'next/link'

const quickLinks = [
  {
    icon: FileCheck,
    title: 'Verifikasi Sertifikat',
    description: 'Pastikan praktisi Anda tersertifikasi resmi',
    href: '/verifikasi-sertifikat',
    color: 'emerald'
  },
  {
    icon: Search,
    title: 'Cari Praktisi',
    description: 'Temukan praktisi terdekat di kota Anda',
    href: '/cari-praktisi',
    color: 'blue'
  },
  {
    icon: UserPlus,
    title: 'Daftar Anggota',
    description: 'Bergabung dengan komunitas profesional',
    href: '/daftar',
    color: 'amber'
  },
  {
    icon: Info,
    title: 'Info Sertifikasi',
    description: 'Pelajari proses sertifikasi kami',
    href: '/tentang#sertifikasi',
    color: 'purple'
  }
]

export function QuickAccess() {
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
            Akses Cepat Layanan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Semua yang Anda butuhkan dalam satu platform terintegrasi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link
                href={link.href}
                className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group h-full"
              >
                <div className={`w-12 h-12 bg-${link.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-${link.color}-200 transition-colors`}>
                  <link.icon className={`w-6 h-6 text-${link.color}-600`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {link.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {link.description}
                </p>
                
                <div className="mt-4 flex items-center text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors">
                  Akses sekarang
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}