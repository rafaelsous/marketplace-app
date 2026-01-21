import { marketPlaceApiClient } from "../api/marketplace";
import {
  UpdateUserProfile,
  UpdateUserProfileResponse,
} from "../interfaces/http/update-profile";

export async function updateUserProfile(profileData: UpdateUserProfile) {
  const { data } = await marketPlaceApiClient.put<UpdateUserProfileResponse>(
    "/user",
    profileData,
  );

  return data;
}
