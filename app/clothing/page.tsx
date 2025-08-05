import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function ClothingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Rock n Rola Gadalaiki
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unique designs by Ronalds Znatnajs
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-md mx-auto">
            <Card className="overflow-hidden shadow-lg">
              {/* Product Image */}
              <div className="relative w-full h-80">
                <Image
                  src="/Cap.jpeg"
                  alt="Rock n Rola Gadalaiki Trucker Cap"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              {/* Product Header and Price */}
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Rock n Rola Gadalaiki Cap
                </h2>
                <p className="text-2xl font-bold text-[#c6a16c]">25€</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 