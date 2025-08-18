"use client"

import Image from "next/image"
import { EquipmentDropdown } from "./equipment-dropdown"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useTranslations } from "next-intl"

export function Studio() {
  const t = useTranslations('studio')

  return (
    <section id="studio" className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{t('title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-6 text-[#c6a16c]">{t('features.title')}</h3>
              <ul className="space-y-2 text-gray-700">
                {t.raw('features.items').map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <EquipmentDropdown 
              trigger={(isOpen) => (
                <h3 id="equipment" className="text-3xl font-bold mb-6 text-[#c6a16c] flex items-center gap-2 hover:text-[#a88a5a] transition-colors">
                  {t('equipment.title')}
                  {isOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                </h3>
              )}
            />
          </div>

          <div className="space-y-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/Studio.jpg" alt={t('images.studio')} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h4 className="text-xl font-bold text-white">{t('images.studio')}</h4>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/Drums.jpg" alt={t('images.drums')} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h4 className="text-xl font-bold text-white">{t('images.drums')}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
