import React from "react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold text-center mb-8">
        How Can We Help You?
      </h1>
      <p className="text-center mb-4">
        Do you have a question or are you interested in working with our team?
        Just fill out the form fields below. Just Ask Us
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your name *
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your email *
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Opening Hours</h2>
          <p className="mb-4">
            <strong>Monday - Saturday:</strong> 9am - 5pm
            <br />
            <strong>Weekend:</strong> Closed
          </p>
          <h2 className="text-2xl font-semibold mb-4">Address</h2>
          <p className="mb-4">
            United States — 200 N Ashley , Tampa, FL 33690, United States
          </p>
          <h2 className="text-2xl font-semibold mb-4">Email Address</h2>
          <p>support@ijprintersolution.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
