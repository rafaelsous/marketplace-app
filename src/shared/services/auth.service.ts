import { marketPlaceApiClient } from "../api/marketplace";
import { RegisterRequest, RegisterResponse } from "../interfaces/http/register";

export async function register(userData: RegisterRequest) {
  const { data } = await marketPlaceApiClient.post<RegisterResponse>(
    "/auth/register",
    userData
  );

  return data;
}
