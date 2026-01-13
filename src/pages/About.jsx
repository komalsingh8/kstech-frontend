import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-6 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black" />
      <div className="absolute -top-5 left-10 w-96 h-96 bg-blue-700/25 blur-3xl rounded-full" />
      <div className="absolute bottom-5 right-10 w-80 h-80 bg-cyan-700/25 blur-3xl rounded-full" />

      <div className="max-w-5xl text-center relative z-10">

        <h1 className="text-5xl font-bold mb-4">
          About <span className="accent">KS Tech</span>
        </h1>

        <p className="text-gray-300 max-w-3xl mx-auto mb-10">
          KS Tech is a freelancing platform helping clients transform business
          ideas into real web & app solutions — from design to development and deployment.
        </p>

        <div className="glass-box mt-4 p-8 border border-white/10 shadow-lg shadow-blue-900/40">
          <h2 className="text-2xl font-semibold accent mb-2">Our Vision</h2>
          <p className="text-gray-300">
            We focus on delivering modern, scalable and high-quality digital products
            with elegant UI and strong technology engineering.
          </p>
        </div>

      </div>
    </motion.div>
  );
}
