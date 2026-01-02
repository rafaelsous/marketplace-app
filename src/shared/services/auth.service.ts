import { baseURL, marketPlaceApiClient } from "../api/marketplace";

import { LoginRequest } from "../interfaces/http/login";
import { RegisterRequest } from "../interfaces/http/register";
import { AuthResponse } from "../interfaces/http/auth-response";
import { UploadAvatarResponse } from "../interfaces/http/upload-avatar-response";

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

export async function uploadAvatar(avatarUri: string) {
  const formData = new FormData();

  formData.append("avatar", {
    uri: avatarUri,
    type: "image/jpeg",
    name: "avatar.jpeg",
  } as unknown as Blob);

  const { data } = await marketPlaceApiClient.post<UploadAvatarResponse>(
    "/user/avatar",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  data.url = `${baseURL}${data.url}`;

  return data;
}
