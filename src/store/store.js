import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import initialState from "./initialState";

const { user, selectedProject, testList } = initialState;

export const useUserStore = create(
  persist(
    set => {
      return {
        ...user,
        setIsLoggedIn: isLoggedIn => {
          return set({ isLoggedIn });
        },
        setUserInfo: userInfo => {
          return set({ userInfo });
        },
        resetUserState: () => {
          return set(user);
        },
      };
    },
    {
      name: "userStore",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export const useSelectedProjectStore = create(
  persist(
    set => {
      return {
        selectedProject,
        setSelectedProject: selectedProject => {
          return set({ selectedProject });
        },
        resetSelectedProject: () => {
          return set({ selectedProject });
        },
      };
    },
    {
      name: "selectedProjectStore",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export const useTestStore = create(
  persist(
    set => {
      return {
        testList,
        setTestList: testList => {
          return set({ testList });
        },
        resetTestList: () => {
          return set({ testList });
        },
      };
    },
    {
      name: "testStore",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
