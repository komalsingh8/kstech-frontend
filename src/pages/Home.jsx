import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">

      {/* Background Image */}
      <img
        src="/hero.jpg"
        alt="KS Tech Background"
        className="absolute inset-0 w-full h-full object-cover blur-[2px] brightness-[0.4]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/90" />

      {/* Glow Effects */}
      <div className="absolute -top-24 right-10 w-[300px] h-[300px] md:w-[420px] md:h-[420px] bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 left-10 w-[260px] h-[260px] md:w-[360px] md:h-[360px] bg-cyan-400/15 blur-3xl rounded-full" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex items-center justify-center min-h-screen px-4"
      >
        <div className="max-w-3xl text-center">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Build Your{" "}
            <span className="accent text-blue-400">Digital Presence</span>
          </h1>

          {/* Description */}
          <p className="mt-4 md:mt-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            KS Tech is a freelancing platform that helps businesses and
            individuals transform their ideas into powerful digital products.
            We build modern, high-performance websites and mobile applications
            with clean UI, smooth user experience, and scalable technology —
            delivering real-world value and long-term growth.
          </p>

          {/* CTA */}
          <a
            href="/signup"
            className="inline-block mt-8 md:mt-10 px-7 py-3 md:px-10 md:py-3.5
                       text-sm md:text-lg font-medium rounded-lg
                       bg-blue-500 hover:bg-blue-600 transition"
          >
            Start Your Project
          </a>

        </div>
      </motion.div>
    </div>
  );
}
