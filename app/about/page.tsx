import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-16">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/efficient-moving-crew.png" alt="Professional movers team" fill style={{ objectFit: "cover" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">About Deplacer</h1>
            <p className="text-xl">
              Learn about our company, our mission, and our commitment to providing exceptional moving services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-slate-600 mb-4">
              Deplacer was founded in 2010 with a simple mission: to provide reliable, efficient, and
                stress-free moving services to our customers. What started as a small local operation has grown into a
                trusted moving company serving customers nationwide.
              </p>
              <p className="text-slate-600 mb-4">
                Our founder recognized the need for a moving company that truly cares about its customers and their
                belongings. With this vision in mind, Deplacer was established on the principles of integrity,
                professionalism, and exceptional customer service.
              </p>
              <p className="text-slate-600">
                Over the years, we have helped thousands of families and businesses relocate smoothly and efficiently.
                Our team has grown, but our commitment to providing personalized service remains unchanged.
              </p>
            </div>
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image src="/bustling-movers-office.png" alt="Our company office" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            Our mission is to provide exceptional moving and packaging services that make the relocation process as
            smooth and stress-free as possible for our customers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto mb-4 bg-amber-100 p-3 rounded-full w-fit">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Service</h3>
                <p className="text-slate-600">
                  We are committed to delivering high-quality service that exceeds our customers' expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto mb-4 bg-amber-100 p-3 rounded-full w-fit">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
                <p className="text-slate-600">
                  We prioritize our customers' needs and work diligently to ensure their satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto mb-4 bg-amber-100 p-3 rounded-full w-fit">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Professionalism</h3>
                <p className="text-slate-600">
                  We maintain the highest standards of professionalism in all aspects of our business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Reliability</h3>
              <p className="text-slate-600">
                We understand that reliability is crucial when it comes to moving services. Our customers can count on
                us to show up on time and complete the job as promised.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-slate-600">
                We conduct our business with honesty and transparency. We provide accurate estimates and never surprise
                our customers with hidden fees.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Care</h3>
              <p className="text-slate-600">
                We treat our customers' belongings with the utmost care, as if they were our own. Our team is trained to
                handle items properly to prevent damage.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-slate-600">
                We strive for excellence in everything we do. From customer service to the actual moving process, we aim
                to exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
