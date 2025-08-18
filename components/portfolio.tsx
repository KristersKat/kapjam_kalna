'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"

const allProjects = [
  {
    artist: "Ainārs Virga",
    genre: "Rock",
    image: "/Ainars_Virga.jpg",
  },
  {
    artist: "Reinis Liepa",
    genre: "Punk Rock",
    image: "/Reinis_Liepa.jpg",
  },
  {
    artist: "Lūkass Ļitvīnovs",
    genre: "Rap",
    image: "/Lukass_Litvinovs.jpg",
  },
  {
    artist: "Dita Svarupa",
    genre: "Christian Music",
    image: "/Dita_Svarupa.jpeg",
  },
  {
    artist: "Arnis Ozoliņš",
    genre: "Pop Punk",
    image: "/Arnis_Ozolins.png",
  },
  {
    artist: "Gatis Vilciņš",
    genre: "Rap",
    image: "/Gatis_Vilcins.jpg",
  },
  {
    artist: "Ronalds Znatnajs",
    genre: "Rock",
    image: "/Ronalds_Znatnajs.jpg",
  },
  {
    artist: "Žanis Belkins",
    genre: "Rap",
    image: "/Zanis_Belkins.jpg",
  },
]

export function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [shuffledProjects, setShuffledProjects] = useState(allProjects)
  const [isAnimating, setIsAnimating] = useState(false)
  const projectsToShow = 4
  const t = useTranslations('portfolio')

  useEffect(() => {
    // Shuffle projects on component mount
    const shuffled = [...allProjects].sort(() => Math.random() - 0.5)
    setShuffledProjects(shuffled)
  }, [])

  // Get current visible projects (4 consecutive items with wrapping)
  const getCurrentProjects = () => {
    const projects = []
    for (let i = 0; i < projectsToShow; i++) {
      const index = (currentIndex + i) % shuffledProjects.length
      projects.push({ ...shuffledProjects[index], key: `${shuffledProjects[index].artist}-${index}` })
    }
    return projects
  }

  const nextProject = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % shuffledProjects.length)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const prevProject = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + shuffledProjects.length) % shuffledProjects.length)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const currentProjects = getCurrentProjects()

  return (
    <section id="portfolio" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">{t('title')}</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            {t('description')}
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="sm"
            onClick={prevProject}
            disabled={isAnimating}
            className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 z-10 text-[#c6a16c] hover:text-[#b8956b] hover:bg-gray-100 md:hover:bg-transparent disabled:opacity-50 bg-white md:bg-transparent shadow-md md:shadow-none rounded-full w-10 h-10 md:w-auto md:h-auto"
          >
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={nextProject}
            disabled={isAnimating}
            className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 z-10 text-[#c6a16c] hover:text-[#b8956b] hover:bg-gray-100 md:hover:bg-transparent disabled:opacity-50 bg-white md:bg-transparent shadow-md md:shadow-none rounded-full w-10 h-10 md:w-auto md:h-auto"
          >
            <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
          </Button>

          {/* Artists Grid Container */}
          <div className="overflow-hidden mx-4 md:mx-0">
            <div 
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 transition-all duration-300 ease-out ${
                isAnimating ? 'opacity-90' : 'opacity-100'
              }`}
            >
              {currentProjects.map((project, index) => (
                <Card
                  key={project.key}
                  className={`bg-white border-gray-200 hover:border-[#c6a16c] transition-all duration-200 group shadow-sm transform ${
                    isAnimating 
                      ? 'translate-y-1 opacity-95' 
                      : 'translate-y-0 opacity-100'
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.artist}
                        width={300}
                        height={300}
                        className="w-full h-48 md:h-64 object-cover group-hover:scale-102 transition-transform duration-200"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </div>
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-[#c6a16c] mb-1 truncate">{project.artist}</h3>
                      <p className="text-gray-600 text-sm md:text-base">{project.genre}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {shuffledProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true)
                    setCurrentIndex(i)
                    setTimeout(() => setIsAnimating(false), 300)
                  }
                }}
                disabled={isAnimating}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex 
                    ? 'bg-[#c6a16c] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-[#c6a16c] text-[#c6a16c] hover:bg-[#c6a16c] hover:text-white bg-transparent px-6 py-3 text-sm md:text-base"
            onClick={() => window.open("https://www.youtube.com/@RonsVlog", "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            {t('viewFull')}
          </Button>
        </div>
      </div>
    </section>
  )
}
