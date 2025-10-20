// components/home/ImmersiveHero.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Users } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Komponen particles yang terpisah - hanya render di client
function FloatingParticles() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }))

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20"
          style={{
            left: `${particle.x}vw`,
            top: `${particle.y}vh`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </>
  )
}

export function ImmersiveHero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20">
      {/* Background dengan gradient yang lebih subtle */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-blue-900/95 to-purple-900/95"></div>
        
        {/* Background pattern yang lebih halus */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        {/* Floating particles */}
        <FloatingParticles />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content - Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20 mb-8"
              >
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm">Perkumpulan Bekam Indonesia</span>
            </motion.div>

            {/* Main Heading dengan spacing yang cukup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Standar Profesional{' '}
                <span className="bg-gradient-to-r from-emerald-300 to-amber-300 bg-clip-text text-transparent">
                  Praktik Bekam
                </span>{' '}
                Indonesia
              </h1>
              
              <p className="text-xl text-emerald-100 leading-relaxed max-w-2xl">
                Bergabung dengan komunitas praktisi bekam tersertifikasi terbesar di Indonesia. 
                Dapatkan pengakuan resmi, akses pelatihan berkelanjutan, dan tingkatkan kepercayaan pasien.
              </p>
            </motion.div>

            {/* CTA Buttons langsung setelah main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/verifikasi-sertifikat"
                  className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-200 group min-w-[200px]"
                >
                  Verifikasi Sertifikat
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/daftar"
                  className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold rounded-xl px-8 py-4 transition-all duration-200 group min-w-[200px]"
                >
                  Daftar Menjadi Anggota
                  <Users className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Video Section - Kanan */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Video Thumbnail Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900/50 backdrop-blur-sm border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-emerald-500/20 to-blue-600/20 flex items-center justify-center relative">
                {/* Video Thumbnail */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <img 
                    src="https://img.youtube.com/vi/-ZqW1QNtKbw/maxresdefault.jpg"
                    alt="Video Profil Persatuan Bekam Indonesia"
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                
                {/* Play Button Overlay */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsVideoPlaying(true)}
                  className="relative z-10 bg-white/20 backdrop-blur-md rounded-full p-5 border border-white/30 hover:bg-white/30 transition-all duration-300 group"
                >
                  <Play className="w-6 h-6 text-white fill-current ml-0.5" />
                  
                  {/* Ripple Effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-white rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.button>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100"
            >
              <div className="text-center">
                <div className="text-sm font-bold text-emerald-600">+25%</div>
                <div className="text-xs text-gray-600">Pertumbuhan</div>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100"
            >
              <div className="text-center">
                <div className="text-sm font-bold text-blue-600">98%</div>
                <div className="text-xs text-gray-600">Kepuasan</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {isClient && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/70"
          >
            <span className="text-sm mb-2 font-medium">Scroll untuk menjelajahi</span>
            <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-white/60 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Video Modal */}
      {isVideoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setIsVideoPlaying(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* YouTube Video Embed */}
            <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/-ZqW1QNtKbw?autoplay=1&rel=0"
                title="Profil Persatuan Bekam Indonesia"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Close Button */}
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
            >
              <span className="text-2xl">×</span>
            </button>
            
            {/* Video Info */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold mb-2">Profil Persatuan Bekam Indonesia</h3>
              <p className="text-white/80">Video pengenalan organisasi dan visi kami dalam membangun standar profesional praktik bekam di Indonesia</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}