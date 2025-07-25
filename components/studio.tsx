import Image from "next/image"
import { EquipmentDropdown } from "./equipment-dropdown"

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
                <li>• Acoustically treated live room and control room</li>
                <li>• Isolation booths for vocals and instruments</li>
                <li>• Vintage and modern outboard gear</li>
                <li>• Comfortable lounge area for clients</li>
                <li>• High-speed internet for remote collaborations</li>
                <li>• Microphones included</li>
                <li>• Drum kit included</li>
              </ul>
            </div>
            <h3 className="text-3xl font-bold mb-6 text-[#c6a16c]">Rentable Equipment</h3>
            <EquipmentDropdown />
          </div>

          <div className="space-y-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Control Room" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h4 className="text-xl font-bold text-white">Control Room</h4>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Live Room" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h4 className="text-xl font-bold text-white">Live Room</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
