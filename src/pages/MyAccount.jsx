import React from "react";

const MyAccount = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white mt-16">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Track Your Order
      </h1>
      <p className="text-center text-blue-900 mb-4">
        To track your order, please enter your Order ID in the box below and
        press the "Track" button. This was given to you on your receipt and in
        the confirmation email you should have received.
      </p>
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="order-id"
                className="block text-sm font-medium text-blue-900"
              >
                Order ID
              </label>
              <input
                type="text"
                id="order-id"
                className="mt-1 block w-full px-3 py-2 border border-blue-900 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Found in your order confirmation email."
              />
            </div>
            <div>
              <label
                htmlFor="billing-email"
                className="block text-sm font-medium text-blue-900"
              >
                Billing email
              </label>
              <input
                type="email"
                id="billing-email"
                className="mt-1 block w-full px-3 py-2 border border-blue-900 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Email you used during checkout."
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Track
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
