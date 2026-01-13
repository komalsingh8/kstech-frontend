import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import AdminRoute from "./components/AdminRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Register from "./pages/Register";
import ClientRequirement from "./pages/ClientRequirement";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  const location = useLocation();

  // Add top padding for fixed navbar (except services)
  const wrapperClass =
    location.pathname === "/services" ? "" : "pt-28";

  return (
    <>
      <Navbar />

      <div className={wrapperClass}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/register" element={<Register />} />

            {/* 🔐 Client protected route */}
            <Route
              path="/requirement"
              element={
                <AdminRoute>
                  <ClientRequirement />
                </AdminRoute>
              }
            />

            {/* 🔐 Admin protected route */}
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            />

          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}
