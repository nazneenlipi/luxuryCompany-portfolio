import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/20 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-playfair gold-text mb-4">
              LUXURY BRAND
            </h3>
            <p className="text-offwhite/80 text-sm leading-relaxed">
              We build smart and elegant solutions for your business, focusing
              on innovation, quality, and exceptional customer service.
            </p>
            <div className="flex space-x-4 pt-4">
              <Link
                href="/"
                className="text-offwhite/70 hover:text-gold transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="/"
                className="text-offwhite/70 hover:text-gold transition-colors"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="/"
                className="text-offwhite/70 hover:text-gold transition-colors"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="/"
                className="text-offwhite/70 hover:text-gold transition-colors"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair text-offwhite mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Blog"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${
                        item.toLowerCase() === "home" ? "" : item.toLowerCase()
                      }`}
                      className="text-offwhite/70 hover:text-gold transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair text-offwhite mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "Branding",
                "Digital Marketing",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/service"
                    className="text-offwhite/70 hover:text-gold transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair text-offwhite mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold shrink-0 mt-1" />
                <span className="text-offwhite/70 text-sm">
                  123 Luxury Avenue, Suite 456, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span className="text-offwhite/70 text-sm">01609443041</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold shrink-0" />
                <span className="text-offwhite/70 text-sm">
                  lipinazneen85@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          {/* <p className="text-offwhite/50 text-xs">© {new Date().getFullYear()} Luxury Brand. All Rights Reserved.</p> */}
          <p className="text-offwhite/50 text-xs">
            © {new Date().getFullYear()} Luxury Brand. All Rights Reserved.{" "}
            <a
              href="https://nazneen.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              nazneen.info
            </a>
          </p>
          <div className="flex justify-center space-x-6 mt-2">
            <Link
              href="/privacy-policy"
              className="text-offwhite/50 hover:text-gold text-xs"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-offwhite/50 hover:text-gold text-xs"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/cookies"
              className="text-offwhite/50 hover:text-gold text-xs"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
