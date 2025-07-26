import React from 'react';
import { Users, Clock, Tag } from 'lucide-react';

function GroupBuyCard({ deal, onJoinGroup }) {
  const progressPercentage = (deal.currentBuyers / deal.requiredBuyers) * 100;
  const discountPercentage = Math.round(((deal.originalPrice - deal.discountPrice) / deal.originalPrice) * 100);
  const isComplete = deal.currentBuyers >= deal.requiredBuyers;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <span className="inline-block px-2 py-1 bg-vivid_sky_blue-100 text-vivid_sky_blue-700 rounded-full text-xs font-medium mb-2">
              {deal.category}
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{deal.productName}</h3>
            <p className="text-sm text-gray-600">by {deal.supplier}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-rose-600">₹{deal.discountPrice}</div>
            <div className="text-sm text-gray-500 line-through">₹{deal.originalPrice}</div>
            <div className="text-xs font-medium text-rose-600">{discountPercentage}% OFF</div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">
              {deal.currentBuyers} of {deal.requiredBuyers} buyers joined
            </span>
            <span className="font-medium text-gray-900">
              {deal.requiredBuyers - deal.currentBuyers} more needed
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ${
                isComplete 
                  ? 'bg-gradient-to-r from-vivid_sky_blue-500 to-vivid_sky_blue-600' 
                  : 'bg-gradient-to-r from-rose-500 to-rose-600'
              }`}
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            />
          </div>
          
          {/* Status Indicators */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{deal.currentBuyers} joined</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{deal.timeLeft} left</span>
              </div>
            </div>
            {isComplete && (
              <div className="flex items-center gap-1 text-vivid_sky_blue-600 font-medium text-sm">
                <Tag className="w-4 h-4" />
                Deal Unlocked!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Section */}
      <div className="p-6">
        <button
          onClick={() => onJoinGroup(deal.id)}
          disabled={isComplete}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
            isComplete
              ? 'bg-vivid_sky_blue-600 text-white hover:bg-vivid_sky_blue-700'
              : 'bg-gradient-to-r from-rose-500 to-rose-600 text-white hover:from-rose-600 hover:to-rose-700 hover:shadow-lg'
          }`}
        >
          {isComplete ? 'Buy Now at Discounted Price' : 'Join Group Buy'}
        </button>
        {!isComplete && (
          <p className="text-xs text-gray-500 text-center mt-2">
            No payment required until minimum buyers are reached
          </p>
        )}
      </div>
    </div>
  );
}

export default GroupBuyCard;