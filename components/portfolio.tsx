'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Midnight Dreams",
    artist: "Luna & The Shadows",
    genre: "Alternative Rock",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    title: "Electric Pulse",
    artist: "Neon Collective",
    genre: "Electronic",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    title: "Acoustic Sessions",
    artist: "River Stone",
    genre: "Folk",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    title: "Urban Beats",
    artist: "City Lights",
    genre: "Hip Hop",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Listen to some of the artists we've had the privilege to work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200 hover:border-[#c6a16c] transition-all duration-300 group shadow-sm"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="lg" className="bg-[#c6a16c] hover:bg-[#b8956b] text-white">
                      <Play className="mr-2 h-5 w-5" />
                      Play
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-[#c6a16c] font-medium mb-1">{project.artist}</p>
                  <p className="text-gray-600 text-sm">{project.genre}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-[#c6a16c] text-[#c6a16c] hover:bg-[#c6a16c] hover:text-white bg-transparent"
            onClick={() => window.open("https://www.youtube.com/@RonsVlog", "_blank")}
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}
