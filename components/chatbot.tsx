"use client"

import React, { useState, useRef, useEffect } from "react"

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [sessionId, setSessionId] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Generate or retrieve device ID from localStorage
    let deviceId = localStorage.getItem('chatbot_device_id')
    if (!deviceId) {
      deviceId = `device_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      localStorage.setItem('chatbot_device_id', deviceId)
    }
    setSessionId(deviceId)
  }, [])

  const toggleChatbot = () => {
    setIsOpen(!isOpen)
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const messageToSend = inputValue
    setInputValue('')

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageToSend, sessionId }),
      })

      const data = await res.json()

      if (res.ok) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response,
          sender: 'bot',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, botMessage])
      } else {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Lo siento, hubo un error al procesar tu mensaje.',
          sender: 'bot',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, errorMessage])
      }
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Error de conexión. Por favor, intenta de nuevo.',
        sender: 'bot',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, errorMessage])
      }
  }



  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <>
      <div
        className={`fixed bottom-20 right-4 z-50 transition-all duration-300 bg-gradient-to-b from-amber-50 to-orange-50 border border-amber-200 rounded-lg shadow-xl ${
          isOpen
            ? "w-96 h-[60vh] opacity-100"
            : "w-0 h-0 opacity-0 overflow-hidden"
        }`}
      >
        {isOpen && (
          <div className="p-4 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Asistente Virtual</h3>
              <button
                onClick={toggleChatbot}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 bg-gradient-to-b from-stone-50 to-amber-50 rounded-lg p-4 mb-4 overflow-y-auto shadow-inner">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-3 p-3 rounded-lg max-w-[80%] shadow-sm ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-400 text-white ml-auto'
                      : 'bg-gradient-to-r from-green-100 to-emerald-200 text-gray-800 border border-green-200'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className="text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-3 py-2 border border-amber-300 rounded-l focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-r hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-sm"
              >
                Enviar
              </button>
            </div>
          </div>
        )}
      </div>
      <button
        onClick={toggleChatbot}
        className="fixed bottom-4 right-4 z-50 bg-black text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.745A9.953 9.953 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>
    </>
  )
}
