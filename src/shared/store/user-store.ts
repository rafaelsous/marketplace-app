import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserI } from "../interfaces/user";

interface SetSessionParams {
  user: UserI;
  token: string;
  refreshToken: string;
}

interface UpdateTokensParams {
  token: string;
  refreshToken: string;
}

export interface UserStore {
  user: UserI | null;
  token: string | null;
  refreshToken: string | null;
  logout: () => void;
  setSession: (sessionData: SetSessionParams) => void;
  updateTokens: (updateTokensData: UpdateTokensParams) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      refreshToken: null,
      logout: () =>
        set({
          user: null,
          token: null,
          refreshToken: null,
        }),
      setSession: (sessionData) => set({ ...sessionData }),
      updateTokens: (updateTokensData) => set({ ...updateTokensData }),
    }),
    {
      name: "marketplace-auth",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
