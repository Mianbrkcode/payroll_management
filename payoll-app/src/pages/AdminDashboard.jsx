import React from "react";
import { useAuth } from "../context/AuthContext";

export default function AdminDashboard() {
  const { user, handleLogout } = useAuth();

  return (
    <div>
      <h2>Welcome, Admin {user?.name}</h2>
      <button onClick={handleLogout}>Logout</button>
      <p>Here you can manage payroll, employees, and reports.</p>
    </div>
  );
}
