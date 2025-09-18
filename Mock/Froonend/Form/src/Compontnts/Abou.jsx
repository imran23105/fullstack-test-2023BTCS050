import React from 'react'

const About = () => {
  return (
        <div className="grid grid-cols-1  gap-12 px-16 py-20 bg-white text-black">
            <h3 className="text-sm font-bold tracking-wide mb-4">ABOUT US</h3>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
            This is a space to share more about the business: who's behind it, what it does and what this site has to offer.
            </h2>
            <p className="text-lg text-gray-700 mb-6">
            It’s an opportunity to tell the story behind the business or describe a special service or product it offers.
            </p>
            <button className="flex items-center bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-black w-fit">
            Read More
            <span className="ml-3 bg-white text-orange-600 rounded-full w-6 h-6 flex items-center justify-center">→</span>
            </button>
        </div>
  )
}

export default About
