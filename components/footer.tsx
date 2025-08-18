import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/KK_logo.png" alt="Kāpjam Kalnā Logo" width={32} height={32} className="h-8 w-10" />
              <span className="text-2xl font-bold text-gray-900">KĀPJAM KALNĀ</span>
            </Link>
            <p className="text-gray-600 mb-4">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/Climbthemountainstudio/" className="text-gray-500 hover:text-[#c6a16c] transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.youtube.com/@RonsVlog" className="text-gray-500 hover:text-[#c6a16c] transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/explore/locations/1847226948877825/kapjam-kalna-studio/" className="text-gray-500 hover:text-[#c6a16c] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://soundcloud.com/climbthemountainstudio" className="text-gray-500 hover:text-[#c6a16c] transition-colors" aria-label="SoundCloud">
                <span className="block h-5 w-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
                    <path d="M17.5 10.5c-.4 0-.8.1-1.1.2-.2-2.7-2.4-4.7-5.1-4.7-.5 0-1 .1-1.5.2-.2 0-.3.2-.3.4v8.2c0 .2.2.4.4.4h7.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5zm-9.5-.5c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.5s.5-.2.5-.5v-5c0-.3-.2-.5-.5-.5zm-2 1c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5s.5-.2.5-.5v-4c0-.3-.2-.5-.5-.5zm-2 2c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5z"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">{t('quickLinks.title')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="text-gray-600 hover:text-[#c6a16c] transition-colors">
                    {t('quickLinks.services')}
                  </Link>
                </li>
                <li>
                  <Link href="#studio" className="text-gray-600 hover:text-[#c6a16c] transition-colors">
                    {t('quickLinks.studio')}
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="text-gray-600 hover:text-[#c6a16c] transition-colors">
                    {t('quickLinks.portfolio')}
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-600 hover:text-[#c6a16c] transition-colors">
                    {t('quickLinks.contact')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold mb-4">{t('contact.title')}</h3>
              <div className="space-y-1 text-gray-600 text-sm">
                <p>Ainavas iela 4, Priedkalne</p>
                <p>ronyalmighty@gmail.com</p>
                <p>+371 27 752 677</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 pt-6 text-center">
          <p className="text-gray-500 text-sm">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
