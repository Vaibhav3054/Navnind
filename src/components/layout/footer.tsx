import Link from "next/link";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-border mt-auto">
      <div className="container-base">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
            <Link href="/" className="text-3xl font-bold text-heading tracking-tight text-foreground">
              NAVNIND
            </Link>
            <p className="text-secondary-text leading-relaxed text-sm max-w-[250px]">
              Crafting Stories, One Page At A Time.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="col-span-1 flex flex-col gap-4">
            <h4 className="font-semibold text-foreground tracking-wide uppercase text-xs mb-2">Explore</h4>
            <Link href="/products" className="text-secondary-text hover:text-foreground transition-colors text-sm">Products</Link>
            <Link href="/about" className="text-secondary-text hover:text-foreground transition-colors text-sm">About Us</Link>
          </div>

          {/* Location Column */}
          <div className="col-span-1 flex flex-col gap-4">
            <h4 className="font-semibold text-foreground tracking-wide uppercase text-xs mb-2">Visit Us</h4>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Uttam+Industries%2C+102%2C+Semra+Rd%2C+Govindpura+Industrial+Area%2C+Bhopal%2C+Madhya+Pradesh+462023"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-text hover:text-foreground transition-colors text-sm leading-relaxed"
            >
              Uttam Industries<br />
              102, Semra Rd, Govindpura Industrial Area<br />
              Bhopal, Madhya Pradesh 462023
            </a>
          </div>

          {/* Contact Column */}
          <div className="col-span-1 flex flex-col gap-4">
            <h4 className="font-semibold text-foreground tracking-wide uppercase text-xs mb-2">Contact</h4>
            <a href="mailto:uttamindustriesbhopal@gmail.com" className="text-secondary-text hover:text-foreground transition-colors text-sm">uttamindustriesbhopal@gmail.com</a>
            <div className="flex flex-col gap-1 text-secondary-text text-sm">
              <a href="tel:+919171363600" className="hover:text-foreground transition-colors">+91 91713 63600</a>
              <a href="tel:+919827054667" className="hover:text-foreground transition-colors">+91 98270 54667</a>
              <a href="tel:+919893106811" className="hover:text-foreground transition-colors">+91 98931 06811</a>
            </div>
            <a href="https://www.instagram.com/navnind.notebooks" target="_blank" rel="noopener noreferrer" className="text-secondary-text hover:text-foreground transition-colors text-sm flex items-center gap-2 w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>Follow us on Instagram</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-center items-center pt-8 border-t border-border text-xs text-secondary-text gap-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} NAVNIND. All rights reserved.{" "}
          <Link
            href="https://cybrinix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-text hover:text-foreground transition-colors"
          >
            Developed By Cybrinix
          </Link>
        </p>
        </div>
      </div>
    </footer>
  );
}
