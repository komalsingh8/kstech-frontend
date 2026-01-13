import axios from "axios";

const api = axios.create({
  baseURL: "https://kstech-backend-4bay.onrender.com/api",
});

// Automatically attach token
api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default api;
