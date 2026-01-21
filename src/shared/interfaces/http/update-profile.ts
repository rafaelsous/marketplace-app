export interface UpdateUserProfile {
  name: string;
  email: string;
  phone: string;
  password?: string;
  newPassword?: string;
}

export interface UpdateUserProfileResponse {
  user: {
    id: number;
    name: string;
    email: string;
    avatarUrl: string;
    phone: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
  };
}
