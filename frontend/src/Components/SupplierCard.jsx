import React, { useState } from 'react';
import { MapPin, CheckCircle, MessageCircle } from 'lucide-react';
import StarRating from './StarRating';
import ReviewBadge from './ReviewBadge';

function SupplierCard({ supplier }) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newRating, setNewRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleSubmitReview = () => {
    // Handle review submission logic here
    console.log('Review submitted:', { rating: newRating, text: reviewText });
    setShowReviewForm(false);
    setNewRating(0);
    setReviewText('');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{supplier.name}</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{supplier.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <StarRating rating={supplier.rating} readonly size="sm" />
              <span className="text-sm text-gray-600">({supplier.reviewCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {supplier.categories.map((category, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-neon_blue-100 text-neon_blue-700 rounded-full text-sm font-medium"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Verification Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {supplier.verifications?.fssai && (
            <div className="flex items-center gap-1 px-2 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-medium">
              <CheckCircle className="w-3 h-3" />
              FSSAI Verified
            </div>
          )}
          {supplier.verifications?.aadhar && (
            <div className="flex items-center gap-1 px-2 py-1 bg-grape-100 text-grape-700 rounded-full text-xs font-medium">
              <CheckCircle className="w-3 h-3" />
              Aadhar Verified
            </div>
          )}
          {supplier.verifications?.gst && (
            <div className="flex items-center gap-1 px-2 py-1 bg-zaffre-100 text-zaffre-700 rounded-full text-xs font-medium">
              <CheckCircle className="w-3 h-3" />
              GST Verified
            </div>
          )}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap gap-2">
          {supplier.badges.map((badge, index) => (
            <ReviewBadge 
              key={index} 
              type={badge} 
              count={badge === 'trusted' ? supplier.trustedCount : undefined}
            />
          ))}
        </div>
      </div>

      {/* Review Section */}
      <div className="p-6">
        {!showReviewForm ? (
          <button
            onClick={() => setShowReviewForm(true)}
            className="flex items-center gap-2 text-neon_blue-600 hover:text-neon_blue-700 font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Write a Review
          </button>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Rating
              </label>
              <StarRating 
                rating={newRating} 
                onRatingChange={setNewRating}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Review
              </label>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Share your experience with this supplier..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon_blue-500 focus:border-transparent resize-none"
                rows={3}
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleSubmitReview}
                disabled={newRating === 0}
                className="px-4 py-2 bg-neon_blue-600 text-white rounded-lg hover:bg-neon_blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors"
              >
                Submit Review
              </button>
              <button
                onClick={() => setShowReviewForm(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SupplierCard