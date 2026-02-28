import Hero from '@/components/Hero'
import ToolCounter from '@/components/ToolCounter'
import BeforeAfter from '@/components/BeforeAfter'
import ToolDashboard from '@/components/ToolDashboard'
import Testimonials from '@/components/Testimonials'
import PricingTable from '@/components/PricingTable'
import Roadmap from '@/components/Roadmap'
import Newsletter from '@/components/Newsletter'
import Profile from '@/components/Profile'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#3D2B1F]">
      <Navbar />
      <Hero />

      <ScrollReveal>
        <ToolCounter />
      </ScrollReveal>

      <ScrollReveal>
        <BeforeAfter />
      </ScrollReveal>

      {/* BiNDup-style accent band */}
      <div className="h-2 bg-gradient-to-r from-[#FF6B35] via-[#F5A623] to-[#FF6B35]" />

      <ScrollReveal>
        <ToolDashboard />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      {/* BiNDup-style CTA band */}
      <div className="bg-gradient-to-r from-[#FF6B35] to-[#F5A623] py-12 px-6 text-center text-white">
        <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">早期加入で永久据え置き</p>
        <p className="text-3xl font-black md:text-4xl mb-4">今なら月額<span className="text-white">¥980</span></p>
        <a
          href="https://note.com/yuyukuma_gasoji/membership"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-sm font-black text-[#FF6B35] shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        >
          <span className="sm:hidden">今すぐ参加 →</span><span className="hidden sm:inline">メンバーシップに参加 →</span>
        </a>
      </div>

      <ScrollReveal>
        <PricingTable />
      </ScrollReveal>

      <ScrollReveal>
        <Roadmap />
      </ScrollReveal>

      <ScrollReveal>
        <Newsletter />
      </ScrollReveal>

      <ScrollReveal>
        <Profile />
      </ScrollReveal>

      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      <FinalCTA />
      <Footer />
    </main>
  )
}
