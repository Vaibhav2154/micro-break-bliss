
import React from 'react';
import { Star } from 'lucide-react';

interface MindfulQuestionProps {
  question: string;
}

const MindfulQuestion: React.FC<MindfulQuestionProps> = ({ question }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <Star className="text-microbreak-primary" size={32} />
      </div>
      <p className="text-xl font-medium text-gray-700 mb-4">{question}</p>
      <p className="text-gray-500 text-sm">Take a moment to consider this question</p>
    </div>
  );
};

export default MindfulQuestion;
