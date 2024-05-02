import axios from "axios";
import { BASE_URL_BACKEND } from "../constans/constans";

const instansCampers = axios.create({ baseURL: BASE_URL_BACKEND });

export const getAllCampers = async () => {
  const { data } = await instansCampers.get("/campers");
  console.log(data);
  return data;
};

export const getCamperById = async (id) => {
  const { data } = await instansCampers.get(`/campers/${id}`);
  console.log(data);
  return data;
};
