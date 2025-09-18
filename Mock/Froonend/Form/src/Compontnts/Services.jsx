import React from 'react'
import { FaChartLine } from 'react-icons/fa'
import { FaMobileAlt } from 'react-icons/fa'
import { FaCogs } from 'react-icons/fa'

const Services = () => {
  return (
    <div>
      <section className="py-20 px-10 bg-gray-50 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-12">Our Services</h3>
            <div className="grid md:grid-cols-3 gap-10">
                <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                    <FaCogs className="text-orange-600 text-5xl mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Digital Banking</h4>
                    <p className="text-gray-600">Manage accounts, transfer money, and pay bills seamlessly online.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                    <FaMobileAlt className="text-orange-600 text-5xl mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Mobile App</h4>
                    <p className="text-gray-600">Bank anytime, anywhere with our secure and easy-to-use mobile app.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                    <FaChartLine className="text-orange-600 text-5xl mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Investment Plans</h4>
                    <p className="text-gray-600">Grow your wealth with expert financial advice and smart investment options.</p>
                </div>
            </div>
    </section>
    </div>
  )
}

export default Services
