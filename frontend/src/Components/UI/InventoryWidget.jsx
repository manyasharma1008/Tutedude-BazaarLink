import React from 'react';
import { AlertTriangle, Package, TrendingDown, CheckCircle } from 'lucide-react';

function InventoryWidget({ item, onReorder }) {
  const daysLeft = Math.floor(item.stock / item.dailyUsage);
  const isLowStock = item.stock < item.reorderPoint;
  const isCritical = item.stock < item.reorderPoint * 0.5;

  const getStatusConfig = () => {
    if (isCritical) {
      return {
        icon: AlertTriangle,
        bgColor: 'bg-rose-50',
        borderColor: 'border-rose-200',
        textColor: 'text-rose-700',
        iconColor: 'text-rose-500',
        actionBg: 'bg-rose-600',
        actionHover: 'hover:bg-rose-700',
        message: '⚠️ Critical - Reorder Now!'
      };
    } else if (isLowStock) {
      return {
        icon: TrendingDown,
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        textColor: 'text-yellow-700',
        iconColor: 'text-yellow-500',
        actionBg: 'bg-yellow-600',
        actionHover: 'hover:bg-yellow-700',
        message: '⚠️ Reorder Recommended'
      };
    } else {
      return {
        icon: CheckCircle,
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        textColor: 'text-green-700',
        iconColor: 'text-green-500',
        actionBg: 'bg-neon_blue-600',
        actionHover: 'hover:bg-neon_blue-700',
        message: '✅ Stock Good'
      };
    }
  };

  const config = getStatusConfig();
  const StatusIcon = config.icon;

  return (
    <div className={`${config.bgColor} border ${config.borderColor} p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 w-full max-w-sm`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex-1">
          <h5 className="font-medium text-gray-900 mb-1">{item.name}</h5>
          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
            {item.category}
          </span>
        </div>
        <StatusIcon className={`w-5 h-5 ${config.iconColor}`} />
      </div>

      {/* Stock Info */}
      <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
        <div>
          <span className="text-gray-600 block">In Stock:</span>
          <span className="font-semibold text-gray-900">{item.stock} {item.unit}</span>
        </div>
        <div>
          <span className="text-gray-600 block">Daily Usage:</span>
          <span className="font-semibold text-gray-900">{item.dailyUsage} {item.unit}/day</span>
        </div>
      </div>

      {/* Days Left */}
      <div className="mb-3">
        <span className="text-xs text-gray-600">Estimated days left:</span>
        <div className="font-medium text-gray-900">{daysLeft} days</div>
      </div>

      {/* Status Message */}
      <div className={`text-sm font-semibold mb-3 ${config.textColor}`}>
        {config.message}
      </div>

      {/* Last Order Info */}
      <div className="text-xs text-gray-500 mb-3">
        Last ordered: {item.lastOrderDate}
      </div>

      {/* Action Button */}
      {(isLowStock || isCritical) && (
        <button
          onClick={() => onReorder && onReorder(item.id)}
          className={`w-full py-2 px-3 ${config.actionBg} ${config.actionHover} text-white rounded-lg font-medium transition-colors duration-200 text-sm`}
        >
          {isCritical ? 'Reorder Now' : 'Schedule Reorder'}
        </button>
      )}
    </div>
  );

}
export default InventoryWidget;