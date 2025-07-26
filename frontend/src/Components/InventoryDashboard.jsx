import React from 'react';
import { Package, TrendingDown, TrendingUp, AlertCircle } from 'lucide-react';
import InventoryItem from './InventoryItem';

function InventoryDashboard({ inventoryItems, onReorder }) {
  const urgentItems = inventoryItems.filter(item => item.daysUntilReorder <= 0).length;
  const warningItems = inventoryItems.filter(item => item.daysUntilReorder > 0 && item.daysUntilReorder <= 3).length;
  const goodItems = inventoryItems.filter(item => item.daysUntilReorder > 3).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Package className="w-6 h-6 text-neon_blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Inventory Dashboard</h2>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-neon_blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Items</p>
              <p className="text-2xl font-bold text-gray-900">{inventoryItems.length}</p>
            </div>
            <Package className="w-8 h-8 text-neon_blue-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-rose-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Urgent Reorders</p>
              <p className="text-2xl font-bold text-rose-600">{urgentItems}</p>
            </div>
            <AlertCircle className="w-8 h-8 text-rose-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Warning Items</p>
              <p className="text-2xl font-bold text-yellow-600">{warningItems}</p>
            </div>
            <TrendingDown className="w-8 h-8 text-yellow-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Well Stocked</p>
              <p className="text-2xl font-bold text-green-600">{goodItems}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Inventory Items Grid */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Inventory Items</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {inventoryItems.map((item) => (
            <InventoryItem
              key={item.id}
              item={item}
              onReorder={onReorder}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InventoryDashboard;