// app/page.tsx
import { Hero } from '@/components/home/Hero'
import { TrustIndicators } from '@/components/home/TrustIndicators'
import { QuickAccess } from '@/components/home/QuickAccess'
import { LatestArticles } from '@/components/home/LatestArticles'
import { UpcomingEvents } from '@/components/home/UpcomingEvents'
import { Testimonials } from '@/components/home/Testimonials'
import { CTA } from '@/components/home/CTA'

export default async function HomePage() {
  return (
    <>
      {/* Hero Section - Human Centric */}
      <Hero />
      
      {/* Trust Indicators - Purpose Driven */}
      <TrustIndicators />
      
      {/* Quick Access - Technology Driven */}
      <QuickAccess />
      
      {/* Latest Articles - Content Marketing */}
      <LatestArticles />
      
      {/* Upcoming Events - Community Building */}
      <UpcomingEvents />
      
      {/* Testimonials - Social Proof */}
      <Testimonials />
      
      {/* Final CTA - Conversion Focused */}
      <CTA />
    </>
  )
}