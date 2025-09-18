import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
        name: "Aarav Mehta",
        role: "Entrepreneur",
        feedback: "KINGCART has completely transformed the way I handle my business finances. Secure, fast, and reliable!",
        img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Priya Sharma",
        role: "Software Engineer",
        feedback: "I love the 24/7 support and smart solutions. The team really understands customer needs.",
        img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Rohan Verma",
        role: "Freelancer",
        feedback: "Banking made easy and stress-free. I feel confident knowing my data is secure.",
        img: "https://randomuser.me/api/portraits/men/76.jpg"
    }
];


    return (
    <div className="px-16 py-20 bg-white text-black">
        <div className="text-center mb-12">
            <h3 className="text-sm font-bold tracking-wide uppercase text-orange-600">Testimonials</h3>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">What Our Clients Say</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers who trust us with their financial journey.
            </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 border rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                    <img src={testimonial.img} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4" />
                    <div>
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
            </div>
            <p className="text-gray-700">“{testimonial.feedback}”</p>
        </div>
        ))}
        </div>
    </div>
    );
}

export default Testimonials
