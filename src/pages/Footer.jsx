import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Logo and Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Ij Printer Solution</h2>
            <p className="mb-4">
              Ij Printer Solution is your one-stop solution for all your office
              needs. We provide a wide range of small business and home office
              printers.
            </p>
            <p className="mb-4">Need Help?</p>
            <p className="mb-4">support@ijprintersolution.com</p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <Link to="/shop" className="hover:text-gray-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-gray-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Information */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Legal Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/disclaimer" className="hover:text-gray-200">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-gray-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-gray-200"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-and-returns-policy"
                  className="hover:text-gray-200"
                >
                  Refund and Returns Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Store Information */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Store Information</h3>
            <p className="mb-4">
              Copyright 2023 © Ij Printer Solution. All rights reserved.
            </p>
            <p>200 N Ashley Dr, Tampa, FL 33602, United States</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
