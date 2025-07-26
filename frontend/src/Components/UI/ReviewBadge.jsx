import React from 'react';
import { Star, Shield, Award } from 'lucide-react';

function ReviewBadge({ score, reviews }) {
  const getBadgeConfig = () => {
    if (score > 4.5 && reviews > 100) {
      return {
        text: "Top Rated",
        icon: Award,
        bgColor: "bg-gradient-to-r from-rose-400 to-rose-500",
        textColor: "text-white"
      };
    } else if (score > 4.2 && reviews > 50) {
      return {
        text: "Trusted",
        icon: Shield,
        bgColor: "bg-gradient-to-r from-green-400 to-green-500",
        textColor: "text-white"
      };
    } else if (score > 4.0 && reviews > 20) {
      return {
        text: "Verified",
        icon: Star,
        bgColor: "bg-gradient-to-r from-neon_blue-400 to-neon_blue-500",
        textColor: "text-white"
      };
    } else {
      return {
        text: "New Supplier",
        icon: Star,
        bgColor: "bg-gradient-to-r from-gray-300 to-gray-400",
        textColor: "text-gray-700"
      };
    }
  };

  const { text, icon: Icon, bgColor, textColor } = getBadgeConfig();

  return (
    <div className={`${bgColor} px-3 py-1 rounded-full text-sm font-medium ${textColor} flex items-center gap-1 shadow-sm`}>
      <Icon className="w-3 h-3" />
      {text}
    </div>
  );
}

export default ReviewBadge;