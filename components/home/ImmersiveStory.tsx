// components/home/ImmersiveStory.tsx
'use client'

import { motion } from 'framer-motion'
import { Target, Users, Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link' // Tambahkan import ini

export function ImmersiveStory() {
  const missions = [
    {
      icon: Target,
      title: "Misi Kami",
      description: "Membangun standar profesional praktik bekam di Indonesia melalui sertifikasi dan pelatihan berkelanjutan",
      color: "emerald"
    },
    {
      icon: Users,
      title: "Komunitas",
      description: "Menghubungkan praktisi bekam dalam jaringan profesional untuk berbagi ilmu dan pengalaman",
      color: "blue"
    },
    {
      icon: Heart,
      title: "Pelayanan",
      description: "Memastikan masyarakat mendapatkan layanan bekam yang aman, nyaman, dan berkualitas",
      color: "rose"
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      {/* Background static pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23047651' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-8">
                Lebih dari Sekadar{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Sertifikasi
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Kami membangun <span className="text-emerald-600 font-semibold">ekosistem profesional</span> 
                {' '}yang mendukung perkembangan praktisi bekam Indonesia menuju standar 
                pelayanan terbaik.
              </p>
            </motion.div>

            {/* Mission Cards */}
            <div className="space-y-6">
              {missions.map((mission, index) => (
                <motion.div
                  key={mission.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-${mission.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <mission.icon className={`w-6 h-6 text-${mission.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {mission.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {mission.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className='mb-12'
            >
              <Link 
                href="/tentang"
                className="btn-primary group"
              >
                Pelajari Cerita Lengkap Kami
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <Users className="w-20 h-20 mx-auto mb-6 opacity-80" />
                  <h3 className="text-3xl font-bold mb-4">Komunitas yang Berkembang</h3>
                  <p className="text-lg opacity-90">
                    Bersama membangun masa depan bekam Indonesia
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}