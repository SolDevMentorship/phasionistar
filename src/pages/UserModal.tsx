import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserModal: React.FC<{ isReturningUser: boolean; onClose: () => void }> = ({ isReturningUser, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
        {/* Modal Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-yellow-600">
            {isReturningUser ? '🔓 Welcome Back to Phasionistar' : '👋 Welcome to Phasionistar'}
          </h2>
        </div>

        {/* Modal Content */}
        <div className="mt-6 space-y-6">
          {isReturningUser ? (
            // Returning User Flow
            <>
              <div>
                <p className="text-center text-gray-700">
                  Sign in with your wallet to continue.
                </p>
                <button className="w-full mt-4 py-2 px-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600">
                  🔐 Reconnect Wallet
                </button>
              </div>
              <div>
                <p className="text-center text-gray-700">What would you like to do today?</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <button className="py-2 px-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600">
                    👤 View Profile
                  </button>
                  <button className="py-2 px-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600">
                    📏 Re-check KYC
                  </button>
                  <button className="py-2 px-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600">
                    🛍️ Browse Designs
                  </button>
                  <button className="py-2 px-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600">
                    🧾 Track My Orders
                  </button>
                </div>
              </div>
            </>
          ) : (
            // New User Flow
            <>
              <div>
                <p className="text-center text-gray-700">
                  Let’s get started. Connect your wallet to create your Phasionistar account.
                </p>
                <button className="w-full mt-4 py-2 px-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600">
                  🔗 Connect Wallet
                </button>
              </div>
              <div>
                <p className="text-center text-gray-700">
                  Get fitted the smart way. Complete your AI-powered measurement KYC for tailored orders.
                </p>
                <button className="w-full mt-4 py-2 px-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600">
                  📏 Start Measurement KYC
                </button>
              </div>
              <div>
                <p className="text-center text-gray-700">
                  You’re all set! Discover and interact with exclusive designer collections.
                </p>
                <button className="w-full mt-4 py-2 px-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600">
                  🛍️ View Designs
                </button>
              </div>
            </>
          )}
        </div>

        {/* Close Button */}
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserModal;
 