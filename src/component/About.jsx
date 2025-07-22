import React from 'react'

const About = () => {
  return (
        <section
  id="about"
  className="bg-[#B9FF66] text-gray-900 py-16 px-6 xl:px-32 rounded my-16"
>
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl lg:text-5xl font-bold tracking-wide mb-6">
      About Weather
    </h2>
    <p className="text-xl lg:text-2xl leading-relaxed text-gray-700">
      Weather is your smart companion for real-time weather insights. We deliver
      accurate, hyperlocal forecasts powered by reliable APIs, so you’re always
      a step ahead of the weather. From sunny skies to stormy nights, Weather
      helps you plan better and live smarter.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
      <div className="bg-[#B9FF66] text-black p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">Why Us?</h3>
        <p className="text-lg">
          We provide instant, location-based weather with intuitive visuals and
          smart tools.
        </p>
      </div>
      <div className="bg-[#B9FF66] text-black p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">What We Offer</h3>
        <p className="text-lg">
          Live temperature, wind speed, AQI, rain probability, and more — all
          animated.
        </p>
      </div>
      <div className="bg-[#B9FF66] text-black p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">Our Goal</h3>
        <p className="text-lg">
          Making weather tracking easy, beautiful, and helpful for everyone.
        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default About