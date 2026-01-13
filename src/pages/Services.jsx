import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 relative"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
      <div className="absolute top-24 right-0 w-96 h-96 bg-purple-700/25 blur-3xl rounded-full" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-indigo-700/20 blur-3xl rounded-full" />

      {/* ⭐ Start content near mid-screen but keep navbar at top */}
      <div className="relative z-10 max-w-6xl mx-auto text-center pt-[32vh]">

        <h1 className="text-5xl font-extrabold mb-4">
          Our <span className="accent">Services</span>
        </h1>

        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          Premium software solutions built with modern UI, performance-first engineering
          and scalable architecture.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            "Web Development",
            "Mobile App Development",
            "UI / UX Designing",
            "API Integration",
            "Automation & Backend Systems",
            "Freelancing Consultation",
          ].map((title, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass-box p-6 text-center border border-white/10 shadow-lg shadow-purple-900/40"
            >
              <h2 className="text-xl font-semibold accent mb-2">{title}</h2>
              <p className="text-gray-300 text-sm">
                Clean UI, reliable development and business-focused execution.
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </motion.div>
  );
}
