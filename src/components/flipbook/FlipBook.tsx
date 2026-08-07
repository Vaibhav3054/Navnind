

"use client";

import { useRef, useState, useEffect, type ComponentType } from "react";
import HTMLFlipBook from "react-pageflip";
import { motion } from "framer-motion";
import "./globals.css";

const HTMLFlipBookComponent = HTMLFlipBook as unknown as ComponentType<any>;

import { catalogPages } from "./catalog-data";
import CatalogPage from "./CatalogPage";
import BookCover from "./BookCover";
import BookBackCover from "./BookBackCover";
import BookControls from "./BookControls";

interface FlipBookProps {
  className?: string;
}

const FlipBook: React.FC<FlipBookProps> = ({ className = "" }) => {
  const bookRef = useRef<{ pageFlip?: () => { flipPrev?: () => void; flipNext?: () => void } } | null>(null);

  const [currentPage, setCurrentPage] = useState(0);

  const internalPages = catalogPages.filter(
    (page) =>
      page.type !== "cover" &&
      page.type !== "inside-cover" &&
      page.type !== "back-cover"
  );

  const totalPages = internalPages.length + 2;

  const goToPrevPage = () => {
    bookRef.current?.pageFlip?.()?.flipPrev?.();
  };

  const goToNextPage = () => {
    bookRef.current?.pageFlip?.()?.flipNext?.();
  };

  return (
    <motion.div
      className={`w-full max-w-[900px] mx-auto flex justify-center overflow-visible ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-full aspect-[420/600] md:aspect-[840/600] max-w-[420px] md:max-w-[840px] flex justify-center mx-auto">
        <HTMLFlipBookComponent
          ref={bookRef}
          width={420}
          height={600}
          minWidth={200}
          maxWidth={420}
          minHeight={300}
          maxHeight={600}
          size="stretch"
          showCover={true}
          mobileScrollSupport={true}
          maxShadowOpacity={0.5}
          className="flipbook-container"
          style={{ margin: "0 auto" }}
          onFlip={(e: any) => setCurrentPage(e.data)}
          startPage={0}
          drawShadow={true}
          flippingTime={500}
          usePortrait={true}
          clickEventForward={true}
          autoSize={true}
        >
          {/* Cover */}
          <BookCover
            key="cover"
            title="NAVNIND"
            subtitle="Premium Catalogue"
            description="Explore our collections"
          />



          {/* Product Pages */}
          {internalPages.map((page) => (
            <CatalogPage
              key={page.id}
              page={page}
            />
          ))}

          {/* Back Cover */}
          <BookBackCover
            key="back-cover"
            title="NAVNIND"
            website="www.navnind.com"
            email="uttamindustriesbhopal@gmail.com"
            phone="+91 91713 63600"
          />
        </HTMLFlipBookComponent>

        <BookControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={goToPrevPage}
          onNext={goToNextPage}
          className="absolute left-1/2 bottom-4 -translate-x-1/2"
        />
      </div>
    </motion.div>
  );
};

export default FlipBook;




