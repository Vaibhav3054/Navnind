







"use client";

import Image from "next/image";
import { forwardRef } from "react";

interface BookCoverProps {
  title: string;
  subtitle: string;
  description: string;
}

const BookCover = forwardRef<HTMLDivElement, BookCoverProps>(
  ({ title, subtitle, description }, ref) => {
    return (
      <div
        ref={ref}
        className="page relative w-full h-full overflow-hidden rounded-lg"
      >
        {/* Cover Image */}
        <Image
          src="/images/Big Royal Notebooks/Product_3/cover.jpg"
          alt={title}
          fill
          priority
          sizes="450px"
          className="object-cover"
        />

       
      </div>
    );
  }
);

BookCover.displayName = "BookCover";

export default BookCover;