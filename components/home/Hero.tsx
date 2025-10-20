// components/home/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Users, Award } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-20 md:py-28">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
      
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-emerald-100">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">
                  Organisasi Resmi Praktisi Bekam Indonesia
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Bersama Membangun{' '}
                <span className="text-emerald-600">Standar Profesional</span>{' '}
                Praktik Bekam
              </h1>

              {/* Subheading */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Bergabung dengan ribuan praktisi bekam tersertifikasi yang berkomitmen 
                memberikan layanan terbaik, terpercaya, dan sesuai standar kesehatan 
                di seluruh Indonesia.
              </p>

              {/* Key Benefits */}
              <div className="grid sm:grid-cols-3 gap-4 py-4">
                {[
                  { icon: Users, text: 'Komunitas Profesional' },
                  { icon: Award, text: 'Sertifikasi Resmi' },
                  { icon: Shield, text: 'Standar Berkualitas' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/verifikasi-sertifikat"
                  className="btn-primary group"
                >
                  Verifikasi Sertifikat
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/cari-praktisi"
                  className="btn-secondary"
                >
                  Cari Praktisi Terdekat
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <Users className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-2">Praktisi Bekam Tersertifikasi</h3>
                  <p className="opacity-90">Standar tinggi untuk pelayanan terbaik</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">1,234+</div>
                <div className="text-sm text-gray-600">Anggota Aktif</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">34</div>
                <div className="text-sm text-gray-600">Provinsi</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}