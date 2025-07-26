import React from 'react';
import { Users, Clock, ShoppingCart } from 'lucide-react';

function GroupBuyCard({ product, onJoinGroup }) {
  const progressPercentage = (product.currentBuyers / product.requiredBuyers) * 100;
  const isComplete = product.currentBuyers >= product.requiredBuyers;
  const buyersNeeded = product.requiredBuyers - product.currentBuyers;

  return (
    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-md">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <span className="inline-block px-2 py-1 bg-yellow-200 text-yellow-800 rounded-full text-xs font-medium mb-2">
            {product.category}
          </span>
          <h4 className="font-bold text-lg text-yellow-800 leading-tight">{product.name}</h4>
        </div>
        <div className="text-right ml-2">
          <div className="text-lg font-bold text-rose-600">₹{product.discountPrice}</div>
          <div className="text-xs text-gray-500 line-through">₹{product.originalPrice}</div>
        </div>
      </div>

      {/* Group Status */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
          <ShoppingCart className="w-4 h-4" />
          Join {product.currentBuyers} others to unlock {product.discount}% off
        </p>
        
        {/* Progress Bar */}
        <div className="w-full bg-yellow-200 rounded-full h-2 mb-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${
              isComplete 
                ? 'bg-gradient-to-r from-green-400 to-green-500' 
                : 'bg-gradient-to-r from-yellow-400 to-yellow-500'
            }`}
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          />
        </div>

        {/* Status Info */}
        <div className="flex justify-between items-center text-xs text-gray-600">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              {product.currentBuyers}/{product.requiredBuyers}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {product.timeLeft} left
            </span>
          </div>
          {isComplete ? (
            <span className="text-green-600 font-medium">✅ Deal Unlocked!</span>
          ) : (
            <span className="text-yellow-700 font-medium">{buyersNeeded} more needed</span>
          )}
        </div>
      </div>

      {/* Action Button */}
      <button 
        onClick={() => onJoinGroup && onJoinGroup(product.id)}
        className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
          isComplete
            ? 'bg-green-500 hover:bg-green-600 text-white'
            : 'bg-yellow-500 hover:bg-yellow-600 text-white hover:shadow-md'
        }`}
      >
        {isComplete ? 'Buy Now at Discount' : 'Join Group Buy'}
      </button>
      
      {!isComplete && (
        <p className="text-xs text-gray-500 text-center mt-2">
          No payment required until minimum buyers are reached
        </p>
      )}
    </div>
  );
}