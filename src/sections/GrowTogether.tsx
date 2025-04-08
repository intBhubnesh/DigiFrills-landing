import { motion } from "framer-motion";
import Image from "next/image"; // ✅ import next/image

const logos = [
  "https://framerusercontent.com/images/6QEz8kJbwqWFzbNDcgcMwaBk7Jk.svg",
  "https://framerusercontent.com/images/3Y1x3Iz9CnzoCeLjfRflZMOiF0.svg",
  "https://framerusercontent.com/images/duZwjP73YzY6931zuqasWWfWDZY.svg",
  "https://framerusercontent.com/images/6o730eaCLvIkG9j6FFRCYHSzNzc.svg",
  "https://framerusercontent.com/images/oeigtHFhM0qf1CThkR9gRSymB0.svg",
  "https://framerusercontent.com/images/g4yFX4nEgsyfKUkcJSsYZdlgCJM.svg",
  "https://framerusercontent.com/images/mGAxAGDBjt0JHg8MI0F9P9FkW0g.svg",
  "https://framerusercontent.com/images/vEfUDWPkZSWQLY8lC44HeDu6Ic.svg",
  "https://framerusercontent.com/images/uTkuLOi3ZjuJHBQNS9i0C4T7A.svg",
  "https://framerusercontent.com/images/8LtSXMmNjpVaruiiqMNkdJXfkg.svg",
];

const fadeInVariants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function GrowTogetherSection() {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-semibold max-w-3xl"
      >
        We don’t just work together—
        <span className="text-black">we </span>
        <span className="text-orange-500">grow</span>
        <span className="text-black"> together.</span>
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-12">
        {logos.map((logo, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="bg-gray-100 p-6 rounded-xl shadow-md flex items-center justify-center h-24 w-24 mx-auto"
          >
            <Image
              src={logo}
              alt={`Logo ${i + 1}`}
              width={64} // Customize based on actual logo size
              height={64}
              className="object-contain h-full w-full"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
