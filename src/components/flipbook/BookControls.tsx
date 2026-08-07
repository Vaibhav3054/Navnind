// src/components/flipbook/BookControls.tsx

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BookControlsProps {
  onPrev: () => void;
  onNext: () => void;
  currentPage: number;
  totalPages: number;
  className?: string;
}

const BookControls: React.FC<BookControlsProps> = ({
  onPrev,
  onNext,
  currentPage,
  totalPages,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg ${className}`}>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full h-8 w-8"
        onClick={onPrev}
        disabled={currentPage === 0}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <span className="text-xs text-gray-600 min-w-[60px] text-center">
        {currentPage + 1} / {totalPages}
      </span>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full h-8 w-8"
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default BookControls;