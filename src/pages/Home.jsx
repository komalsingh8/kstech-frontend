import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-28 px-4 min-h-screen text-white">
      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Build Your <span className="text-blue-400">Digital Presence</span>
        </h1>

        <p className="mt-4 text-gray-300 text-sm md:text-lg max-w-2xl mx-auto">
          KS Tech helps businesses and individuals transform ideas into
          high-performance digital products using modern technologies.
        </p>

        <div className="mt-8">
          <Link
            to="/signup"
            className="inline-block bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-sm md:text-base"
          >
            Start Your Project
          </Link>
        </div>

      </div>
    </div>
  );
}
