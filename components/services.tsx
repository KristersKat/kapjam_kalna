"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, Drum, Video } from "lucide-react"

const services = [
  {
    icon: Mic,
    title: "Recording",
    description: "Professional multi-track recording with industry-standard equipment and acoustically treated rooms.",
    action: "contact"
  },
  {
    icon: Drum,
    title: "Equipment Rental",
    description: "We rent out everything from microphones to music pedals.",
    action: "equipment"
  },
  {
    icon: Video,
    title: "Video Production",
    description: "We will record professional videos for you inside our studio.",
    action: "contact"
  },
]

export function Services() {
  const handleServiceClick = (action: string) => {
    if (action === "contact") {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    } else if (action === "equipment") {
      const studioSection = document.getElementById("equipment")
      if (studioSection) {
        const elementRect = studioSection.getBoundingClientRect()
        const absoluteElementTop = elementRect.top + window.pageYOffset
        const middle = absoluteElementTop - (window.innerHeight / 2)
        window.scrollTo({ top: middle, behavior: "smooth" })
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-white border-gray-200 hover:border-[#c6a16c] transition-colors shadow-sm cursor-pointer hover:shadow-md"
              onClick={() => handleServiceClick(service.action)}
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <service.icon className="h-8 w-8 shrink-0 text-[#c6a16c]" />
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <div className="w-full max-w-2xl text-center">
            <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">All services from <span className="text-[#c6a16c]">35€/h</span></div>
            <div className="text-base md:text-lg text-gray-600">For information on renting equipment and video production, please contact us.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
