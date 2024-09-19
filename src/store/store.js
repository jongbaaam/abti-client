import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import initialUserState from "./initialUserState";

export const useUserStore = create(
  persist(
    set => {
      return {
        ...initialUserState,
        actions: {
          setIsLoggedIn: isLoggedIn => {
            return set({ isLoggedIn });
          },
          setUserInfo: userInfo => {
            return set({ userInfo });
          },
          resetUserState: () => {
            return set(initialUserState);
          },
        },
      };
    },
    {
      name: "userStore",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
