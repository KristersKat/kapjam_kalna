"use client"

import { useLocale, useTranslations } from "next-intl"
import { Link, usePathname } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages = [
  { code: 'en', name: 'English' },
  { code: 'lv', name: 'Latviešu' },
  { code: 'ru', name: 'Русский' },
]

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const t = useTranslations('header')
  
  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center text-gray-700 hover:text-[#c6a16c] px-2 py-1 h-auto">
          <span className="hidden sm:inline text-sm font-medium">{currentLanguage.code.toUpperCase()}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        {languages.map((language) => (
          <DropdownMenuItem key={language.code} asChild>
            <Link href={pathname} locale={language.code} className="flex items-center gap-2 w-full">
              <span>{language.name}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 