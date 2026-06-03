import React from "react";
import { DiagramProvider } from "@/application/contexts/DiagramContext";
import Dashboard from "@/presentation/pages/Dashboard";
import "./presentation/styles/App.css";

export default function App() {
  return (
    <DiagramProvider>
      <Dashboard />
    </DiagramProvider>
  );
}
