"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageSquare, Send, X } from "lucide-react";

type Message = {
  id: number;
  text: string;
  isBot: boolean;
};

const botReply = (userInput: string) => {
  const input = userInput.toLowerCase();

  if (/(price|cost|quote|how much|estimate)/i.test(input)) {
    const pricingReplies = [
      "Great question! Our pricing depends on distance, volume, and services required. Could you tell me your pickup and destination locations?",
      "I'd love to get you an accurate quote! Could you share the size of your move (like 2-bedroom apartment or office space)?",
      "We offer free estimates! Please let me know the date and locations you're moving from and to, and I can assist you right away.",
    ];
    return pricingReplies[Math.floor(Math.random() * pricingReplies.length)];
  }

  if (/(move.*date|availability|schedule|book|booking)/i.test(input)) {
    const scheduleReplies = [
      "We'd love to help schedule your move! When are you planning to relocate?",
      "Our teams book up fast, especially on weekends. Could you share your preferred move date?",
      "We usually recommend booking 2-3 weeks in advance. Let’s secure a date for you — when are you planning to move?",
    ];
    return scheduleReplies[Math.floor(Math.random() * scheduleReplies.length)];
  }

  if (/(services|what do you offer|options|moving services)/i.test(input)) {
    const serviceReplies = [
      "We offer full-service moves including packing, loading, transporting, unloading, and even storage if needed!",
      "Our services cover residential moves, office relocations, specialty item moves, and packing solutions. How can we help you?",
      "From supplying moving boxes to handling delicate items, we offer customizable services based on your needs.",
    ];
    return serviceReplies[Math.floor(Math.random() * serviceReplies.length)];
  }

  if (/(long distance|interstate|out of state|across country)/i.test(input)) {
    const distanceReplies = [
      "Absolutely! We specialize in both local and long-distance moves across the country. Where are you planning to move?",
      "Long-distance moves are no problem for us! Could you provide the starting and ending locations?",
      "We handle interstate moves safely and professionally. I'd be happy to guide you through the process!",
    ];
    return distanceReplies[Math.floor(Math.random() * distanceReplies.length)];
  }

  if (/(storage|store|hold items)/i.test(input)) {
    const storageReplies = [
      "We offer secure, climate-controlled storage options. Would you like short-term or long-term storage?",
      "Need to store your belongings before or after your move? We've got safe storage facilities ready for you!",
      "Absolutely, we can store your items safely. May I know for how long you’ll need the storage service?",
    ];
    return storageReplies[Math.floor(Math.random() * storageReplies.length)];
  }

  if (/(insurance|damage|protection|safe|security)/i.test(input)) {
    const insuranceReplies = [
      "We are fully licensed and insured for your protection. Your belongings are safe with us!",
      "All moves are covered under our standard insurance, and we offer full-value protection plans as well.",
      "Your peace of mind is important to us — we handle your items with care and provide additional insurance options if needed.",
    ];
    return insuranceReplies[
      Math.floor(Math.random() * insuranceReplies.length)
    ];
  }

  if (/(contact|phone|email|speak to agent|representative)/i.test(input)) {
    const contactReplies = [
      "You can call us anytime at (+91) 97738-76990 or email us at connectdeplacer@gmail.com.",
      "Need to talk to a human? No problem! Call our hotline at (+91) 97738-76990 — we’re happy to help!",
      "You can reach a live agent at (+91) 97738-76990. We’re available 24/7 Service",
    ];
    return contactReplies[Math.floor(Math.random() * contactReplies.length)];
  }

  if (/(cancel|reschedule|change date)/i.test(input)) {
    const cancelReplies = [
      "We understand plans change! You can cancel or reschedule by contacting us at least 24 hours before your move date.",
      "To reschedule or cancel, please give us a quick call at (+91) 97738-76990. We'll assist you immediately!",
      "No problem! Let us know your new preferred date or if you need to cancel — we're flexible.",
    ];
    return cancelReplies[Math.floor(Math.random() * cancelReplies.length)];
  }

  // Fallback: general help responses
  const generalReplies = [
    "Thanks for reaching out! How can I assist you with your move today?",
    "I’m here to help! Tell me a little more about your moving needs.",
    "Welcome to QuickMove Solutions! Feel free to ask about services, pricing, scheduling, or anything else.",
  ];
  return generalReplies[Math.floor(Math.random() * generalReplies.length)];
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! How can I help you with your moving needs today?",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
    };
    setMessages([...messages, userMessage]);
    setInput("");

    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: botReply(input),
        isBot: true,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 800);
  };

  return (
    <>
      {/* Chat toggle button */}
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full bg-amber-600 hover:bg-amber-700 shadow-lg"
          size="icon"
        >
          <MessageSquare className="h-7 w-7 text-white" />
          <span className="sr-only">Open chat</span>
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-4 right-4 z-50 w-80 md:w-96 shadow-xl flex flex-col h-96 max-h-[80vh]">
          <div className="flex items-center justify-between bg-amber-600 text-white p-3 rounded-t-lg">
            <h3 className="font-medium">Chat with Deplacer</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleChat}
              className="h-8 w-8 text-white hover:bg-amber-700 rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isBot ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 ${
                    message.isBot
                      ? "bg-slate-100 text-slate-800"
                      : "bg-amber-600 text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="border-t p-3 flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button
              type="submit"
              size="icon"
              className="bg-amber-600 hover:bg-amber-700"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
