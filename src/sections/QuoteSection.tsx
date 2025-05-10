"use client";

import React, { useState, useRef } from "react";
// import emailjs from '@emailjs/browser'; // Uncomment when implementing email functionality

// Note: For production, you'll need to initialize EmailJS with your public key
// and uncomment the production code in the handleSubmit function

// Form data interface
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  budget: string;
  message: string;
}

// Initial form state
const initialFormState: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  budget: "",
  message: ""
};

const QuoteSection = () => {
  // Form state
  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: "Please fill in all required fields (Name, Email, and Message).",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        success: false,
        message: "Please enter a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // For testing/development - this will log the form data to console
      console.log("Form data being submitted:", formData);

      // In development mode, we'll just simulate a successful submission
      // In production, you would replace this with actual EmailJS implementation

      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Log what would be sent in a real email
      console.log("Email would be sent to: digifrills@gmail.com");
      console.log("Email content:", {
        from: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject || 'New Quote Request',
        budget: formData.budget,
        message: formData.message
      });

      // For testing purposes, always show success in development
      setSubmitStatus({
        success: true,
        message: "TEST MODE: Your form was submitted successfully. In production, an email would be sent to digifrills@gmail.com",
      });

      // Reset form for testing purposes
      setFormData(initialFormState);

      /*
      // PRODUCTION CODE - Uncomment and configure this section when ready for production

      // EmailJS configuration
      const serviceId = 'service_digifrills';  // Your EmailJS service ID
      const templateId = 'template_digifrills'; // Your EmailJS template ID
      const publicKey = 'your_public_key';     // Your EmailJS public key

      // Prepare template parameters
      const templateParams = {
        to_email: 'digifrills@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject || 'New Quote Request',
        budget: formData.budget,
        message: formData.message,
      };

      // Send email using EmailJS
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log("EmailJS result:", result);

      // Success message
      setSubmitStatus({
        success: true,
        message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      });

      // Reset form
      setFormData(initialFormState);
      */

    } catch (error) {
      console.error('Error in form submission:', error);
      setSubmitStatus({
        success: false,
        message: "Oops! Something went wrong. Please try again or contact us directly at digifrills@gmail.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-[#F5F6F8] m-3 w-fit lg:m-12 lg:mx-auto rounded-[40px] p-3">
      <div className="max-w-7xl flex flex-col lg:flex-row justify-between items-center">
        {/* Blue Card */}
        <div className="bg-[#0260EB] rounded-[32px] w-full lg:w-[950px] lg:h-[650px] h-[480px] p-10 md:p-12 text-white relative">
          <div className="md:mt-10 items-center inline-flex flex-col justify-center">
            <h2 className="form-heading text-center text-3xl md:text-5xl font-semibold">
              Need a custom quote?
            </h2>
            <p className="max-w-2/3 leading-0.5 form-description text-center text-xl md:text-2xl">
              Don&apos;t let your ideas sit idle—slide into our inbox and
              let&apos;s make magic!
            </p>
          </div>
        </div>
        {/* Form Card */}
        <div
          className="text-white rounded-[40px] py-8 px-6 md:px-10 -mt-72 md:mt-0 w-full max-w-[96%] shadow-xl lg:-ml-12 z-10"
          style={{ background: "linear-gradient(135deg, #444 -31.5%, #000 100%)" }}
        >
          {submitStatus && (
            <div
              className={`mb-4 p-4 rounded-lg ${
                submitStatus.success ? "bg-green-800/30 text-green-200" : "bg-red-800/30 text-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name *"
              className="w-full rounded-full bg-[#1A1A1A] p-3 px-6 placeholder-gray-400 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              className="w-full rounded-full bg-[#1A1A1A] p-3 px-6 placeholder-gray-400 outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full rounded-full bg-[#1A1A1A] p-3 px-6 placeholder-gray-400 outline-none"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter Subject"
              className="w-full rounded-full bg-[#1A1A1A] p-3 px-6 placeholder-gray-400 outline-none"
            />
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Your Budget (USD)"
              className="w-full rounded-full bg-[#1A1A1A] p-3 px-6 placeholder-gray-400 outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your Message *"
              className="w-full rounded-3xl bg-[#1A1A1A] p-3 px-6 placeholder-gray-400 outline-none h-28 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#0260EB] text-white font-semibold py-3 rounded-full transition ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-opacity-90"
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
