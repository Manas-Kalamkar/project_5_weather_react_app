import React from 'react'

const Contact = () => {
  return (
        <section
  id="contact"
  className="bg-[#191A23] text-white py-16 px-6 xl:px-32 rounded my-16"
>
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl lg:text-5xl font-bold tracking-wide mb-6 text-center">
      Contact Us
    </h2>
    <p className="text-xl text-center mb-10">
      Have a question or suggestion? We'd love to hear from you.
    </p>
    <form className="flex flex-col gap-6">
      <input
        type="text"
        placeholder="Your Name"
        className="p-4 rounded-md border border-black text-xl focus:outline-none"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="p-4 rounded-md border border-black text-xl focus:outline-none"
      />
      <textarea
        placeholder="Your Message"
        rows={5}
        className="p-4 rounded-md border border-black text-xl focus:outline-none"
        defaultValue={""}
      />
      <button
        type="submit"
        className="bg-black text-[#B9FF66] font-bold px-6 py-4 rounded-xl hover:bg-[#222] hover:shadow-lg transition text-xl"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

  )
}

export default Contact