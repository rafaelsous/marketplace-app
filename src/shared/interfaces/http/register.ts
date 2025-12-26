import { UserResponse } from "./user";

export interface RegisterRequest {
  name: string;
  email: string;
  avatarUrl?: string;
  phone: string;
  password: string;
}

export interface RegisterResponse {
  user: UserResponse;
  token: string;
  refreshToken: string;
}
