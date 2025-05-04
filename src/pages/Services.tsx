import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="bg-yellow-200 text-yellow-900 min-h-screen">
      {/* Header Section */}
      <div className="text-center py-12 bg-yellow-500">
        <h1 className="text-5xl font-bold text-white">Our Services</h1>
        <p className="mt-4 text-lg text-yellow-100">
          Discover how Phasionistar revolutionizes fashion with Web3 technology.
        </p>
      </div>

      {/* Services Section */}
      <div className="container mx-auto py-16 px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Service Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-yellow-500 text-4xl mb-4">
            <i className="fas fa-ruler-combined"></i>
          </div>
          <h3 className="text-xl font-bold">Smart Measurement Management</h3>
          <p className="mt-2 text-sm">
            Leverage AI-powered tools to ensure accurate and hassle-free measurements.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-yellow-500 text-4xl mb-4">
            <i className="fas fa-lock"></i>
          </div>
          <h3 className="text-xl font-bold">Escrow-Based Payments</h3>
          <p className="mt-2 text-sm">
            Secure your transactions with smart contracts and escrow systems.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-yellow-500 text-4xl mb-4">
            <i className="fas fa-user-tie"></i>
          </div>
          <h3 className="text-xl font-bold">Designer Portfolio Showcase</h3>
          <p className="mt-2 text-sm">
            Explore verified designer portfolios and connect with trusted professionals.
          </p>
        </div>

        {/* Service Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-yellow-500 text-4xl mb-4">
            <i className="fas fa-id-card"></i>
          </div>
          <h3 className="text-xl font-bold">AI-Powered KYC</h3>
          <p className="mt-2 text-sm">
            Ensure secure and seamless identity verification with AI-driven KYC.
          </p>
        </div>

        {/* Service Card 5 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-yellow-500 text-4xl mb-4">
            <i className="fas fa-star"></i>
          </div>
          <h3 className="text-xl font-bold">Transparent Reviews</h3>
          <p className="mt-2 text-sm">
            Build trust with transparent and verifiable client reviews.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;