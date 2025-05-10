
import React from 'react';
import { Eye } from 'lucide-react';

interface EyeExerciseProps {
  description: string;
}

const EyeExercise: React.FC<EyeExerciseProps> = ({ description }) => {
  return (
    <div className="text-center">
      <div className="w-32 h-32 bg-microbreak-blue rounded-full mx-auto mb-4 flex items-center justify-center">
        <Eye size={48} className="text-microbreak-tertiary" />
      </div>
      <p className="text-gray-700">{description}</p>
      <p className="text-gray-500 text-sm mt-4">Your eyes work hard - give them rest</p>
    </div>
  );
};

export default EyeExercise;
