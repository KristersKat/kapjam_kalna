"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const equipmentList = [
  "Accoustic guitars",
  "Electric guitars",
  "Bass guitars",
  "Mandolin",
  "Cymbals",
  "Tambourine",
  "Keyboard",
  "Electric guitar amplifier",
  "Various pedals",
  "Pad controller",
  "Cannon 80D camera",
]

export function EquipmentDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className="w-full justify-between border-[#c6a16c] text-[#c6a16c] hover:bg-[#c6a16c] hover:text-white bg-transparent"
      >
        View Complete Equipment List
        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </Button>

      {isOpen && (
        <Card className="mt-4 bg-white border-gray-200 shadow-lg">
          <CardContent className="p-6">
            <h4 className="font-bold text-[#c6a16c] mb-4 text-lg text-center">Available Equipment</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-700 text-base list-disc list-inside">
              {equipmentList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
