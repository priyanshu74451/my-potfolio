import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Contact Me
      </h2>

      <form
        action="https://formsubmit.co/priyanshumani74@gmail.com"
        method="POST"
        className="max-w-xl mx-auto flex flex-col gap-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 border rounded-lg text-gray-800"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 border rounded-lg text-gray-800"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="p-3 border rounded-lg text-gray-800"
        ></textarea>

        {/* Optional hidden fields */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Thanks for your message! I’ll get back to you shortly."
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;