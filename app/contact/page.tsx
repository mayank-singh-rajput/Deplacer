"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [moveType, setMoveType] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log({ name, email, phone, moveType, message });
    setSubmitted(true);
    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setMoveType("");
    setMessage("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-16">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/customer-touch.png"
            alt="Customer service team"
            fill
            style={{ objectFit: "fill" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">
              Get in touch with our team for inquiries, quotes, or to schedule
              your move.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="bg-amber-100 p-3 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Our Location</h3>
                <p className="text-slate-600">Delhi, New Delhi</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="bg-amber-100 p-3 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-slate-600">(+91) 97738-76990</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="bg-amber-100 p-3 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-slate-600">connectdeplacer@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="bg-amber-100 p-3 rounded-full mb-4">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                <p className="text-slate-600">Always Open — 24/7 Service</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-slate-600 mb-8">
                Whether you have questions about our services, need a quote, or
                want to schedule a move, we're here to help. Fill out the form
                below, and one of our representatives will get back to you as
                soon as possible.
              </p>

              {submitted ? (
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold text-green-700 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Thank you for contacting Deplacer. We've received your
                      message and will get back to you shortly.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Your Phone Number"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="moveType">Move Type</Label>
                    <Select
                      value={moveType}
                      onValueChange={setMoveType}
                      required
                    >
                      <SelectTrigger id="moveType">
                        <SelectValue placeholder="Select Move Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">
                          Residential Move
                        </SelectItem>
                        <SelectItem value="commercial">
                          Commercial Move
                        </SelectItem>
                        <SelectItem value="longDistance">
                          Long Distance Move
                        </SelectItem>
                        <SelectItem value="international">
                          International Move
                        </SelectItem>
                        <SelectItem value="storage">
                          Storage Services
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your moving needs..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-amber-600 hover:bg-amber-700"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            <div className="relative h-96 lg:h-auto rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/logo.png"
                alt="Our location on map"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  How far in advance should I book my move?
                </h3>
                <p className="text-slate-600">
                  We recommend booking your move at least 4-6 weeks in advance,
                  especially during peak moving season (May-September). For
                  long-distance or international moves, booking 8-12 weeks ahead
                  is ideal.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">
                  Do you provide packing services?
                </h3>
                <p className="text-slate-600">
                  Yes, we offer comprehensive packing services. Our professional
                  packers can handle everything from fragile items to furniture,
                  ensuring your belongings are safely packed for transport.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">
                  Are you licensed and insured?
                </h3>
                <p className="text-slate-600">
                  Absolutely. Deplacer is fully licensed and insured. We carry
                  comprehensive insurance coverage to protect your belongings
                  during the moving process.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  How do you calculate moving costs?
                </h3>
                <p className="text-slate-600">
                  Our pricing is based on several factors including distance,
                  volume of items, special handling requirements, and additional
                  services requested. We provide detailed, transparent quotes
                  with no hidden fees.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">
                  Do you offer storage solutions?
                </h3>
                <p className="text-slate-600">
                  Yes, we offer both short-term and long-term storage solutions
                  in our secure, climate-controlled facilities for customers who
                  need temporary storage during their move.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-slate-600">
                  We accept various payment methods including credit cards,
                  debit cards, bank transfers, and cash. A deposit is typically
                  required to secure your moving date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Move?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote and let our team of
            professionals handle your move with care.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-amber-600"
            >
              <a href="tel:9773876990">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-amber-600 hover:bg-slate-100"
            >
              <a href="mailto:connectdeplacer@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
