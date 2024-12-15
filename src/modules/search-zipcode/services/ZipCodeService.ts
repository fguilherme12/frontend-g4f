import axios, { AxiosError } from "axios";
import { IAddress } from "../types/ZipCodeTypes";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
});

export const fetchAddressByZipCode = async (cep: string) => {
  try {
    const response = await apiClient.get<IAddress>(`/cep/${cep}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response && error.response.data) {
      throw new Error(error.response.data.message || "Erro ao buscar o CEP");
    }
    throw new Error("Erro ao buscar o CEP");
  }
};
