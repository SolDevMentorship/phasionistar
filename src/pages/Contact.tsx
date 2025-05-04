import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-yellow-200 text-yellow-900 min-h-screen flex flex-col items-center">
      {/* Title Section */}
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold">Get in Touch with Phasionistar</h1>
        <p className="mt-4 text-lg">
          Phasionistar connects designers and clients in a secure Web3-powered environment.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-16">
        {/* Form */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-1 p-2 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-2 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full mt-1 p-2 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Section */}
        <div className="mt-8 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-2xl font-bold">Follow Us</h2>
          <p className="mt-2">Stay connected with us on social media:</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-yellow-600 hover:text-yellow-800">
              <i className="fab fa-instagram text-3xl"></i>
            </a>
            <a href="#" className="text-yellow-600 hover:text-yellow-800">
              <i className="fab fa-twitter text-3xl"></i>
            </a>
            <a href="#" className="text-yellow-600 hover:text-yellow-800">
              <i className="fab fa-linkedin text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;