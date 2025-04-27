import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import WhatsAppButton from "@/components/whatsapp-button"
import Chatbot from "@/components/chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Deplacer - Professional Moving & Packaging Services",
  description:
    "Your trusted partner for all your moving and packaging needs. We provide professional, reliable, and efficient services.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <footer className="bg-slate-900 text-white py-12">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Deplacer</h3>
                    <p className="text-slate-300">Your trusted partner for all your moving and packaging needs.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/" className="text-slate-300 hover:text-white transition">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/about" className="text-slate-300 hover:text-white transition">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="/feedback" className="text-slate-300 hover:text-white transition">
                          Feedback
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="text-slate-300 hover:text-white transition">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                    <p className="text-slate-300 mb-2">Delhi, New Delhi</p>
                    <p className="text-slate-300 mb-2">Phone: (+91) 97738-76990</p>
                    <p className="text-slate-300">Email: connectdeplacer@gmail.com</p>
                  </div>
                </div>
                <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
                  <p>© {new Date().getFullYear()} Deplacer. All rights reserved.</p>
                </div>
              </div>
            </footer>
            <WhatsAppButton />
            <Chatbot />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
