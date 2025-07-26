import React, { useState } from 'react';
import { ShoppingCart, Users, Package, Star, Home } from 'lucide-react';
import HomePage from './pages/HomePage';
import InventoryPage from './pages/InventoryPage';
import { SupplierCard } from './components/ui/SupplierCard';
import { GroupBuyCard } from './components/ui/GroupBuyCard';
import { ResponsiveContainer } from './components/ui/ResponsiveContainer';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Mock data
  const suppliers = [
    {
      id: 1,
      name: "Fresh Farms Co.",
      categories: ["Vegetables", "Fruits", "Organic"],
      location: "Mumbai, Maharashtra",
      rating: 4.8,
      reviewCount: 156,
      fssai: "✓",
      gst: "✓", 
      aadhar: "✓",
      badges: ['Top Rated', 'Trusted']
    },
    {
      id: 2,
      name: "Spice Masters Ltd.",
      categories: ["Spices", "Condiments", "Masalas"],
      location: "Delhi, NCR",
      rating: 4.6,
      reviewCount: 89,
      fssai: "✓",
      gst: "✓",
      aadhar: "✗",
      badges: ['Consistent Delivery']
    },
    {
      id: 3,
      name: "Dairy Direct",
      categories: ["Dairy", "Milk Products", "Cheese"],
      location: "Pune, Maharashtra",
      rating: 4.9,
      reviewCount: 234,
      fssai: "✓",
      gst: "✓",
      aadhar: "✓",
      badges: ['Top Rated', 'Trusted', 'Consistent Delivery']
    }
  ];

  const groupDeals = [
    {
      id: 1,
      productName: "Premium Basmati Rice (25kg)",
      originalPrice: 2500,
      discountPrice: 2000,
      requiredBuyers: 10,
      currentBuyers: 7,
      discount: 20,
      timeLeft: "2 days",
      category: "Grains",
      supplier: "Rice World"
    },
    {
      id: 2,
      productName: "Organic Turmeric Powder (5kg)",
      originalPrice: 800,
      discountPrice: 650,
      requiredBuyers: 15,
      currentBuyers: 15,
      discount: 19,
      timeLeft: "12 hours",
      category: "Spices",
      supplier: "Spice Masters Ltd."
    },
    {
      id: 3,
      productName: "Fresh Onions (50kg)",
      originalPrice: 1500,
      discountPrice: 1200,
      requiredBuyers: 8,
      currentBuyers: 5,
      discount: 20,
      timeLeft: "4 days",
      category: "Vegetables",
      supplier: "Fresh Farms Co."
    }
  ];

  const handleJoinGroup = (dealId) => {
    console.log('Joining group deal:', dealId);
    // Handle group joining logic
  };

  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'suppliers', label: 'Suppliers', icon: Star },
    { id: 'group-deals', label: 'Group Deals', icon: Users },
    { id: 'inventory', label: 'Inventory', icon: Package }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-8 h-8 text-neon_blue-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-neon_blue-600 to-vivid_sky_blue-600 bg-clip-text text-transparent">
                MarketPlace Pro
              </h1>
            </div>
            <div className="text-sm text-gray-600">
              Smart B2B Food Marketplace
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white shadow-sm">
        <ResponsiveContainer>
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-neon_blue-500 text-neon_blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </ResponsiveContainer>
      </nav>

      {/* Main Content */}
      <main>
        {activeTab === 'home' && <HomePage />}
        
        {activeTab === 'inventory' && <InventoryPage />}
        
        {activeTab === 'suppliers' && (
          <ResponsiveContainer className="py-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Verified Suppliers</h2>
              <p className="text-gray-600">Discover trusted suppliers with verified credentials</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {suppliers.map((supplier) => (
                <SupplierCard key={supplier.id} supplier={supplier} />
              ))}
            </div>
          </ResponsiveContainer>
        )}

        {activeTab === 'group-deals' && (
          <ResponsiveContainer className="py-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Group Buying Deals</h2>
              <p className="text-gray-600">Join group purchases to unlock bulk discounts</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {groupDeals.map((deal) => (
                <GroupBuyCard 
                  key={deal.id} 
                  product={deal} 
                  onJoinGroup={handleJoinGroup} 
                />
              ))}
            </div>
          </ResponsiveContainer>
        )}
      </main>
    </div>
  );
}

export default App;