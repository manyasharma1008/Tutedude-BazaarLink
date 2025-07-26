import React from 'react';
import { InventoryWidget } from '../components/ui/InventoryWidget';
import { ResponsiveContainer } from '../components/ui/ResponsiveContainer';
import { Package, AlertTriangle, TrendingUp } from 'lucide-react';

function InventoryPage() {
  const inventoryItems = [
    {
      id: 1,
      name: "Organic Rice",
      stock: 7,
      unit: "kg",
      dailyUsage: 2,
      reorderPoint: 10,
      category: "Grains",
      lastOrderDate: "2024-01-10"
    },
    {
      id: 2,
      name: "Wheat Flour",
      stock: 25,
      unit: "kg",
      dailyUsage: 3,
      reorderPoint: 15,
      category: "Grains",
      lastOrderDate: "2024-01-08"
    },
    {
      id: 3,
      name: "Cooking Oil",
      stock: 3,
      unit: "liters",
      dailyUsage: 1,
      reorderPoint: 8,
      category: "Oils",
      lastOrderDate: "2024-01-05"
    },
    {
      id: 4,
      name: "Tomatoes",
      stock: 12,
      unit: "kg",
      dailyUsage: 2.5,
      reorderPoint: 8,
      category: "Vegetables",
      lastOrderDate: "2024-01-12"
    },
    {
      id: 5,
      name: "Onions",
      stock: 20,
      unit: "kg",
      dailyUsage: 1.5,
      reorderPoint: 10,
      category: "Vegetables",
      lastOrderDate: "2024-01-11"
    },
    {
      id: 6,
      name: "Chicken",
      stock: 2,
      unit: "kg",
      dailyUsage: 1.2,
      reorderPoint: 5,
      category: "Meat",
      lastOrderDate: "2024-01-09"
    }
  ];

  const handleReorder = (itemId) => {
    console.log('Reordering item:', itemId);
  };

  const criticalItems = inventoryItems.filter(item => item.stock < item.reorderPoint * 0.5).length;
  const lowStockItems = inventoryItems.filter(item => item.stock < item.reorderPoint && item.stock >= item.reorderPoint * 0.5).length;
  const wellStockedItems = inventoryItems.filter(item => item.stock >= item.reorderPoint).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <ResponsiveContainer>
        {/* Header */}
        <section className="py-8">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-8 h-8 text-neon_blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">📦 Smart Inventory Management</h1>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-rose-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Critical Items</p>
                  <p className="text-2xl font-bold text-rose-600">{criticalItems}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-rose-500" />
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Low Stock</p>
                  <p className="text-2xl font-bold text-yellow-600">{lowStockItems}</p>
                </div>
                <Package className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Well Stocked</p>
                  <p className="text-2xl font-bold text-green-600">{wellStockedItems}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Inventory Grid */}
        <section className="pb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Inventory Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {inventoryItems.map((item) => (
              <InventoryWidget
                key={item.id}
                item={item}
                onReorder={handleReorder}
              />
            ))}
          </div>
        </section>

        {/* Reorder Automation Info */}
        <section className="pb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              🤖 Smart Reorder Automation
            </h3>
            <p className="text-gray-600 mb-4">
              Our system automatically tracks your inventory levels and predicts when you'll need to reorder based on your usage patterns.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                <span>Critical: Immediate reorder needed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Low Stock: Reorder recommended</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Good: Stock levels healthy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-neon_blue-500 rounded-full"></div>
                <span>Automated: Set up auto-reorder</span>
              </div>
            </div>
          </div>
        </section>
      </ResponsiveContainer>
    </div>
  );
}

export default InventoryPage;