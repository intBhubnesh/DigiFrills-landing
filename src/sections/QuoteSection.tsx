import React from "react";

const QuoteSection = () => {
  return (
    <section className="relative bg-[#F5F6F8] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Orange Card */}
        <div className="bg-[#F45A36] rounded-[48px] w-full lg:w-[950px] h-auto lg:h-[650px] p-8 md:p-12 text-white relative">
          <div className="mt-6 md:mt-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Need a custom quote?
            </h2>
            <p className="text-base md:text-xl max-w-xl">
              Don&apos;t let your ideas sit idle—slide into our inbox and
              let&apos;s make magic!
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-black text-white rounded-[40px] py-8 px-6 md:px-10 w-full max-w-lg shadow-xl">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-full bg-[#1A1A1A] p-3 px-6 placeholder-gray-400 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-full bg-[#1A1A1A] p-3 px-6 placeholder-gray-400 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full rounded-full bg-[#1A1A1A] p-3 px-6 placeholder-gray-400 outline-none"
            />
            <input
              type="text"
              placeholder="Enter Subject"
              className="w-full rounded-full bg-[#1A1A1A] p-3 px-6 placeholder-gray-400 outline-none"
            />
            <input
              type="text"
              placeholder="Your Budget (USD)"
              className="w-full rounded-full bg-[#1A1A1A] p-3 px-6 placeholder-gray-400 outline-none"
            />
            <textarea
              placeholder="Enter your Message"
              className="w-full rounded-3xl bg-[#1A1A1A] p-3 px-6 placeholder-gray-400 outline-none h-28 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#F45A36] text-white font-semibold py-3 rounded-full hover:bg-opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
