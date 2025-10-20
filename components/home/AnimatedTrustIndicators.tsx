// components/home/AnimatedTrustIndicators.tsx
'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchStatistics } from '@/lib/api'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Users, Award, MapPin, Shield, Heart } from 'lucide-react'

// Komponen AnimatedCounter yang aman untuk SSR
function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [isInView, setIsInView] = useState(false)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest: number) => Math.round(latest))
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: duration,
        ease: "easeOut"
      })
      return () => controls.stop()
    }
  }, [count, value, isInView, duration])

  return <motion.span ref={ref}>{isInView ? rounded : 0}</motion.span>
}

export function AnimatedTrustIndicators() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['statistics'],
    queryFn: fetchStatistics,
    staleTime: 5 * 60 * 1000
  })

  const indicators = [
    {
      icon: Users,
      label: 'Anggota Aktif',
      value: stats?.total_members ?? 1234,
      suffix: '+',
      color: 'emerald'
    },
    {
      icon: Award,
      label: 'Sertifikat Diterbitkan',
      value: stats?.total_certificates ?? 5678,
      suffix: '+',
      color: 'blue'
    },
    {
      icon: MapPin,
      label: 'Provinsi',
      value: stats?.total_provinces ?? 34,
      suffix: '',
      color: 'purple'
    },
    {
      icon: Heart,
      label: 'Tingkat Kepuasan',
      value: 99,
      suffix: '%',
      color: 'rose'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern - Static */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dipercaya oleh{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Ribuan Praktisi
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Bergabung dengan jaringan praktisi bekam terbesar dan terpercaya di Indonesia
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-20 h-20 bg-${item.color}-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-${item.color}-200 transition-colors relative`}
              >
                <item.icon className={`w-10 h-10 text-${item.color}-600`} />
              </motion.div>
              
              {isLoading ? (
                <div className="h-8 bg-gray-200 rounded-lg animate-pulse mx-auto mb-2 w-20"></div>
              ) : (
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.5 + index * 0.1
                  }}
                >
                  <AnimatedCounter value={item.value} />
                  {item.suffix}
                </motion.div>
              )}
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-gray-600 font-medium"
              >
                {item.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}