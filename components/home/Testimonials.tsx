// components/home/Testimonials.tsx
'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Ahmad Rizki",
    location: "Jakarta Selatan",
    role: "Praktisi Bekam",
    image: "/images/testimonials/1.jpg",
    content: "Bergabung dengan Persatuan Bekam Indonesia membuka banyak peluang. Sertifikasi yang diakui membuat pasien lebih percaya dan praktik semakin berkembang.",
    rating: 5
  },
  {
    name: "Siti Fatimah",
    location: "Bandung",
    role: "Terapis Bekam",
    image: "/images/testimonials/2.jpg",
    content: "Pelatihan dan workshop yang diselenggarakan sangat bermanfaat. Saya bisa terus update ilmu dan teknik bekam yang aman dan profesional.",
    rating: 5
  },
  {
    name: "Budi Santoso",
    location: "Surabaya",
    role: "Praktisi Senior",
    image: "/images/testimonials/3.jpg",
    content: "Organisasi yang sangat profesional. Proses sertifikasi transparan dan komunitasnya sangat supportive untuk perkembangan bersama.",
    rating: 5
  }
]

export function Testimonials() {
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
            Apa Kata Anggota Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pengalaman langsung dari praktisi bekam yang telah bergabung dengan komunitas kami
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card group relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-emerald-600" />
              </div>

              <div className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                    <div className="text-sm text-emerald-600">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              4.9/5
            </div>
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-gray-600">
              Rating rata-rata dari <span className="font-semibold text-emerald-600">500+</span> ulasan anggota
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}