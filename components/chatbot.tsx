"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageSquare, Send, X } from "lucide-react"

interface Message {
  text: string
  sender: "user" | "bot"
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = async () => {
    if (input.trim() === "") return

    const newMessages: Message[] = [...messages, { text: input, sender: "user" }]
    setMessages(newMessages)
    setInput("")

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId: process.env.NEXT_PUBLIC_SESSION_ID,
          message: input,
        }),
      })

      const data = await response.json()
      const botResponse = data.reply || "No he podido entenderte, por favor intenta de nuevo."

      setMessages([...newMessages, { text: botResponse, sender: "bot" }])
    } catch (error) {
      console.error("Error al contactar al chatbot:", error)
      setMessages([
        ...newMessages,
        { text: "Hubo un error, por favor intenta de nuevo.", sender: "bot" },
      ])
    }
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      })
    }
  }, [messages])

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Abrir chatbot"
      >
        <MessageSquare className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] flex flex-col h-[600px]">
          <DialogHeader>
            <DialogTitle>Chat de Ayuda</DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="absolute top-4 right-4">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </DialogHeader>
          <ScrollArea className="flex-grow p-4 border-t border-b" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg max-w-[80%] ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-900"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <DialogFooter className="p-4">
            <div className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Escribe un mensaje..."
              />
              <Button onClick={handleSendMessage} aria-label="Enviar mensaje">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
