import { useState } from "react";
import { motion } from "framer-motion";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async () => {
    // Basic frontend validation
    if (!form.name || !form.email || !form.phone || !form.password) {
      alert("All fields are required");
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      alert("Phone number must be exactly 10 digits");
      return;
    }

    try {
      await api.post("/auth/register", form);

      alert("Account created successfully. Please login.");
      navigate("/register"); // 👉 Go to Login page
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-900/10 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-box p-8 w-full max-w-md relative z-10"
      >
        <h2 className="text-3xl font-bold text-center mb-2">
          Create <span className="accent">Account</span>
        </h2>

        <p className="text-gray-300 text-center mb-6">
          Join KS Tech to submit your project requirements
        </p>

        <div className="space-y-4">
          <input
            className="input"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            className="input"
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
          />

          <input
            className="input"
            name="phone"
            placeholder="Phone Number (10 digits)"
            onChange={handleChange}
          />

          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button
            onClick={handleSignup}
            className="btn-primary w-full"
          >
            Create Account
          </button>
        </div>

        {/* 🔑 LOGIN LINK */}
        <p className="text-gray-300 text-center mt-4">
          Already registered?{" "}
          <Link to="/register" className="accent hover:underline">
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
