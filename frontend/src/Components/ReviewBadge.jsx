import React from 'react';
import { Award, Shield, Truck } from 'lucide-react';

function ReviewBadge({ type, count }) {
  const getBadgeConfig = () => {
    switch (type) {
      case 'top-rated':
        return {
          icon: Award,
          text: 'Top Rated',
          bgColor: 'bg-gradient-to-r from-rose-500 to-rose-600',
          textColor: 'text-white'
        };
      case 'trusted':
        return {
          icon: Shield,
          text: `Trusted by ${count || 0}+ Buyers`,
          bgColor: 'bg-gradient-to-r from-zaffre-500 to-zaffre-600',
          textColor: 'text-white'
        };
      case 'consistent-delivery':
        return {
          icon: Truck,
          text: 'Consistent Delivery',
          bgColor: 'bg-gradient-to-r from-vivid_sky_blue-500 to-vivid_sky_blue-600',
          textColor: 'text-white'
        };
      default:
        return {
          icon: Award,
          text: 'Verified',
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-800'
        };
    }
  };

  const { icon: Icon, text, bgColor, textColor } = getBadgeConfig();

  return (
    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
      <Icon className="w-3 h-3" />
      {text}
    </div>
  );
}

export default ReviewBadge;