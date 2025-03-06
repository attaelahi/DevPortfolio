"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm your AI assistant. How can I help you with your portfolio today?",
      sender: "bot",
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (newMessage.trim() === "") return

    // Add user message
    const userMessage = { id: messages.length + 1, text: newMessage, sender: "user" }
    setMessages([...messages, userMessage])
    setNewMessage("")

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I can help you choose the best template for your skills.",
        "Would you like me to suggest some portfolio improvements?",
        "I can generate a professional bio based on your experience.",
        "Need help showcasing your projects? I can help with that!",
      ]
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
      const botMessage = { id: messages.length + 2, text: randomResponse, sender: "bot" }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <Button
          onClick={toggleChat}
          className={`w-14 h-14 rounded-full ${
            isOpen ? "bg-accent" : "bg-secondary text-secondary-foreground"
          } flex items-center justify-center shadow-lg hover:scale-110 transition-all`}
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 md:w-96 glass-effect rounded-xl overflow-hidden z-50 shadow-xl border border-accent-light/20"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-accent p-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <MessageSquare size={20} className="text-secondary" />
                AI Portfolio Assistant
              </h3>
            </div>

            <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-secondary text-secondary-foreground ml-auto"
                      : "bg-accent text-accent-foreground"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-accent-light/20 flex gap-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="bg-accent/50 border-accent-light/20"
              />
              <Button type="submit" size="icon" className="bg-secondary text-secondary-foreground">
                <Send size={18} />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

