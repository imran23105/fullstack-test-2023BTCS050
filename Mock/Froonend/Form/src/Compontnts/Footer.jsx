import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[50PX]">
        <div>
            <h1 className="text-xl font-bold text-white mb-4">KINGCART</h1>
            <p className="text-gray-400">Future-ready smart banking solutions designed for everyone.</p>
        </div>
        <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <p>Email: support@kingCART.com</p>
            <p>Phone: +91 78374 35789</p>
        </div>
        <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-white"><FaInstagramSquare /></a>
                <a href="#" className="hover:text-white"><FaTwitter /></a>
                <a href="#" className="hover:text-white"><FaFacebook /></a>
                <a href="#  " className="hover:text-white"><CgWebsite /></a>
            </div>
        </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} KINGCART. All Rights Reserved.
        </div>
        </footer>
    </div>
  )
}

export default Footer
