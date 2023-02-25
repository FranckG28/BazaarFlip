import { AxiosResponse } from "axios";
import axios from "axios";
import { BazaarResponse, ItemResponse } from "@/models/hypixel-response";

export const getApiItems = async (): Promise<AxiosResponse<ItemResponse>> => axios.get('https://api.hypixel.net/resources/skyblock/items');

export const getApiBazaar = async (): Promise<AxiosResponse<BazaarResponse>> => axios.get('https://api.hypixel.net/skyblock/bazaar');

