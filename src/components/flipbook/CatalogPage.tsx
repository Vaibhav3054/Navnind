// src/components/flipbook/CatalogPage.tsx
import Image from "next/image";
import { forwardRef } from "react";
import { CatalogPage as CatalogPageType } from './catalog-data';

interface CatalogPageProps {
  page: CatalogPageType;
}

const CatalogPage = forwardRef<HTMLDivElement, CatalogPageProps>(
({ page }, ref) => {
  const { title, subtitle, description, image, features, logo, type } = page;

  // Different layout for product pages vs informational pages
  if (type === 'product') {
    return (
      <div
            ref={ref}
            className="w-full h-full bg-white p-6 flex flex-col relative overflow-hidden"
        >
        {/* Background subtle pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/images/paper-texture.png')] bg-repeat" />
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-1">Notebook</h3>
              <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            </div>
            {logo && (
              <div className="w-10 h-10 relative flex-shrink-0">
                <Image src={logo} alt="NAVNIND logo" fill className="object-contain" />
              </div>
            )}
          </div>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">{description}</p>
          {features && features.length > 0 && (
            <ul className="mt-4 space-y-1 text-sm text-gray-700">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-gold-500">✦</span>
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
        {image && (
          <div className="flex-1 flex items-center justify-center py-6">
                <Image
                    src={image}
                    alt={title || "Product image"}
                    width={380}
                    height={520}
                    className="object-contain max-h-[380px] w-auto drop-shadow-xl"
                />
            </div>
        )}
        <div className="absolute bottom-4 right-6 text-xs text-gray-400">
          {page.pageNumber ? `Page ${page.pageNumber}` : ''}
        </div>
      </div>
    );
  }

  // For informational pages (about, manufacturing, quality, contact)
  return (
    <div className="w-full h-full bg-white p-6 flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/images/paper-texture.png')] bg-repeat" />
      <div className="relative z-10 flex-1 flex flex-col">
        <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-1">{subtitle || ''}</h3>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          {image && (
            <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden shadow-md">
              <Image src={image} alt={title || "Image"} fill className="object-cover" />
            </div>
          )}
          <p className="text-sm text-gray-600 leading-relaxed max-w-md">{description}</p>
        </div>
        <div className="absolute bottom-4 right-6 text-xs text-gray-400">
          {page.pageNumber ? `Page ${page.pageNumber}` : ''}
        </div>
      </div>
    </div>
  );
}
);

CatalogPage.displayName = "CatalogPage";
export default CatalogPage;