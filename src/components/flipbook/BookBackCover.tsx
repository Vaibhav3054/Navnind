"use client";

import { forwardRef } from "react";
import Image from "next/image";
import QRCode from "react-qr-code";

interface BookBackCoverProps {
  title: string;
  website: string;
  email: string;
  phone: string;
}

const BookBackCover = forwardRef<HTMLDivElement, BookBackCoverProps>(
  ({ title, website, email, phone }, ref) => {
    return (
      <div
        ref={ref}
        className="page w-full h-full bg-pure-white p-6 sm:p-10 flex flex-col items-center justify-evenly text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/paper-texture.png')] bg-repeat pointer-events-none" />
        
        {/* Decorative Border */}
        <div className="absolute inset-4 border-[0.5px] border-accent-gold/40 pointer-events-none" />
        <div className="absolute inset-5 border-[0.5px] border-accent-gold/20 pointer-events-none" />

        {/* Top: Company */}
        <div className="relative z-10 flex flex-col items-center w-full px-2 sm:px-4 mb-8 sm:mb-12">
          <h2 className="text-lg sm:text-2xl font-heading text-foreground tracking-widest uppercase mb-1 sm:mb-2 font-bold">
            Uttam Industries
          </h2>
          <div className="w-12 h-px bg-accent-gold/40 mx-auto mt-2" />
        </div>

        {/* Middle: Brands */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 relative z-10 w-full px-1 sm:px-4 mb-6 sm:mb-12">
          <p className="text-[9px] sm:text-[10px] text-accent-gold uppercase tracking-[0.2em] font-bold">Our Brands</p>
          <div className="flex items-center justify-center gap-2 sm:gap-6 w-full">
            <div className="flex flex-col items-center">
               <div className="w-14 h-7 sm:w-20 sm:h-10 relative mb-1">
                 <Image src="/images/logo/navnindlogo2.png" alt="Navnind Logo" fill className="object-contain opacity-80 mix-blend-multiply" />
               </div>
            </div>
            <div className="w-px h-5 sm:h-8 bg-border" />
            <div className="flex flex-col items-center">
               <div className="w-14 h-7 sm:w-20 sm:h-10 relative mb-1">
                 <Image src="/images/logo/wisdomlogo2.png" alt="Wisdom Logo" fill className="object-contain opacity-80 mix-blend-multiply" />
               </div>
            </div>
            <div className="w-px h-5 sm:h-8 bg-border" />
            <div className="flex flex-col items-center">
               <div className="w-14 h-7 sm:w-20 sm:h-10 relative mb-1">
                 <Image src="/images/logo/poojalogo2.png" alt="Pooja Logo" fill className="object-contain opacity-80 mix-blend-multiply" />
               </div>
            </div>
          </div>
        </div>

        {/* Bottom: Contact & QR */}
        <div className="relative z-10 flex flex-col items-center space-y-8 sm:space-y-12">
          <div className="flex flex-col items-center space-y-1 sm:space-y-2">
            <p className="text-accent-gold uppercase tracking-[0.2em] font-bold text-[9px] sm:text-[10px]">VISIT US:</p>
            <div className="bg-pure-white p-1 rounded-md border border-black/10 shadow-sm">
              <QRCode 
                value="https://www.google.com/maps/search/?api=1&query=Uttam+Industries%2C+102%2C+Semra+Rd%2C+Govindpura+Industrial+Area%2C+Bhopal%2C+Madhya+Pradesh+462023"
                size={55}
              />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-0.5 sm:space-y-1 text-[9px] sm:text-[10px] text-secondary-text">
            <p className="text-accent-gold mb-0.5 sm:mb-1 uppercase tracking-[0.2em] font-bold">Contact</p>
            <p className="tracking-widest">{website}</p>
            <p className="tracking-widest">{email}</p>
            <p className="tracking-widest">{phone}</p>
          </div>
        </div>
      </div>
    );
  }
);

BookBackCover.displayName = "BookBackCover";

export default BookBackCover;