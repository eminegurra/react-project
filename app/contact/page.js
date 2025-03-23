"use client";
import { useState } from "react";

export default function Contact({ onFormSent }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      tempErrors.message = "Message must be at least 10 characters long.";
    }

    return tempErrors;
  };

  const handleChange = (e) => {
    console.log(`📄 onChange - ${e.target.name}: ${e.target.value}`);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📄 onSubmit - Form submitted");

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {

      console.log("Validation failed", validationErrors);
      return;
    }
    

    console.log("Form submitted with values:", formData);
    onFormSent?.(); // optional parent handler
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Contact Us</h2>

      {submitted && (
        <p className="text-green-600 mb-4">✅ Your message has been sent!</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => console.log("onFocus - name input")}
            onBlur={() => console.log("onBlur - name input")}
            className={`w-full p-3 border rounded ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => console.log("onFocus - email input")}
            onBlur={() => console.log("onBlur - email input")}
            className={`w-full p-3 border rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            placeholder="Tell us more..."
            value={formData.message}
            onChange={handleChange}
            onFocus={() => console.log("onFocus - message input")}
            onBlur={() => console.log("onBlur - message input")}
            className={`w-full p-3 border rounded h-32 ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.message && (
            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
