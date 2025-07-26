import React from 'react';
import { SupplierCard } from '../components/ui/SupplierCard';
import { GroupBuyCard } from '../components/ui/GroupBuyCard';
import { ResponsiveContainer } from '../components/ui/ResponsiveContainer';

function HomePage() {
  // Featured suppliers
  const featuredSuppliers = [
    {
      id: 1,
      name: "Arvind Traders",
      categories: ["Grains", "Pulses"],
      location: "Mumbai, Maharashtra",
      rating: 4.7,
      reviewCount: 89,
      fssai: "✓",
      gst: "✓",
      aadhar: "✓",
      badges: ["Trusted", "Top Rated"]
    },
    {
      id: 2,
      name: "Fresh Valley Farms",
      categories: ["Vegetables", "Fruits"],
      location: "Pune, Maharashtra",
      rating: 4.8,
      reviewCount: 156,
      fssai: "✓",
      gst: "✓",
      aadhar: "✓",
      badges: ["Top Rated", "Consistent Delivery"]
    }
  ];

  // Featured group buys
  const featuredGroupBuys = [
    {
      id: 1,
      name: "Wheat Flour 25kg",
      currentBuyers: 18,
      requiredBuyers: 25,
      discount: 12,
      originalPrice: 1500,
      discountPrice: 1320,
      timeLeft: "2 days",
      category: "Grains"
    },
    {
      id: 2,
      name: "Organic Rice 20kg",
      currentBuyers: 22,
      requiredBuyers: 20,
      discount: 15,
      originalPrice: 2000,
      discountPrice: 1700,
      timeLeft: "1 day",
      category: "Grains"
    }
  ];

  const handleJoinGroup = (productId) => {
    console.log('Joining group for product:', productId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <ResponsiveContainer>
        {/* Hero Section */}
        <section className="py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon_blue-600 to-vivid_sky_blue-600 bg-clip-text text-transparent mb-4">
            Verified Supplier Marketplace
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with trusted suppliers, join group buying deals, and automate your inventory management
          </p>
        </section>

        {/* Featured Group Buys */}
        <section className="py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🤝 Featured Group Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {featuredGroupBuys.map((product) => (
              <GroupBuyCard 
                key={product.id} 
                product={product} 
                onJoinGroup={handleJoinGroup}
              />
            ))}
          </div>
        </section>

        {/* Featured Suppliers */}
        <section className="py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🧾 Featured Verified Suppliers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {featuredSuppliers.map((supplier) => (
              <SupplierCard key={supplier.id} supplier={supplier} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Supply Chain?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of businesses already saving time and money with our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-neon_blue-500 to-neon_blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-neon_blue-600 hover:to-neon_blue-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                Start Group Buying
              </button>
              <button className="bg-gradient-to-r from-vivid_sky_blue-500 to-vivid_sky_blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-vivid_sky_blue-600 hover:to-vivid_sky_blue-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                Find Suppliers
              </button>
            </div>
          </div>
        </section>
      </ResponsiveContainer>
    </div>
  );
}