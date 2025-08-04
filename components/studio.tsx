"use client"

import Image from "next/image"
import { EquipmentDropdown } from "./equipment-dropdown"
import { ChevronDown, ChevronUp } from "lucide-react"

export function Studio() {
  return (
    <section id="studio" className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">About the Studio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are a music studio located in the quiet countryside of Riga, offering a range of services from music recording to video production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-6 text-[#c6a16c]">Studio Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Acoustically treated recording room</li>
                <li>• Industry standard equipment: Aston, Dunlop, Fender, Sennheiser, etc.</li>
                <li>• Full DAW support</li>
                <li>• Drum kit included - bring your own cymbals or rent on site</li>
                <li>• Ready to record from a wide variaty of genres</li>
                <li>• A place to make your ambitions come true</li>
              </ul>
            </div>
            <EquipmentDropdown 
              trigger={(isOpen) => (
                <h3 id="equipment" className="text-3xl font-bold mb-6 text-[#c6a16c] flex items-center gap-2 hover:text-[#a88a5a] transition-colors">
                  Available Equipment
                  {isOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                </h3>
              )}
            />
          </div>

          <div className="space-y-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/Studio.jpg" alt="Studio" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h4 className="text-xl font-bold text-white">Studio</h4>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/Drums.jpg" alt="Drums" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h4 className="text-xl font-bold text-white">Drums</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
