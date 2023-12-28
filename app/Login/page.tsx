"use client";
import { useState } from "react";

type login = {
  email: string;
  password: string;
};
export default function Cadastro() {
  const [data, setData] = useState<login>({
    email: "",
    password: "",
  });

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="flex  ">
      <img
        src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="h-screen w-1/2 object-cover hidden lg:block"
        alt="Img-Car"
      />

      <div className="flex flex-col items-center w-screen mt-40 gap-2">
        <p className="text-2xl font-bold">Iniciar sessão</p>
        <p className="text-gray-300 text-xs">E-mail: "123" password: "123"</p>
        <input
          type="text"
          placeholder="E-mail"
          value={data.email}
          name="email"
          onChange={handleData}
        />
        <input
          type="password"
          placeholder="Senha"
          value={data.password}
          name="password"
          onChange={handleData}
        />
        <p className="text-center text-xs text-gray-400 px-4 w-96">
          Ao clicar em "Entrar" confirmo que li e aceito os{" "}
          <span className="text-blue-400">
            Termos e Condições e Aviso de privacidade
          </span>{" "}
          Kavak.
        </p>
        <button disabled={data.email !== "123" || data.password !== "123"}>
          Entrar
        </button>
      </div>
    </div>
  );
}
