import api from "./axios";

// 🔑 Login
export async function login(email, password) {
  await api.get("/sanctum/csrf-cookie"); // CSRF protection
  const response = await api.post("/api/login", { email, password });
  return response.data;
}

// 🚪 Logout
export async function logout() {
  const response = await api.post("/api/logout");
  return response.data;
}

// 👤 Get current user
export async function getUser() {
  const response = await api.get("/api/user");
  return response.data;
}