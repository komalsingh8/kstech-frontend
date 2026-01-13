import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../services/api";

export default function AdminDashboard() {
  const [requirements, setRequirements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  // Fetch requirements
  const fetchRequirements = async () => {
    try {
      const res = await api.get("/admin/requirements");
      setRequirements(res.data);
      setLoading(false);
    } catch (err) {
      alert("Admin access denied");
    }
  };

  // Update status
  const updateStatus = async (id, status) => {
    try {
      await api.put(`/admin/requirements/${id}`, { status });
      fetchRequirements();
    } catch {
      alert("Failed to update status");
    }
  };

  // Delete requirement
  const deleteRequirement = async (id) => {
    if (!window.confirm("Delete this requirement?")) return;
    try {
      await api.delete(`/admin/requirements/${id}`);
      fetchRequirements();
    } catch {
      alert("Delete failed");
    }
  };

  useEffect(() => {
    fetchRequirements();
  }, []);

  // Status badge color
  const badgeColor = (status) => {
    if (status === "Completed") return "bg-green-600";
    if (status === "Reviewed") return "bg-blue-600";
    return "bg-yellow-500 text-black";
  };

  const filteredRequirements =
    filter === "All"
      ? requirements
      : requirements.filter((r) => r.status === filter);

  return (
    <div className="min-h-screen px-8 pt-32 pb-12 text-white">
      {/* HEADER */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            Admin <span className="accent">Dashboard</span>
          </h1>
          <p className="text-gray-400 mt-1">
            Total Requirements: {requirements.length}
          </p>
        </div>

        {/* FILTER */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="input bg-white text-black mt-4 md:mt-0 w-48"
        >
          <option>All</option>
          <option>Pending</option>
          <option>Reviewed</option>
          <option>Completed</option>
        </select>
      </div>

      {/* CONTENT */}
      {loading ? (
        <p>Loading...</p>
      ) : filteredRequirements.length === 0 ? (
        <p>No client requirements found.</p>
      ) : (
        <div className="grid gap-6">
          {filteredRequirements.map((req) => (
            <motion.div
              key={req._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-box p-6 border border-white/10"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold accent">
                  {req.projectType}
                </h3>

                {/* STATUS BADGE */}
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${badgeColor(
                    req.status
                  )}`}
                >
                  {req.status || "Pending"}
                </span>
              </div>

              <p className="text-gray-300 mt-3">{req.description}</p>

              <p className="text-gray-500 text-sm mt-2">
                {new Date(req.createdAt).toLocaleString()}
              </p>

              <div className="flex flex-wrap gap-4 mt-5">
                <select
                  className="input bg-white text-black"
                  value={req.status}
                  onChange={(e) =>
                    updateStatus(req._id, e.target.value)
                  }
                >
                  <option>Pending</option>
                  <option>Reviewed</option>
                  <option>Completed</option>
                </select>

                <button
                  onClick={() => deleteRequirement(req._id)}
                  className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 font-semibold"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
