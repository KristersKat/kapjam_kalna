"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, Drum, Video } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { Link as IntlLink } from "@/i18n/navigation"

interface ServiceCard {
  title: string
  description: string
  price?: string
  icon?: React.ElementType
  action?: string
}

export function Services() {
  const t = useTranslations('services')

  const studioServices: ServiceCard[] = [
    {
      icon: Mic,
      title: t('studioServices.recording.title'),
      description: t('studioServices.recording.description'),
      action: "contact"
    },
    {
      icon: Drum,
      title: t('studioServices.equipmentRental.title'),
      description: t('studioServices.equipmentRental.description'),
      action: "equipment"
    },
    {
      icon: Video,
      title: t('studioServices.videoProduction.title'),
      description: t('studioServices.videoProduction.description'),
      action: "contact"
    }
  ]

  const otherServices: ServiceCard[] = [
    {
      title: t('otherServices.musicTherapy.title'),
      description: t('otherServices.musicTherapy.description'),
      price: t('otherServices.musicTherapy.price'),
      action: "contact"
    },
    {
      title: t('otherServices.guitarLessons.title'),
      description: t('otherServices.guitarLessons.description'),
      price: t('otherServices.guitarLessons.price'),
      action: "contact"
    },
    {
      title: t('otherServices.clothing.title'),
      description: t('otherServices.clothing.description'),
      price: t('otherServices.clothing.price'),
      action: "clothing"
    }
  ]

  function handleServiceClick(action?: string) {
    if (!action) return
    if (action === "contact") {
      const contactSection = document.getElementById("contact")
      if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" })
      return
    }
    if (action === "equipment") {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{t('title')}</h2>
        </div>

        {/* Studio Services */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">{t('studioServices.title')}</h3>
            <p className="text-base md:text-lg text-gray-600">{t('studioServices.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studioServices.map((service, index) => (
              <Card
                key={service.title}
                className="bg-white border-gray-200 hover:border-[#c6a16c] transition-colors shadow-sm cursor-pointer hover:shadow-md"
                onClick={() => handleServiceClick(service.action)}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  {service.icon && <service.icon className="h-8 w-8 shrink-0 text-[#c6a16c]" />}
                  <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  <div className="mt-4 text-lg font-bold text-[#c6a16c]">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <div className="w-full max-w-2xl text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{t('pricing.baseRate')} <span className="text-[#c6a16c]">{t('pricing.basePrice')}</span></div>
              <div className="text-base md:text-lg text-gray-600 mb-4">{t('pricing.info')}</div>
              <div className="text-lg font-semibold text-[#c6a16c] bg-[#c6a16c]/10 px-4 py-2 rounded-lg inline-block">
                * {t('pricing.discount')} <span className="font-bold">{t('pricing.discountPrice')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Services */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">{t('otherServices.title')}</h3>
            <p className="text-base md:text-lg text-gray-600">{t('otherServices.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherServices.map((service) => (
              service.action === "clothing" ? (
                <IntlLink key={service.title} href="/clothing" className="block">
                  <Card className="bg-white border-gray-200 hover:border-[#c6a16c] transition-colors shadow-sm cursor-pointer hover:shadow-md">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {service.title === t('otherServices.clothing.title') 
                          ? <>{t('otherServices.clothing.description')}</>
                          : service.description
                        }
                      </CardDescription>
                      <div className="mt-4 text-lg font-bold text-[#c6a16c]">{service.price}</div>
                    </CardContent>
                  </Card>
                </IntlLink>
              ) : (
                <Card
                  key={service.title}
                  className="bg-white border-gray-200 hover:border-[#c6a16c] transition-colors shadow-sm cursor-pointer hover:shadow-md"
                  onClick={() => handleServiceClick(service.action)}
                >
                  <CardHeader className="flex flex-row items-center gap-4">
                    <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {service.title === t('otherServices.clothing.title') 
                        ? <>{t('otherServices.clothing.description')}</>
                        : service.description
                      }
                    </CardDescription>
                    <div className="mt-4 text-lg font-bold text-[#c6a16c]">{service.price}</div>
                  </CardContent>
                </Card>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
