import axios, { AxiosInstance } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getApiUrl } from "@/config/api";

export const baseURL = getApiUrl();

export class MarketPlaceApiClient {
  private readonly instance: AxiosInstance;
  private readonly isRefreshing: boolean = false;

  constructor() {
    this.instance = axios.create({
      baseURL,
    });

    this.setupInterceptors();
  }

  getInstance() {
    return this.instance;
  }

  private setupInterceptors() {
    this.instance.interceptors.request.use(
      async (config) => {
        const userData = await AsyncStorage.getItem("marketplace-auth");

        if (userData) {
          const {
            state: { token },
          } = JSON.parse(userData);

          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}

export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance();
