// components/home/ProfessionalHero.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Users, Award, Shield, MapPin, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export function ProfessionalHero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      
      {/* Background Elegant */}
      <div className="absolute inset-0">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95"></div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="text-white space-y-8">
            
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-slate-200">Organisasi Resmi Praktisi Bekam Indonesia</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Standar{' '}
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Profesional
                </span>{' '}
                Praktik Bekam Indonesia
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Mewujudkan praktik bekam yang aman, terpercaya, dan berstandar nasional 
                melalui sertifikasi dan pengembangan kompetensi berkelanjutan.
              </p>
            </motion.div>

            {/* Stats - Minimal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-8"
            >
              {[
                { number: '1,234+', label: 'Anggota' },
                { number: '5,678+', label: 'Sertifikat' },
                { number: '34', label: 'Provinsi' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link 
                href="/verifikasi-sertifikat"
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-4 transition-all duration-200 group"
              >
                Verifikasi Sertifikat
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="inline-flex items-center justify-center gap-3 bg-transparent border border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 font-semibold rounded-lg px-8 py-4 transition-all duration-200 group"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Tonton Profil
              </button>
            </motion.div>
          </div>

          {/* Right Content - Card Style */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700/50 p-8 space-y-6 shadow-2xl">
              
              {/* Certificate Preview */}
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6 border border-slate-600/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Sertifikat Resmi</h3>
                    <p className="text-slate-400 text-sm">Diakui Nasional</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex justify-between">
                    <span>Nomor Sertifikat</span>
                    <span className="text-blue-400">PB-2024-001234</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Masa Berlaku</span>
                    <span>2 Tahun</span>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg">Keunggulan Anggota</h4>
                <div className="grid gap-3">
                  {[
                    'Sertifikasi berstandar nasional',
                    'Akses pelatihan berkala',
                    'Jaringan praktisi seluruh Indonesia',
                    'Dukungan komunitas profesional'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Action */}
              <Link 
                href="/daftar"
                className="block w-full bg-slate-700 hover:bg-slate-600 text-white text-center font-semibold rounded-lg py-3 transition-colors duration-200"
              >
                Daftar Sekarang
              </Link>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-slate-400"
        >
          <span className="text-sm mb-2">Scroll untuk menjelajahi</span>
          <div className="w-5 h-8 border border-slate-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-0.5 h-2 bg-slate-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>

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
            <div className="aspect-video bg-black rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/-ZqW1QNtKbw?autoplay=1&rel=0"
                title="Profil Persatuan Bekam Indonesia"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-white transition-colors border border-slate-600"
            >
              <span className="text-xl">×</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}