"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo Section */}
        <div className="relative h-16 w-16 ml-4">
          <Link href="/">
            <Image
              src="/Deplacer-Dp.jpg"
              alt="Customer service team"
              fill
              style={{ objectFit: "cover" }}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-amber-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-amber-600 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/feedback"
            className="text-sm font-medium hover:text-amber-600 transition-colors"
          >
            Feedback
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-amber-600 transition-colors"
          >
            Contact Us
          </Link>
          <Button
            variant="default"
            className="bg-amber-600 hover:bg-amber-700"
            asChild
          >
            <Link href="/quote">Get a Quote</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t py-4">
          <nav className="container flex flex-col space-y-4">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium hover:bg-slate-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium hover:bg-slate-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/feedback"
              className="px-4 py-2 text-sm font-medium hover:bg-slate-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Feedback
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium hover:bg-slate-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button
              variant="default"
              className="bg-amber-600 hover:bg-amber-700 w-full"
              asChild
            >
              <Link href="/quote">Get a Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
