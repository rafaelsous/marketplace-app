import { UserI } from "../user";

export interface AuthResponse {
  user: UserI;
  token: string;
  refreshToken: string;
}
