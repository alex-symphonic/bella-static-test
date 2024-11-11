import { Card, CardContent } from "@/components/ui/card"

const insuranceLogos = [
  { name: "Alignment", logo: "/insurance/alignment.png" },
  { name: "Anthem", logo: "/insurance/anthem.png" },
  { name: "Blue Shield", logo: "/insurance/blue-shield.png" },
  { name: "LA Care", logo: "/insurance/la-care.png" },
  { name: "Scan", logo: "/insurance/scan.png" },
  { name: "Wellcare", logo: "/insurance/wellcare.png" }
]

export function Insurance() {
  return (
    <section id="insurance" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Insurance Plans</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {insuranceLogos.map((insurance, index) => (
            <Card key={index} className="flex items-center justify-center p-6">
              <CardContent className="p-0">
                <img
                  src={insurance.logo}
                  alt={`${insurance.name} logo`}
                  className="h-12 object-contain"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}