import { motion } from "framer-motion";
import { useState } from "react";
import api from "../services/api";

export default function ClientRequirement() {
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      await api.post("/client/submit", {
        projectType,
        budget,
        description,
      });

      alert("Requirement submitted successfully ✅");

      // reset
      setProjectType("");
      setBudget("");
      setDescription("");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Unauthorized");
    }
  };

  return (
    /* ✅ FIX: push below navbar + responsive padding */
    <div className="min-h-screen pt-28 px-4 text-white flex justify-center">

      <div className="w-full max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-box p-6 sm:p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Submit <span className="accent">Requirement</span>
          </h2>

          {/* Service */}
          <select
            className="input bg-black text-white"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
          >
            <option value="">Select Service</option>
            <option>Website Development</option>
            <option>Mobile App Development</option>
            <option>UI / UX Design</option>
          </select>

          {/* Budget */}
          <select
            className="input bg-black text-white mt-4"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="">Select Budget</option>
            <option>₹5,000 - ₹15,000</option>
            <option>₹15,000 - ₹30,000</option>
            <option>₹30,000+</option>
          </select>

          {/* Description */}
          <textarea
            className="input mt-4"
            rows="4"
            placeholder="Describe your project"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="btn-primary w-full mt-6"
          >
            Submit Requirement
          </button>
        </motion.div>
      </div>
    </div>
  );
}
