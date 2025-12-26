import { UserI } from "../user";

export interface RegisterRequest {
  name: string;
  email: string;
  avatarUrl?: string;
  phone: string;
  password: string;
}

export interface RegisterResponse {
  user: UserI;
  token: string;
  refreshToken: string;
}
