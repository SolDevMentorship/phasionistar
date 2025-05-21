import React, { useEffect } from 'react';
import { CustomWalletMultiButton } from '../component/WalletContext';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { AnchorProvider, Program } from '@project-serum/anchor';
import { connection } from 'next/server';
import { idl, PROGRAM_ID } from '../component/program_config';

const Home: React.FC = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const { publicKey, signTransaction, signAllTransactions, connected } = wallet;
  const [program, setProgram] = React.useState<Program | null>(null);
  // Set up program when wallet is connected
  useEffect(() => {
    if (!publicKey) return;

    const provider = new AnchorProvider(
      connection,
      { publicKey, signTransaction, signAllTransactions } as any,
      { commitment: "confirmed" }
    );
    const prog = new Program(idl, PROGRAM_ID, provider);
    setProgram(prog);

  }, [connection, publicKey, connected]);

   // Function to call when "Join as Designer" is clicked
  const handleJoinAsDesigner = async () => {
    if (!program || !publicKey) {
      alert("Connect your wallet first!");
      return;
    }
    try {
      // Example: call a registerDesigner instruction (replace with your actual instruction)
      await program.methods.registerDesigner().accounts({
        designer: publicKey,
        // ...other required accounts
      }).rpc();
      alert("You have joined as a designer!");
    } catch (err) {
      console.error(err);
      alert("Failed to join as designer.");
    }
  };
  return (
    <div className="bg-yellow-200 text-yellow-900">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-screen text-center bg-yellow-500">
        <h1 className="text-5xl font-extrabold">Revolutionizing Fashion Through Web3</h1>
        <p className="mt-4 text-lg">
          AI measurements, secure payments, and trusted designers at your fingertips.
        </p>
        <div className="mt-6 space-x-4">
         <CustomWalletMultiButton/>
          <button className="px-6 py-3 text-yellow-600 bg-white border border-yellow-600 rounded-lg hover:bg-yellow-700 hover:text-white">
            Join as Designer
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-yellow-400">
        <h2 className="text-3xl font-bold text-center">Our Features</h2>
        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">AI-Powered Measurements</h3>
            <p className="mt-2 text-sm">Accurate and hassle-free measurements using AI.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Escrow-Based Secure Payments</h3>
            <p className="mt-2 text-sm">Your payments are secure until delivery is confirmed.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Verified Designer Portfolios</h3>
            <p className="mt-2 text-sm">Work with trusted and verified designers.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Track Your Order with Confidence</h3>
            <p className="mt-2 text-sm">Stay updated on your order status at all times.</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-yellow-500">
        <h2 className="text-3xl font-bold text-center">How It Works</h2>
        <div className="grid gap-8 mt-8 sm:grid-cols-2">
          {/* Clients */}
          <div>
            <h3 className="text-xl font-semibold text-center">For Clients</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center space-x-4">
                <span className="p-2 text-white bg-yellow-600 rounded-full">1</span>
                <p>Sign Up</p>
              </li>
              <li className="flex items-center space-x-4">
                <span className="p-2 text-white bg-yellow-600 rounded-full">2</span>
                <p>Get Measured</p>
              </li>
              <li className="flex items-center space-x-4">
                <span className="p-2 text-white bg-yellow-600 rounded-full">3</span>
                <p>Confirm Delivery</p>
              </li>
            </ul>
          </div>
          {/* Designers */}
          <div>
            <h3 className="text-xl font-semibold text-center">For Designers</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center space-x-4">
                <span className="p-2 text-white bg-yellow-600 rounded-full">1</span>
                <p>Sign Up</p>
              </li>
              <li className="flex items-center space-x-4">
                <span className="p-2 text-white bg-yellow-600 rounded-full">2</span>
                <p>Showcase Portfolio</p>
              </li>
              <li className="flex items-center space-x-4">
                <span className="p-2 text-white bg-yellow-600 rounded-full">3</span>
                <p>Deliver Orders</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-yellow-400">
        <h2 className="text-3xl font-bold text-center">What Our Users Say</h2>
        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="italic">"Amazing platform! The AI measurements are spot on."</p>
            <div className="mt-4">
              <p className="font-bold">Jane Doe</p>
              <p className="text-sm text-gray-600">Client</p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="italic">"I love how secure the payment system is."</p>
            <div className="mt-4">
              <p className="font-bold">John Smith</p>
              <p className="text-sm text-gray-600">Designer</p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="italic">"The transparency and trust are unmatched."</p>
            <div className="mt-4">
              <p className="font-bold">Emily Johnson</p>
              <p className="text-sm text-gray-600">Client</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Footer */}
      <div className="py-16 text-center bg-yellow-500">
        <h2 className="text-3xl font-bold">Join the Revolution in Fashion</h2>
        <p className="mt-4">Transparency, trust, and innovation at your fingertips.</p>
        <div className="mt-6 space-x-4">
          <button className="px-6 py-3 text-white bg-yellow-600 rounded-lg hover:bg-yellow-700">
            Sign Up Now
          </button>
          <button className="px-6 py-3 text-yellow-600 bg-white border border-yellow-600 rounded-lg hover:bg-yellow-700 hover:text-white">
            View Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;