import Axios from "axios";
import { Item } from "../models/Item";

export default class APIService {
  static async GetStuff() {
    const response = await Axios.get<Item>("/api/item/get");

    return response.data;
  }
}
