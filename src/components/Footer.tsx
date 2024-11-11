import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-red-600" />
              <span className="text-xl font-bold text-white">Bella Vista Medical</span>
            </div>
            <p className="text-sm">
              Providing comprehensive healthcare services to help you live a healthier, happier life.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#insurance" className="hover:text-white transition-colors">Insurance</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Primary Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cardiology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Neurology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Family Medicine</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <address className="not-italic">
              123 Medical Center Drive<br />
              Los Angeles, CA 90001<br />
              <a href="tel:+15551234567" className="hover:text-white transition-colors">(555) 123-4567</a><br />
              <a href="mailto:info@bellavista.com" className="hover:text-white transition-colors">info@bellavista.com</a>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Bella Vista Medical Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}