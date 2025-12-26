import axios, { AxiosInstance } from "axios";

import { getApiUrl } from "../../config/api";

const baseURL = getApiUrl();

export class MarketPlaceApiClient {
  private readonly instance: AxiosInstance;
  private readonly isRefreshing: boolean = false;

  constructor() {
    this.instance = axios.create({
      baseURL,
    });
  }

  getInstance() {
    return this.instance;
  }
}

export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance();
