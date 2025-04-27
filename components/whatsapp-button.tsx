"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number
  const whatsappNumber = "9773876990"
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50 md:bottom-12 md:right-8"
    >
      <Button size="icon" className="h-14 w-14 rounded-full bg-lime-600 hover:bg-lime-900 shadow-lg">
        <MessageCircle className="h-7 w-7 text-white" />
        <span className="sr-only">Contact us on WhatsApp</span>
      </Button>
    </a>
  )
}

export default WhatsAppButton
