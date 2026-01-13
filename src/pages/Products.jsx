import { motion } from "framer-motion";

export default function Products() {
  return (
    <div className="min-h-screen px-6 flex flex-col items-center justify-center relative">

      {/* Floating Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-black pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 -left-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-3"
      >
        Our <span className="accent">Products & Solutions</span>
      </motion.h1>

      <p className="text-gray-300 text-center max-w-2xl mb-10">
        We deliver scalable digital products built with performance,
        security and elegant UI — purpose-driven solutions for businesses.
      </p>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">

        {[
          {
            title: "Business Portfolio Websites",
            desc: "High-performance websites with branding, animations and SEO support."
          },
          {
            title: "Custom Dashboard Systems",
            desc: "Admin dashboards, analytics tools and business workflow automation."
          },
          {
            title: "E-Commerce & Ordering Systems",
            desc: "Product catalogs, cart systems, payment integration and order tracking."
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            className="glass-box p-6 text-center border border-white/10 hover:border-blue-500/40 transition-all"
          >
            <h2 className="text-xl font-semibold accent mb-2">{item.title}</h2>
            <p className="text-gray-300 text-sm">{item.desc}</p>
          </motion.div>
        ))}

      </div>
    </div>
  );
}
