"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const equipmentList = [
  "Accoustic guitars*",
  "Electric guitars*",
  "Bass guitars*",
  "Cymbals**",
  "Mandolin",
  "Tambourine",
  "Keyboard",
  "Electric guitar amplifier",
  "Various pedals",
  "Pad controller",
  "Cannon 80D camera",
]

interface EquipmentDropdownProps {
  trigger: (isOpen: boolean) => React.ReactNode
}

export function EquipmentDropdown({ trigger }: EquipmentDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full">
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger(isOpen)}
      </div>

      {isOpen && (
        <Card className="mt-4 bg-white border-gray-200 shadow-lg">
          <CardContent className="p-6">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-700 text-base list-disc list-inside">
              {equipmentList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">*</span> Guitars are for an extra fee (depends on the guitar), unless you bring your own strings
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">**</span> Cymbals are for an extra fee of 25€, or you can bring your own cymbals
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
