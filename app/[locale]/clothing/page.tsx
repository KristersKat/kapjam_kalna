import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { getTranslations } from "next-intl/server"

export default async function ClothingPage() {
  const t = await getTranslations('clothing')

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('subtitle')}
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
                  alt={t('products.cap.alt')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              {/* Product Header and Price */}
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('products.cap.title')}
                </h2>
                <p className="text-2xl font-bold text-[#c6a16c]">{t('products.cap.price')}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 