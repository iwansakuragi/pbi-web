// components/home/CTA.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Award, Shield } from 'lucide-react'
import Link from 'next/link'

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-blue-700">
      <div className="container-custom">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-8">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Bergabung Sekarang</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Tingkatkan Kredibilitas{' '}
              <span className="text-amber-300">Praktik Bekam</span> Anda
            </h2>

            {/* Description */}
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Jadilah bagian dari komunitas praktisi bekam tersertifikasi terbesar di Indonesia. 
              Dapatkan pengakuan resmi, akses pelatihan berkelanjutan, dan tingkatkan kepercayaan pasien.
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: Users,
                  title: 'Komunitas Profesional',
                  description: 'Network dengan praktisi se-Indonesia'
                },
                {
                  icon: Award,
                  title: 'Sertifikasi Resmi',
                  description: 'Diakui secara nasional'
                },
                {
                  icon: Shield,
                  title: 'Standar Berkualitas',
                  description: 'Mengikuti protokol kesehatan'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-emerald-100 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/daftar"
                className="btn-primary bg-amber-500 hover:bg-amber-600 text-white border-0 group"
              >
                Daftar Sekarang
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/tentang"
                className="btn-secondary bg-transparent border-white text-white hover:bg-white/10"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>

            {/* Trust Text */}
            <p className="text-emerald-200 text-sm mt-8">
              Bergabung dengan 1,234+ praktisi tersertifikasi di seluruh Indonesia
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}