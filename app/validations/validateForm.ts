import { CarI } from "../interface/CarInterface";

export default function validateForm({
  name,
  brand,
  model,
  photo,
  price,
  localization,
  km,
}: CarI) {
  if (!name || !brand || !model || !photo || !price || !localization || !km) {
    return "Por favor, preencha todos os campos.";
  } else {
    return false;
  }
}
