// components/layout/Footer.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const footerSections = [
  {
    title: 'Tentang Kami',
    links: [
      { name: 'Sejarah', href: '/tentang' },
      { name: 'Visi & Misi', href: '/tentang#visi-misi' },
      { name: 'Struktur Organisasi', href: '/tentang#struktur' },
      { name: 'Sertifikasi', href: '/tentang#sertifikasi' },
    ]
  },
  {
    title: 'Layanan',
    links: [
      { name: 'Verifikasi Sertifikat', href: '/verifikasi-sertifikat' },
      { name: 'Cari Praktisi', href: '/cari-praktisi' },
      { name: 'Pendaftaran Anggota', href: '/daftar' },
      { name: 'Artikel & Edukasi', href: '/artikel' },
    ]
  },
  {
    title: 'Dukungan',
    links: [
      { name: 'Pusat Bantuan', href: '/bantuan' },
      { name: 'Kontak Kami', href: '/kontak' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ]
  }
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Image 
                src="/images/pbi-logos.png" 
                alt="Perkumpulan Bekam Indonesia" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <div className="font-bold text-white">Perkumpulan Bekam</div>
                <div className="text-emerald-300 text-xs -mt-1">Indonesia</div>
              </div>
            </Link>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Organisasi resmi praktisi bekam Indonesia yang berkomitmen membangun 
              standar profesional dalam praktik bekam untuk melayani masyarakat 
              dengan aman dan terpercaya.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@bekam-indonesia.org</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Perkumpulan Bekam Indonesia. All rights reserved.
            </div>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}