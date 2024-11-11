import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Your Health Is Our Priority
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Providing comprehensive healthcare services to help you live a healthier, happier life
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" variant="default">
            Find a Doctor
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white hover:text-black">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}