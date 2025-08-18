import { Button } from "@/components/ui/button"
import { Headphones } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

export function Hero() {
  const t = useTranslations('hero')
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-10" />
      {/* Rising sun gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at center bottom, rgba(246, 210, 102, 0.54) 0%, rgba(255, 221, 120, 0.15) 60%, transparent 100%)"
      }} />
      <div className="absolute inset-0 z-10">
        <Image src="/KK_banner.png" alt="Music Studio" fill className="object-cover object-bottom opacity-70" priority />
      </div>
      {/* Full white overlay to lighten background behind text */}
      <div className="absolute inset-0 z-20 bg-white/40 pointer-events-none" />

      <div className="relative z-20 text-center max-w-4xl mx-auto px-8">
        <p className="text-5xl md:text-7xl font-bold mb-6 bg-[#c6a16c] bg-clip-text text-transparent">
          KĀPJAM KALNĀ
        </p>
        <p className="text-xl md:text-2xl mb-8 text-gray-700">
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-[#c6a16c] hover:bg-[#b8956b] text-white text-lg px-8 py-4" asChild>
            <a href="#contact">
              <Headphones className="mr-2 h-5 w-5" />
              {t('button')}
            </a>
          </Button >
        </div>
      </div>
    </section>
  )
}
