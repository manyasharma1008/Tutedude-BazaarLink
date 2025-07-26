import React from 'react';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';

function InventoryItem({ item, onReorder }) {
  const getStatusConfig = () => {
    if (item.daysUntilReorder <= 0) {
      return {
        status: 'urgent',
        icon: AlertTriangle,
        bgColor: 'bg-rose-50',
        borderColor: 'border-rose-200',
        textColor: 'text-rose-700',
        actionBg: 'bg-rose-600',
        actionHover: 'hover:bg-rose-700',
        message: 'Reorder Now!'
      };
    } else if (item.daysUntilReorder <= 3) {
      return {
        status: 'warning',
        icon: Clock,
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        textColor: 'text-yellow-700',
        actionBg: 'bg-yellow-600',
        actionHover: 'hover:bg-yellow-700',
        message: `Reorder in ${item.daysUntilReorder} day${item.daysUntilReorder !== 1 ? 's' : ''}`
      };
    } else {
      return {
        status: 'good',
        icon: CheckCircle,
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        textColor: 'text-green-700',
        actionBg: 'bg-neon_blue-600',
        actionHover: 'hover:bg-neon_blue-700',
        message: `Reorder in ${item.daysUntilReorder} days`
      };
    }
  };

  const config = getStatusConfig();
  const StatusIcon = config.icon;

  return (
    <div className={`rounded-lg border-2 ${config.borderColor} ${config.bgColor} p-4 transition-all duration-200 hover:shadow-md`}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
            {item.category}
          </span>
        </div>
        <StatusIcon className={`w-5 h-5 ${config.textColor}`} />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <span className="text-gray-600">Current Stock:</span>
          <div className="font-semibold text-gray-900">
            {item.currentStock} {item.unit}
          </div>
        </div>
        <div>
          <span className="text-gray-600">Daily Usage:</span>
          <div className="font-semibold text-gray-900">
            {item.dailyUsage} {item.unit}/day
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-3">
        <div className="text-sm">
          <span className="text-gray-600">Last ordered:</span>
          <div className="font-medium text-gray-700">{item.lastOrderDate}</div>
        </div>
        <div className={`text-sm font-medium ${config.textColor}`}>
          {config.message}
        </div>
      </div>

      {(config.status === 'urgent' || config.status === 'warning') && (
        <button
          onClick={() => onReorder(item.id)}
          className={`w-full py-2 px-4 ${config.actionBg} ${config.actionHover} text-white rounded-lg font-medium transition-colors duration-200`}
        >
          {config.status === 'urgent' ? 'Reorder Now' : 'Schedule Reorder'}
        </button>
      )}
    </div>
  );
}

export default InventoryItem;