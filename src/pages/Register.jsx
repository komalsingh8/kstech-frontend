import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token); // ✅ TOKEN STORED
      navigate("/requirement"); // ✅ NOW SAFE
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="glass-box p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <input className="input mb-3" name="email" placeholder="Email" onChange={handleChange} />
        <input className="input mb-5" type="password" name="password" placeholder="Password" onChange={handleChange} />

        <button onClick={handleLogin} className="btn-primary w-full">
          Login
        </button>
      </div>
    </div>
  );
}
