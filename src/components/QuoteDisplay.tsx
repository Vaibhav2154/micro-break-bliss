
import React from 'react';

interface QuoteDisplayProps {
  quote: string;
}

const QuoteDisplay: React.FC<QuoteDisplayProps> = ({ quote }) => {
  return (
    <div className="text-center">
      <div className="w-full py-4 px-6 bg-microbreak-lavender rounded-lg">
        <blockquote className="text-xl italic font-medium text-gray-700">{quote}</blockquote>
      </div>
      <p className="text-gray-500 text-sm mt-4">Take a moment to reflect on this</p>
    </div>
  );
};

export default QuoteDisplay;
