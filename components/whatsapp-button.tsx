"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const phoneNumber = "573052746966"
  const message = encodeURIComponent("Hola! Me interesa conocer más sobre sus servicios digitales.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 group">
      <Button
        size="lg"
        className="rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 gap-2 px-5 py-2.5 h-12 text-base font-semibold bg-[#25D366] hover:bg-[#20BA5A] text-white hover:scale-110 animate-bounce-subtle"
      >
        <MessageCircle className="h-5 w-5 group-hover:scale-125 group-hover:rotate-12 transition-transform" />
        <span className="font-semibold">¿Hablamos?</span>
      </Button>
    </a>
  )
}
