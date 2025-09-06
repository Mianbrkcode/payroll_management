import React from "react";
import { useAuth } from "../context/AuthContext";

export default function EmployeeDashboard() {
  const { user, handleLogout } = useAuth();

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <button onClick={handleLogout}>Logout</button>
      <p>Here you can view your payslips and profile.</p>
    </div>
  );
}
