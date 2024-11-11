import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Brain, Heart, Stethoscope, UserPlus, Users } from "lucide-react"

const services = [
  {
    icon: <Stethoscope className="h-8 w-8 text-red-600" />,
    title: "Primary Care",
    description: "Comprehensive primary care services for your entire family"
  },
  {
    icon: <Heart className="h-8 w-8 text-red-600" />,
    title: "Cardiology",
    description: "Expert heart care and cardiovascular health services"
  },
  {
    icon: <Brain className="h-8 w-8 text-red-600" />,
    title: "Neurology",
    description: "Specialized care for neurological conditions"
  },
  {
    icon: <Activity className="h-8 w-8 text-red-600" />,
    title: "Urgent Care",
    description: "Immediate care for non-life-threatening conditions"
  },
  {
    icon: <Users className="h-8 w-8 text-red-600" />,
    title: "Family Medicine",
    description: "Healthcare services for all ages and stages of life"
  },
  {
    icon: <UserPlus className="h-8 w-8 text-red-600" />,
    title: "New Patients",
    description: "Welcoming new patients to our medical family"
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0">
                  Learn more →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}