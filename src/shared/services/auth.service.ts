import { marketPlaceApiClient } from "../api/marketplace";

import { LoginRequest } from "../interfaces/http/login";
import { RegisterRequest } from "../interfaces/http/register";
import { AuthResponse } from "../interfaces/http/auth-response";

export async function register(userRegisterData: RegisterRequest) {
  const { data } = await marketPlaceApiClient.post<AuthResponse>(
    "/auth/register",
    userRegisterData
  );

  return data;
}

export async function login(loginData: LoginRequest) {
  const { data } = await marketPlaceApiClient.post<AuthResponse>(
    "/auth/login",
    loginData
  );

  return data;
}
