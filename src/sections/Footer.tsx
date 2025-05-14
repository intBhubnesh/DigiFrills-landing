import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaAngleRight,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-300 px-6 md:px-20 py-16 rounded-t-[40px] font-sans" style={{ background: "linear-gradient(135deg, #444 -31.5%, #000 100%)" }}>
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-12">
        {/* Logo and Text */}
        <div>
          <h1 className="text-7xl font-extrabold text-[#0260EB] leading-tight">
            DigiFrills
          </h1>
          <p className="mt-6 text-lg leading-relaxed">
            The next big thing starts here—
            <br />
            drop us a line and let’s get creating!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="md:col-span-2 grid grid-cols-2 gap-12 text-base">
          {/* Left Nav */}
          <div className="space-y-3">
            {["Home", "Benefits", "Porfolio", "Reviews", "About"].map(
              (item) => (
                <Link href="#" key={item}>
                  <span className="group flex items-center gap-2 hover:text-[#0260EB] cursor-pointer transition-all duration-300">
                    <FaAngleRight
                      size={10}
                      className="invisible group-hover:visible group-hover:translate-x-0 -translate-x-1 transition-all duration-300 text-orange-400"
                    />
                    {item}
                  </span>
                </Link>
              )
            )}
          </div>

          {/* Right Nav */}
          <div className="space-y-3">
            {["Linkedin", "Facebook", "Twitter", "Instagram", "Youtube"].map(
              (item) => (
                <Link href="#" key={item}>
                  <span className="group flex items-center gap-2 hover:text-[#0260EB] cursor-pointer transition-all duration-300">
                    <FaAngleRight
                      size={10}
                      className="opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300 text-[#0260EB]"
                    />
                    {item}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6" />

      {/* Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 text-[#0260EB] font-semibold uppercase">
            <FaPhoneAlt size={14} /> Phone
          </div>
          <p className="mt-2">(91) 911255393</p>
        </div>

        <div>
          <div className="flex items-center gap-2 text-[#0260EB] font-semibold uppercase">
            <FaEnvelope size={14} /> Email
          </div>
          <p className="mt-2">founder@digifrills.in</p>
        </div>

        <div>
          <div className="flex items-center gap-2 text-[#0260EB] font-semibold uppercase">
            <FaMapMarkerAlt size={14} /> Address
          </div>
          <p className="mt-2 leading-relaxed">
            Vizag,
            <br />
            Andhra Pradesh, 521101
          </p>
        </div>


      </div>

      {/* Bottom Strip */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 mt-12">
        <p>&copy; 2025 DigiFrills. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
