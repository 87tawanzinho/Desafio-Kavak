import { instance } from "@/app/axios/Instance";
import { CarI } from "@/app/interface/CarInterface";
import validateForm from "@/app/validations/validateForm";
import { useState } from "react";

export default function DashboardForm() {
  const instanceCreate = instance;
  const [data, setData] = useState<CarI>({
    name: "",
    brand: "",
    model: "",
    photo: "", // File data will be stored as a Base64-encoded data URL
    price: "",
    localization: "",
    km: "",
  });
  const [error, setError] = useState("");
  const [warn, setWarn] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const validationResult = validateForm(data);
  const changeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData((prev) => ({ ...prev, photo: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const axiosRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setWarn("Tentando criar..");
    if (validationResult && buttonClicked) {
      setWarn("");
      setError(validationResult);
    }
    try {
      const response = await instanceCreate.post("/createCar", {
        name: data.name,
        brand: data.brand,
        model: data.model,
        photo: data.photo.split(",")[1], // Extract the Base64-encoded part
        price: data.price,
        localization: data.localization,
        km: data.km,
      });
      console.log(response);
      window.location.href = "/";
    } catch (err) {
      console.error("Erro ao enviar o formulario:", err);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={axiosRequest}>
      <input
        type="text"
        placeholder="Nome do carro"
        name="name"
        value={data.name}
        onChange={changeData}
      />
      <input
        type="text"
        placeholder="Modelo"
        name="model"
        value={data.model}
        onChange={changeData}
      />
      <input
        type="text"
        placeholder="Marca"
        name="brand"
        value={data.brand}
        onChange={changeData}
      />
      <input
        type="number"
        placeholder="Preço"
        name="price"
        value={data.price}
        onChange={changeData}
      />
      <input
        type="text"
        placeholder="Km Rodado"
        name="km"
        value={data.km}
        onChange={changeData}
      />
      <input
        type="text"
        placeholder="Localização"
        name="localization"
        value={data.localization}
        onChange={changeData}
      />
      <input
        type="file"
        placeholder="Foto"
        name="photo"
        onChange={handleFileChange}
      />
      {error && <p className="text-red-600">{error}</p>}
      {warn && <p className="text-yellow-600">{warn}</p>}
      <div className="flex gap-2 w-48">
        <button
          type="submit"
          className="bg-red-600 text-white"
          onClick={() => setButtonClicked(true)}
        >
          Cadastrar
        </button>
        <button
          className="bg-black text-white"
          onClick={() => (window.location.href = "/Dashboard")}
        >
          Voltar
        </button>
      </div>
    </form>
  );
}
