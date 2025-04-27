import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"

export default function QuotePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-16">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/global-delivery-pricing.png"
            alt="Pricing and delivery concept"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Our Pricing & Services</h1>
            <p className="text-xl">
              Transparent pricing for all your moving needs. Find the right package for your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tabs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Moving Services Pricing</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our pricing is based on the weight of goods, distance, vehicle type, and additional services required.
              Select the tab that best matches your needs.
            </p>
          </div>

          <Tabs defaultValue="local" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="local">Local Moving</TabsTrigger>
              <TabsTrigger value="longDistance">Long Distance</TabsTrigger>
              <TabsTrigger value="international">International</TabsTrigger>
            </TabsList>

            {/* Local Moving Tab */}
            <TabsContent value="local" className="border rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6">Local Moving Rates (Within City)</h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border px-4 py-3 text-left">Weight of Goods</th>
                      <th className="border px-4 py-3 text-left">Vehicle Type</th>
                      <th className="border px-4 py-3 text-left">Base Price</th>
                      <th className="border px-4 py-3 text-left">Additional Services</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-3">Up to 500 kg</td>
                      <td className="border px-4 py-3">Small Van</td>
                      <td className="border px-4 py-3">$150</td>
                      <td className="border px-4 py-3">
                        <ul className="list-disc list-inside">
                          <li>Basic Packing: +$50</li>
                          <li>Loading/Unloading: Included</li>
                          <li>Assembly/Disassembly: +$75</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border px-4 py-3">500 - 1000 kg</td>
                      <td className="border px-4 py-3">Medium Truck</td>
                      <td className="border px-4 py-3">$250</td>
                      <td className="border px-4 py-3">
                        <ul className="list-disc list-inside">
                          <li>Basic Packing: +$100</li>
                          <li>Loading/Unloading: Included</li>
                          <li>Assembly/Disassembly: +$125</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-3">1000 - 2000 kg</td>
                      <td className="border px-4 py-3">Large Truck</td>
                      <td className="border px-4 py-3">$350</td>
                      <td className="border px-4 py-3">
                        <ul className="list-disc list-inside">
                          <li>Basic Packing: +$150</li>
                          <li>Loading/Unloading: Included</li>
                          <li>Assembly/Disassembly: +$175</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border px-4 py-3">2000+ kg</td>
                      <td className="border px-4 py-3">Multiple Trucks</td>
                      <td className="border px-4 py-3">$500+</td>
                      <td className="border px-4 py-3">
                        <ul className="list-disc list-inside">
                          <li>Basic Packing: +$200</li>
                          <li>Loading/Unloading: Included</li>
                          <li>Assembly/Disassembly: +$250</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 text-sm text-slate-600">
                <p>* Additional charges may apply for stairs, elevators, or long carrying distances.</p>
                <p>* Weekend and holiday moves may incur a 15% surcharge.</p>
              </div>
            </TabsContent>

            {/* Long Distance Tab */}
            <TabsContent value="longDistance" className="border rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6">Long Distance Moving Rates (Inter-City)</h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border px-4 py-3 text-left">Distance</th>
                      <th className="border px-4 py-3 text-left">Weight of Goods</th>
                      <th className="border px-4 py-3 text-left">Vehicle Type</th>
                      <th className="border px-4 py-3 text-left">Base Price</th>
                      <th className="border px-4 py-3 text-left">Additional Services</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-3" rowSpan={2}>
                        100-300 miles
                      </td>
                      <td className="border px-4 py-3">Up to 1000 kg</td>
                      <td className="border px-4 py-3">Medium Truck</td>
                      <td className="border px-4 py-3">$800</td>
                      <td className="border px-4 py-3" rowSpan={2}>
                        <ul className="list-disc list-inside">
                          <li>Full Packing: +$300</li>
                          <li>Loading/Unloading: Included</li>
                          <li>Storage (per week): +$100</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border px-4 py-3">1000+ kg</td>
                      <td className="border px-4 py-3">Large Truck</td>
                      <td className="border px-4 py-3">$1,200</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-3" rowSpan={2}>
                        300-600 miles
                      </td>
                      <td className="border px-4 py-3">Up to 1000 kg</td>
                      <td className="border px-4 py-3">Medium Truck</td>
                      <td className="border px-4 py-3">$1,500</td>
                      <td className="border px-4 py-3" rowSpan={2}>
                        <ul className="list-disc list-inside">
                          <li>Full Packing: +$400</li>
                          <li>Loading/Unloading: Included</li>
                          <li>Storage (per week): +$150</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border px-4 py-3">1000+ kg</td>
                      <td className="border px-4 py-3">Large Truck</td>
                      <td className="border px-4 py-3">$2,000</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-3" rowSpan={2}>
                        600+ miles
                      </td>
                      <td className="border px-4 py-3">Up to 1000 kg</td>
                      <td className="border px-4 py-3">Medium Truck</td>
                      <td className="border px-4 py-3">$2,500</td>
                      <td className="border px-4 py-3" rowSpan={2}>
                        <ul className="list-disc list-inside">
                          <li>Full Packing: +$500</li>
                          <li>Loading/Unloading: Included</li>
                          <li>Storage (per week): +$200</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border px-4 py-3">1000+ kg</td>
                      <td className="border px-4 py-3">Large Truck</td>
                      <td className="border px-4 py-3">$3,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 text-sm text-slate-600">
                <p>* Prices include fuel, tolls, and standard insurance coverage.</p>
                <p>* Additional insurance options available for valuable items.</p>
                <p>* Delivery timeframes vary based on distance and season.</p>
              </div>
            </TabsContent>

            {/* International Tab */}
            <TabsContent value="international" className="border rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6">International Moving Rates</h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border px-4 py-3 text-left">Destination Region</th>
                      <th className="border px-4 py-3 text-left">Container Size</th>
                      <th className="border px-4 py-3 text-left">Shipping Method</th>
                      <th className="border px-4 py-3 text-left">Base Price</th>
                      <th className="border px-4 py-3 text-left">Additional Services</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-3" rowSpan={2}>
                        Europe
                      </td>
                      <td className="border px-4 py-3">20ft Container</td>
                      <td className="border px-4 py-3">Sea Freight</td>
                      <td className="border px-4 py-3">$3,500</td>
                      <td className="border px-4 py-3" rowSpan={2}>
                        <ul className="list-disc list-inside">
                          <li>Full Packing: +$800</li>
                          <li>Customs Clearance: +$500</li>
                          <li>Insurance: 3% of declared value</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border px-4 py-3">40ft Container</td>
                      <td className="border px-4 py-3">Sea Freight</td>
                      <td className="border px-4 py-3">$6,000</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-3" rowSpan={2}>
                        Asia
                      </td>
                      <td className="border px-4 py-3">20ft Container</td>
                      <td className="border px-4 py-3">Sea Freight</td>
                      <td className="border px-4 py-3">$4,200</td>
                      <td className="border px-4 py-3" rowSpan={2}>
                        <ul className="list-disc list-inside">
                          <li>Full Packing: +$800</li>
                          <li>Customs Clearance: +$600</li>
                          <li>Insurance: 3% of declared value</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border px-4 py-3">40ft Container</td>
                      <td className="border px-4 py-3">Sea Freight</td>
                      <td className="border px-4 py-3">$7,500</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-3" rowSpan={2}>
                        Australia/NZ
                      </td>
                      <td className="border px-4 py-3">20ft Container</td>
                      <td className="border px-4 py-3">Sea Freight</td>
                      <td className="border px-4 py-3">$5,000</td>
                      <td className="border px-4 py-3" rowSpan={2}>
                        <ul className="list-disc list-inside">
                          <li>Full Packing: +$900</li>
                          <li>Customs Clearance: +$700</li>
                          <li>Insurance: 3% of declared value</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border px-4 py-3">40ft Container</td>
                      <td className="border px-4 py-3">Sea Freight</td>
                      <td className="border px-4 py-3">$8,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 text-sm text-slate-600">
                <p>* Air freight options available at premium rates for urgent shipments.</p>
                <p>* Prices do not include destination country import duties or taxes.</p>
                <p>* Transit times vary by destination and shipping method.</p>
                <p>* Door-to-door service available for most destinations.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Vehicle Fleet Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Vehicle Fleet</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image src="/compact-city-move.png" alt="Small Moving Van" fill style={{ objectFit: "cover" }} />
              </div>
              <h3 className="text-xl font-bold mb-2">Small Van</h3>
              <p className="text-slate-600 mb-2">Ideal for studio/1-bedroom apartments or small office moves</p>
              <ul className="text-left text-sm text-slate-600 space-y-1 mb-4">
                <li>• Capacity: Up to 500 kg</li>
                <li>• Volume: 10-15 cubic meters</li>
                <li>• Suitable for: Small furniture, boxes, appliances</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image src="/box-truck-on-highway.png" alt="Medium Truck" fill style={{ objectFit: "cover" }} />
              </div>
              <h3 className="text-xl font-bold mb-2">Medium Truck</h3>
              <p className="text-slate-600 mb-2">Perfect for 2-3 bedroom homes or medium-sized office relocations</p>
              <ul className="text-left text-sm text-slate-600 space-y-1 mb-4">
                <li>• Capacity: 500-1000 kg</li>
                <li>• Volume: 20-30 cubic meters</li>
                <li>• Suitable for: Complete household furniture, appliances</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image src="/urban-move.png" alt="Large Truck" fill style={{ objectFit: "cover" }} />
              </div>
              <h3 className="text-xl font-bold mb-2">Large Truck</h3>
              <p className="text-slate-600 mb-2">Designed for 4+ bedroom homes or large office moves</p>
              <ul className="text-left text-sm text-slate-600 space-y-1 mb-4">
                <li>• Capacity: 1000-2000+ kg</li>
                <li>• Volume: 30-50 cubic meters</li>
                <li>• Suitable for: Complete large household or office contents</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Quote?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every move is unique. Contact us for a personalized quote tailored to your specific requirements.
          </p>
          <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-slate-100">
            <Link href="/contact">
              Contact Us for a Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
