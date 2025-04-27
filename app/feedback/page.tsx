"use client";

import type React from "react";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, ThumbsUp } from "lucide-react";
import axios from "axios";

type IFeedback = {
  name: string;
  email: string;
  rating: number;
  feedback: string;
  type: string;
}

export default function FeedbackPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [feedbacks, setFeedbacks] = useState<IFeedback[]>([]);

  // Fetch feedbacks
  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await axios.get("/api/feedback");
      const allFeedbacks = response.data;

      // Randomly pick 3
      const shuffled = allFeedbacks.sort(() => 0.5 - Math.random());
      setFeedbacks(shuffled.slice(0, 3));
    };

    fetchFeedbacks();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await axios.post("/api/feedback", { name, email, rating, feedback, type });

    setSubmitted(true);
    setName("");
    setEmail("");
    setRating(0);
    setFeedback("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-16">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/relocation-revolution-customer-feedback.jpg"
            alt="Customer feedback concept"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Customer Feedback</h1>
            <p className="text-xl">
              We value your feedback. Let us know about your experience with our
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Share Your Experience</h2>
              <p className="text-slate-600 mb-8">
                Your feedback helps us improve our services and provide better
                experiences for all our customers. We appreciate you taking the
                time to share your thoughts with us.
              </p>

              {submitted ? (
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <ThumbsUp className="h-16 w-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold text-green-700 mb-2">
                      Thank You for Your Feedback!
                    </h3>
                    <p className="text-slate-600 mb-4">
                      We appreciate you taking the time to share your experience
                      with us. Your feedback is valuable and helps us improve
                      our services.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Submit Another Response
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      required
                    />
                  </div>

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
                    <Label htmlFor="name">Reloaction Type</Label>
                    <Input
                      id="type"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      placeholder="Relocation Type"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>How would you rate our service?</Label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <button
                          key={value}
                          onClick={() => setRating(value)}
                          className="group"
                          type="button"
                        >
                          <Star
                            className={`h-8 w-8 transition-colors ${
                              value <= rating
                                ? "fill-yellow-400 stroke-yellow-400"
                                : "stroke-gray-400"
                            } group-hover:scale-110`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="feedback">Your Feedback</Label>
                    <Textarea
                      id="feedback"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Please share your experience with our services..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-amber-600 hover:bg-amber-700 w-full"
                  >
                    Submit Feedback
                  </Button>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                What Our Customers Say
              </h2>

              <div className="space-y-6">
                {feedbacks.map((fb, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="pt-6">
                      <div className="flex text-yellow-400 mb-2">
                        {[...Array(fb.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                        {[...Array(5 - fb.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-slate-300" />
                        ))}
                      </div>
                      <p className="text-slate-600 mb-4">{fb.feedback}</p>
                      <div className="flex items-center">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                          <Image
                            src="/placeholder.svg?height=100&width=100&query=professional headshot"
                            alt="Customer"
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div>
                          <p className="font-bold">{fb.name}</p>
                          <p className="text-sm text-slate-500">{fb.type}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
