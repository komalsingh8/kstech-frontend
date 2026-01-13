import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative h-screen w-full">

      {/* Background — dim + slight blur so it's barely visible */}
      <img
        src="/hero.jpg"
        className="absolute inset-0 w-full h-full object-cover blur-[2px] brightness-[0.4]"
      />

      {/* Dark overlay — makes BG negligible */}
      <div className="absolute inset-0 bg-black/95" />

      {/* Glow Effects (very soft now) */}
      <div className="absolute -top-10 right-16 w-[380px] h-[380px] bg-blue-500/15 blur-3xl rounded-full" />
      <div className="absolute bottom-10 left-10 w-[320px] h-[320px] bg-cyan-400/12 blur-3xl rounded-full" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 h-full flex flex-col items-center text-center px-6"
      >

        <div className="mt-[18vh] max-w-3xl">
          <h1 className="text-6xl font-extrabold leading-tight">
            Build Your <span className="accent">Digital Presence</span>
          </h1>

          <p className="mt-5 text-gray-300 text-lg leading-relaxed">
            KS Tech is a freelancing platform that helps businesses and
            individuals transform their ideas into powerful digital products.
            We build modern, high-performance websites and mobile applications
            with clean UI, smooth user experience and scalable technology —
            delivering real-world value and long-term growth.
          </p>

          <a
            href="/signup"
            className="btn-primary px-10 py-3 text-lg mt-10 inline-block"
          >
            Start Your Project
          </a>
        </div>

      </motion.div>
    </div>
  );
}
