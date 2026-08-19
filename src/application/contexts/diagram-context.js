import { createContext, useContext } from "react";

export const DiagramContext = createContext(null);

export function useDiagram() {
  const context = useContext(DiagramContext);
  if (!context) {
    throw new Error("useDiagram must be used within a DiagramProvider");
  }
  return context;
}
