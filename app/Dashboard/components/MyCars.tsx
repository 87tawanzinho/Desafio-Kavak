import { instance } from "@/app/axios/Instance";
import { CarI } from "@/app/interface/CarInterface";
import { useEffect, useState } from "react";

export default function MyCars() {
  const [vehicles, setVehicles] = useState<CarI[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await instance.get(`userCars/658e51b2b0ad33ad703f0e63`);
      const shortPriceCars = res.data.userCars.sort(
        // todo - tipagem
        (a: any, b: any) => b.price - a.price
      );
      setVehicles(shortPriceCars);
    };
    fetchData();
  }, []);
  return (
    <div className="mt-10 text-2xl">
      <p>Meus Veículos à venda</p>
      <div className="bg-white h-96 rounded-lg text-sm text-center pt-10 text-gray-700 mt-4">
        {vehicles.length >= 0 ? (
          <div>
            <p>Meus Veículos</p>
            {vehicles.map((car) => (
              <div
                key={car._id}
                className="flex justify-between items-center mt-4 px-4"
              >
                <div className="flex items-center gap-4  ">
                  <img
                    src={car.photo}
                    alt="foto"
                    className="h-10 w-10 object-cover rounded-lg"
                  />
                  <p className="text-gray-600">{car.name}</p>
                  <p className="text-green-800">${car.price}</p>
                </div>
                <button className=" text-center button-delete">X</button>
              </div>
            ))}
          </div>
        ) : (
          <p>Ainda não há veículos por aqui</p>
        )}
      </div>
    </div>
  );
}
