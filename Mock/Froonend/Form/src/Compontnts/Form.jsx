import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUser, FaEnvelope, FaPen, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    dis: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.email || !form.dis) {
      toast.error("All fields are required Bhai");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4080/api/form/add",
        form
      );

      if (response.status === 200) {
        toast.success("Form successfully submitted!");
        setForm({ name: "", email: "", dis: "" });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      if (error.response && error.response.data) {
        toast.error(`Error: ${error.response.data.message}`);
      } else {
        toast.error("Kuch gadbad ho gayi. try again bro");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div className="bg-gray-50 shadow-lg rounded-2xl p-8 border border-gray-200">
          <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-orange-600 to-black bg-clip-text text-transparent">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
    
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                <FaUser className="inline mr-2 text-orange-500" /> Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                <FaEnvelope className="inline mr-2 text-orange-500" /> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="dis" className="block text-gray-700 font-semibold mb-2">
                <FaPen className="inline mr-2 text-orange-500" /> Message
              </label>
              <textarea
                id="dis"
                name="dis"
                value={form.dis}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>

         
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl font-bold shadow-md transform transition duration-300 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-gradient-to-r from-orange-600 to-black text-white hover:scale-105 hover:shadow-lg"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Right Section - Info */}
        <div className="space-y-6 md:pl-12">
          <h3 className="text-3xl font-bold text-gray-800">Get in Touch</h3>
          <p className="text-gray-600">
            Have questions or want to work with us? Fill out the form or reach us directly using the info below.
          </p>

          <div className="space-y-4">
            <p className="flex items-center text-lg text-gray-700">
              <FaMapMarkerAlt className="mr-3 text-orange-500" /> Chandigarh, India
            </p>
            <p className="flex items-center text-lg text-gray-700">
              <FaPhoneAlt className="mr-3 text-orange-500" /> +91 78524 14585
            </p>
            <p className="flex items-center text-lg text-gray-700">
              <FaEnvelope className="mr-3 text-orange-500" /> support@xx.com
            </p>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default ContactForm;
