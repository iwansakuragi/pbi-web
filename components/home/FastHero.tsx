// components/home/FastHero.tsx
'use client'

import { ArrowRight, Play, Award, Users } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function FastHero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium">
                <Award className="w-4 h-4" />
                Organisasi Resmi Praktisi Bekam Indonesia
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Standar{' '}
                <span className="text-blue-600">Profesional</span>{' '}
                Praktik Bekam
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Mewujudkan praktik bekam yang aman, terpercaya, dan berstandar nasional 
                melalui sertifikasi dan pengembangan kompetensi.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 text-slate-600">
              <div>
                <div className="text-2xl font-bold text-slate-900">1,234+</div>
                <div className="text-sm">Anggota</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">5,678+</div>
                <div className="text-sm">Sertifikat</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">34</div>
                <div className="text-sm">Provinsi</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/verifikasi-sertifikat"
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-4 transition-colors duration-200"
              >
                Verifikasi Sertifikat
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="inline-flex items-center justify-center gap-3 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold rounded-lg px-8 py-4 transition-colors duration-200"
              >
                <Play className="w-5 h-5" />
                Tonton Profil
              </button>
            </div>
          </div>

          {/* Right Content - Simple Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Bergabung Sekarang</h3>
                <p className="text-slate-600">Dapatkan manfaat keanggotaan eksklusif</p>
              </div>

              <div className="space-y-4">
                {[
                  'Sertifikasi nasional',
                  'Pelatihan berkala', 
                  'Jaringan profesional',
                  'Dukungan komunitas'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/daftar"
                className="block w-full bg-slate-900 hover:bg-slate-800 text-white text-center font-semibold rounded-lg py-4 transition-colors duration-200"
              >
                Daftar Menjadi Anggota
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <div className="relative w-full max-w-4xl mx-4">
            <div className="aspect-video bg-black rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/-ZqW1QNtKbw?autoplay=1&rel=0"
                title="Profil Persatuan Bekam Indonesia"
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-slate-200 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  )
}