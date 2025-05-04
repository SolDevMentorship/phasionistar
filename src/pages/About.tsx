import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-yellow-400 text-yellow-900">
      {/* Introduction Section */}
      <div className="py-16 text-center bg-yellow-500">
        <h1 className="text-5xl font-extrabold">About Phasionistar</h1>
        <p className="mt-4 text-lg">
          A Web3-native platform bridging fashion and trust.
        </p>
      </div>

      {/* Project Overview Section */}
      <div className="py-16 bg-yellow-400">
        <h2 className="text-3xl font-bold text-center">Why We Built Phasionistar</h2>
        <div className="mt-8 space-y-8">
          <div>
            <h3 className="text-xl font-semibold">The Problem</h3>
            <p className="mt-2 text-sm">
              The fashion tech space is underserved, lacking transparency and innovation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Our Solution</h3>
            <p className="mt-2 text-sm">
              Leveraging AI measurements, escrow payments, and designer-client transparency to revolutionize the industry.
            </p>
          </div>
        </div>
      </div>

      {/* Value Propositions Section */}
      <div className="py-16 bg-yellow-500">
        <h2 className="text-3xl font-bold text-center">Our Value Propositions</h2>
        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">For Designers</h3>
            <p className="mt-2 text-sm">
              Manage clients, portfolios, and secure payments with ease.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">For Clients</h3>
            <p className="mt-2 text-sm">
              Enjoy order tracking, trusted designers, and verifiable reviews.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">For Developers</h3>
            <p className="mt-2 text-sm">
              Access modular tools for building Web3 fashion applications.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Vision Section */}
      <div className="py-16 bg-yellow-400">
        <h2 className="text-3xl font-bold text-center">Built for the Future</h2>
        <div className="flex justify-center mt-8 space-x-8">
          <div className="text-center">
            <p className="text-xl font-semibold">Solana</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold">Rust (Anchor)</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold">React/TS</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold">Arweave/IPFS</p>
          </div>
        </div>
      </div>

      {/* Team Commitment Section */}
      <div className="py-16 bg-yellow-500">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="italic text-2xl">
            “We’re building a smarter, more secure future for fashion.”
          </blockquote>
          <p className="mt-4 font-bold">- Afolabi M. S., Abimiku, Musty</p>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="py-16 text-center bg-yellow-400">
        <h2 className="text-3xl font-bold">Explore Phasionistar</h2>
        <p className="mt-4">Join us in shaping the future of fashion.</p>
        <div className="mt-6 space-x-4">
          <button className="px-6 py-3 text-white bg-yellow-600 rounded-lg hover:bg-yellow-700">
            Get Started
          </button>
          <button className="px-6 py-3 text-yellow-600 bg-white border border-yellow-600 rounded-lg hover:bg-yellow-700 hover:text-white">
            View Our Roadmap
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;