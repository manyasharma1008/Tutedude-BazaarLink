import React from 'react';
import { Star } from 'lucide-react';

function StarRating({ 
  rating, 
  onRatingChange, 
  readonly = false,
  size = 'md'
}) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${sizeClasses[size]} ${
            star <= rating 
              ? 'fill-yellow-400 text-yellow-400' 
              : 'text-gray-300'
          } ${
            !readonly && onRatingChange 
              ? 'cursor-pointer hover:text-yellow-400 transition-colors' 
              : ''
          }`}
          onClick={() => !readonly && onRatingChange && onRatingChange(star)}
        />
      ))}
    </div>
  );
}