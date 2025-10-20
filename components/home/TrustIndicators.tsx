// components/home/TrustIndicators.tsx
'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchStatistics } from '@/lib/api'
import { motion } from 'framer-motion'
import { Users, Award, MapPin, Shield } from 'lucide-react'

export function TrustIndicators() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['statistics'],
    queryFn: fetchStatistics,
    staleTime: 5 * 60 * 1000 // 5 minutes
  })

  const indicators = [
    {
      icon: Users,
      label: 'Anggota Aktif',
      value: stats?.total_members ?? 0,
      suffix: '+'
    },
    {
      icon: Award,
      label: 'Sertifikat Diterbitkan',
      value: stats?.total_certificates ?? 0,
      suffix: '+'
    },
    {
      icon: MapPin,
      label: 'Provinsi',
      value: stats?.total_provinces ?? 0,
      suffix: ''
    },
    {
      icon: Shield,
      label: 'Kota Terjangkau',
      value: stats?.total_cities ?? 0,
      suffix: '+'
    }
  ]

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dipercaya oleh Ribuan Praktisi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bergabung dengan jaringan praktisi bekam terbesar dan terpercaya di Indonesia
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <item.icon className="w-8 h-8 text-emerald-600" />
              </div>
              
              {isLoading ? (
                <div className="h-8 bg-gray-200 rounded-lg animate-pulse mx-auto mb-2 w-20"></div>
              ) : (
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {item.value}
                  {item.suffix}
                </div>
              )}
              
              <div className="text-gray-600 font-medium">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}