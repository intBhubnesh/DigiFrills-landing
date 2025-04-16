import React from "react";
// TODO : Update tlhe section name to the CallToAction
const QuoteSection = () => {
  return (
    <section className="relative bg-[#F5F6F8]  m-3 lg:m-12 rounded-[40px] p-3">
      <div className="max-w-7xl  flex flex-col lg:flex-row justify-between items-center ">

       {/* Orange Card */}
       <div className="bg-[#F45A36]  rounded-[32px] w-full lg:w-[950px]  lg:h-[650px] h-[480px] p-10 md:p-12 text-white relative">
          <div className=" md:mt-10 items-center inline-flex flex-col  justify-center">
            <h2 className="form-heading text-center text-3xl md:text-5xl font-semibold ">
              Need a custom quote?
            </h2>
            <p className=" max-w-2/3 leading-0.5 form-description text-center text-xl  md:text-2xl ">
              Don&apos;t let your ideas sit idle—slide into our inbox and
              let&apos;s make magic!
            </p>
          </div>
        </div>
        {/* Form Card */}
        <div className="bg-black text-white rounded-[40px] py-8 px-6 md:px-10 -mt-72 md:mt-0 w-full max-w-[96%] shadow-xl  lg:-ml-12 z-30">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 px-6 placeholder-gray-400 "
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
