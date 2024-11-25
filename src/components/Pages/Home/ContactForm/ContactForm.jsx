"use client";
import React, { useState } from "react";

const ContactForm = () => {
  // State to handle form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    reason: "",
    budget: 3000,
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear errors
  };

  // Handle budget slider
  const handleBudgetChange = (e) => {
    setFormData((prev) => ({ ...prev, budget: e.target.value }));
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.reason) newErrors.reason = "Please select a reason.";
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Valid if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Abort if validation fails
    console.log("Form Submitted: ", formData);
    alert("Form submitted successfully!");
    setFormData({
      fullName: "",
      email: "",
      reason: "",
      budget: 3000,
      message: "",
    });
  };

  return (
    <section className="py-5 md:py-10">
      <div className="main_container">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 md:gap-6 bg-white shadow-md rounded-lg p-5 md:p-8 w-full md:w-2/3 mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-[#111204] mb-2 font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Type here"
                className={`w-full border-b-2 py-2 outline-none ${
                  errors.fullName ? "border-red-500" : "focus:border-green-500"
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-[#111204] mb-2 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Type here"
                className={`w-full border-b-2 py-2 outline-none ${
                  errors.email ? "border-red-500" : "focus:border-green-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Reason */}
          <div>
            <label
              htmlFor="reason"
              className="block text-[#111204] mb-2 font-medium"
            >
              Why are you contacting us?
            </label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className={`w-full border-b-2 py-2 bg-transparent outline-none ${
                errors.reason ? "border-red-500" : "focus:border-green-500"
              }`}
            >
              <option value="">Select</option>
              <option value="Project Inquiry">Project Inquiry</option>
              <option value="Support Request">Support Request</option>
              <option value="Other">Other</option>
            </select>
            {errors.reason && (
              <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
            )}
          </div>

          {/* Budget */}
          <div>
            <label className="block text-[#111204] mb-2 font-medium">
              Your Budget
            </label>
            <p className="text-gray-500 mb-1">Slide to indicate your budget range</p>
            <input
              type="range"
              min="1000"
              max="5000"
              value={formData.budget}
              onChange={handleBudgetChange}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-sm mt-1">
              <span>$1000</span>
              <span className="text-green-500 font-medium">
                ${formData.budget}
              </span>
              <span>$5000</span>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-[#111204] mb-2 font-medium"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type here"
              rows="4"
              className={`w-full border-b-2 py-2 outline-none ${
                errors.message ? "border-red-500" : "focus:border-green-500"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
