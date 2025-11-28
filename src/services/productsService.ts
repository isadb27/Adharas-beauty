import axios from "axios";
import { Product } from "../types/Product";

const API_URL = "http://localhost:3000/products";

export const getAllProducts = async (): Promise<Product[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};
