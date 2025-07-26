import React, { useState } from 'react';
import { BadgeCheck, Star, MapPin, MessageCircle } from 'lucide-react';
import ReviewBadge from './ReviewBadge';

function SupplierCard({ supplier }) {
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [newRating, setNewRating] = useState(0);
    const [reviewText, setReviewText] = useState('');

    const handleSubmitReview = () => {
        console.log('Review submitted:', { rating: newRating, text: reviewText });
        setShowReviewForm(false);
        setNewRating(0);
        setReviewText('');
    };

    return (
        <div className="bg-white shadow-xl p-6 rounded-2xl w-full max-w-md border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{supplier.name}</h3>
                <BadgeCheck className="text-green-500 w-6 h-6" />
            </div>

            {/* Location */}
            <div className="flex items-center text-gray-600 mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{supplier.location}</span>
            </div>

            {/* Licenses */}
            <p className="text-sm text-gray-500 mb-4">
                📜 Licenses: FSSAI {supplier.fssai}, GST {supplier.gst}, Aadhar {supplier.aadhar}
            </p>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
                {supplier.categories.map((category, index) => (
                    <span
                        key={index}
                        className="px-2 py-1 bg-neon_blue-100 text-neon_blue-700 rounded-full text-xs font-medium"
                    >
                        {category}
                    </span>
                ))}
            </div>

            {/* Rating and Badges */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        {supplier.rating}
                    </span>
                    <span className="text-xs text-gray-500">({supplier.reviewCount} reviews)</span>
                </div>
                <ReviewBadge score={supplier.rating} reviews={supplier.reviewCount} />
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
                {supplier.badges.includes("Trusted") && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        ✅ Trusted
                    </span>
                )}
                {supplier.badges.includes("Top Rated") && (
                    <span className="bg-rose-100 text-rose-700 px-2 py-1 rounded-full text-xs font-medium">
                        ⭐ Top Rated
                    </span>
                )}
                {supplier.badges.includes("Consistent Delivery") && (
                    <span className="bg-vivid_sky_blue-100 text-vivid_sky_blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        🚚 Consistent Delivery
                    </span>
                )}
            </div>

            {/* Review Section */}
            <div className="border-t pt-4">
                {!showReviewForm ? (
                    <button
                        onClick={() => setShowReviewForm(true)}
                        className="flex items-center gap-2 text-neon_blue-600 hover:text-neon_blue-700 font-medium transition-colors text-sm"
                    >
                        <MessageCircle className="w-4 h-4" />
                        Write a Review
                    </button>
                ) : (
                    <div className="space-y-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Your Rating
                            </label>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className={`w-4 h-4 cursor-pointer transition-colors ${star <= newRating
                                                ? 'fill-yellow-400 text-yellow-400'
                                                : 'text-gray-300 hover:text-yellow-400'
                                            }`}
                                        onClick={() => setNewRating(star)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Your Review
                            </label>
                            <textarea
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                placeholder="Share your experience..."
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon_blue-500 focus:border-transparent resize-none text-sm"
                                rows={2}
                            />
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={handleSubmitReview}
                                disabled={newRating === 0}
                                className="px-3 py-1 bg-neon_blue-600 text-white rounded-lg hover:bg-neon_blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors text-sm"
                            >
                                Submit
                            </button>
                            <button
                                onClick={() => setShowReviewForm(false)}
                                className="px-3 py-1 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors text-sm"
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
export default SupplierCard;