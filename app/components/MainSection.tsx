"use client";
import Image from "next/image";
import gps from "@/public/images/gps.png";
import { instance } from "../axios/Instance";
import { useEffect, useState } from "react";
import { CarI } from "../interface/CarInterface";
export default function Mainsection() {
  const axiosI = instance;
  const [cars, setCars] = useState<CarI[]>([
    {
      name: "",
      brand: "",
      model: "",
      photo: "",
      price: "",
      localization: "",
      km: "",
      _id: "",
    },
  ]);
  const takeCars = async () => {
    try {
      const response = await axiosI.get("/");
      setCars(response.data.cars);
      console.log(response.data.cars);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    takeCars();
  }, []);
  return (
    <div className="flex flex-col lg:flex-row  lg:flex-wrap p-4 mt-10 lg:p-24 gap-8">
      {cars.map((car) => (
        <main key={car._id}>
          <div className="border rounded-lg  border-gray-200 cursor-pointer  hover:bg-gray-100 transition-all">
            <img
              src={`${car.photo}`}
              className="w-screen lg:w-72 h-48 object-cover"
            ></img>
            <div className=" pt-2 flex flex-col gap-2 ">
              <p className="font-bold px-4">
                <span>{car.brand} </span>
                {car.name}
              </p>
              <p className="text-sm border-b-2 border-gray-100 px-4">
                {car.model} {car.km}
                <span className="text-red-800 font-bold">Km</span>
              </p>
              <p className="mt-2 text-gray-400 px-4">Preço à vista</p>
              <p className="font-bold text-xl text-gray-800 px-4">
                <span className="text-sm text-gray-600 mr-1">R$</span>
                {car.price}
              </p>
              <p className="p-4 mt-4 border-t-2 pt-4 pb-4 border-gray-100 text-sm flex items-center gap-2 text-gray-700 ">
                <Image src={gps} alt="gps" className="h-4 w-4 object-cover" />
                {car.localization}
              </p>
            </div>
          </div>
        </main>
      ))}
    </div>
  );
}
