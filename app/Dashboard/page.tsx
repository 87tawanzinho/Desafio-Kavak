"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    // Check if running on the client side
    if (typeof window !== "undefined") {
      // Access window.localStorage safely

      const storedName = window.localStorage.getItem("name");
      if (!storedName) {
        window.location.href = "/Login";
      }
      setName(storedName);
    }
  }, []);
  return (
    <div>
      <p className="text-5xl p-14 lg:p-24">
        Oi 👋, <span className="text-3xl">{name}</span>
      </p>
    </div>
  );
}
