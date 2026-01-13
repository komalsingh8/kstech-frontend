import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen px-6 flex flex-col items-center justify-center relative">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-900/10 to-transparent" />
      <div className="absolute top-16 left-10 w-64 h-64 bg-blue-400/15 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/15 blur-3xl rounded-full" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-3"
      >
        Contact <span className="accent">KS Tech</span>
      </motion.h1>

      <p className="text-gray-300 text-center max-w-2xl mb-10">
        Share your project requirements — we will contact you and turn your idea into a real-world solution.
      </p>

      {/* Glass Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-box p-8 w-full max-w-xl space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Your Name" className="input" />
          <input type="email" placeholder="Email Address" className="input" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="tel" placeholder="Phone Number" className="input" />
          <input type="text" placeholder="Company / Organization" className="input" />
        </div>

        <textarea rows="4" placeholder="Describe your project requirement" className="input"></textarea>

        {/* Premium Submit Button */}
        <button className="btn-primary w-full">
          Submit Requirement
        </button>
      </motion.form>

      {/* Contact Info */}
      <div className="mt-6 text-gray-300 text-center">
       
        <p>📧 Email: <span className="accent">kstechfl@gmail.com</span></p>
      </div>
    </div>
  );
}
