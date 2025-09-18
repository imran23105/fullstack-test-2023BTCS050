import React from 'react'

const WhyUs = () => {
  const features = [
        {
            title: "Secure & Reliable",
            desc: "Your data and transactions are protected with top-notch security protocols.",
            icon: "🔒"
        },
        {
            title: "24/7 Support",
            desc: "We are here to help you anytime with our dedicated support team.",
            icon: "📞"
        },
        {
            title: "Smart Solutions",
            desc: "Innovative and future-ready banking features to make your life easier.",
            icon: "⚡"
        },
        {
            title: "Trusted by Many",
            desc: "Thousands of satisfied clients trust us for their financial needs.",
            icon: "🤝"
        }
        ];


return (
    <div className="px-16 py-20 bg-gradient-to-r from-orange-900 via-white-900 to-gray-900 text-white">
        <div className="text-center mb-12">
            <h3 className="text-sm font-bold tracking-wide uppercase text-blue-300">Why Choose Us</h3>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">What Makes Us Different</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            We combine innovation, security, and customer focus to deliver the best banking experience tailored to your needs.
            </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
        <div key={index} className="p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
            <p className="text-gray-300 text-sm">{feature.desc}</p>
        </div>
            ))}
        </div>
    </div>
    );
}


export default WhyUs



