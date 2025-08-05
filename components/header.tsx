"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/KK_logo.png" alt="Kāpjam Kalnā Logo" width={32} height={32} className="h-8 w-10" />
            <span className="text-2xl font-semibold text-[#c6a16c]">KĀPJAM KALNĀ</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-gray-700 hover:text-[#c6a16c] transition-colors">
              Services
            </Link>
            <Link href="/#studio" className="text-gray-700 hover:text-[#c6a16c] transition-colors">
              Studio
            </Link>
            <Link href="/clothing" className="text-gray-700 hover:text-[#c6a16c] transition-colors">
              Clothing
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-[#c6a16c] transition-colors">
              Contact
            </Link>
            <Button asChild className="bg-[#c6a16c] hover:bg-[#b8956b] text-white"> 
              <Link href="/#contact">Book Session</Link>
            </Button>
          </nav>

          <button className="md:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/#services" className="text-gray-700 hover:text-[#c6a16c] transition-colors">
                Services
              </Link>
              <Link href="/#studio" className="text-gray-700 hover:text-[#c6a16c] transition-colors">
                Studio
              </Link>
              <Link href="/clothing" className="text-gray-700 hover:text-[#c6a16c] transition-colors">
                Clothing
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-[#c6a16c] transition-colors">
                Contact
              </Link>
              <Button asChild className="bg-[#c6a16c] hover:bg-[#b8956b] text-white w-fit">
                <Link href="/#contact">Book Session</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
