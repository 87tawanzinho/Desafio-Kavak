"use client";
import { useEffect, useState } from "react";
import DashboardForm from "./components/DashboardForm";

export default function Dashboard() {
  const [name, setName] = useState<string | null>(null);
  const [sellCar, setSellcar] = useState(false);
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
    <div className="justify-center flex flex-col items-center">
      <div className="bg-gray-200 bg-opacity-50 w-full p-8 lg:p-24 text-gray-900">
        <p>
          Olá, <span className="font-bold">{name}</span>
        </p>
        <p>Seja bem vindo a sua central de vendas!</p>
      </div>
      {sellCar ? (
        <div className=" ">
          <DashboardForm />
        </div>
      ) : (
        <button onClick={() => setSellcar(true)}>Vender seu carro</button>
      )}
    </div>
  );
}
