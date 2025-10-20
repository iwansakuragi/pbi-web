// app/page.tsx
import { AnimatedTrustIndicators } from '@/components/home/AnimatedTrustIndicators'
import { ImmersiveStory } from '@/components/home/ImmersiveStory'
import { QuickAccess } from '@/components/home/QuickAccess'
import { LatestArticles } from '@/components/home/LatestArticles'
import { UpcomingEvents } from '@/components/home/UpcomingEvents'
import { Testimonials } from '@/components/home/Testimonials'
import { CTA } from '@/components/home/CTA'
// import { ProfessionalHero } from '@/components/home/ProfessionalHero'
import { ImmersiveHero } from '@/components/home/ImmersiveHero'

export default async function HomePage() {
  return (
    <>
      <ImmersiveHero />
      <AnimatedTrustIndicators />
      <ImmersiveStory />
      <QuickAccess />
      <LatestArticles />
      <UpcomingEvents />
      <Testimonials />
      <CTA />
    </>
  )
}