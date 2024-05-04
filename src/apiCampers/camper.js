import axios from "axios";
import { BASE_URL_BACKEND } from "../constans/constans";

export const instansCampers = axios.create({ baseURL: BASE_URL_BACKEND });
