import { create } from "zustand";
import { UsersFilters } from "../types/user";

type UserStore = {
  filters?: UsersFilters;
  setFilters: (filters: UsersFilters) => void;
};

/**
 * Custom hook to manage user state using Zustand.
 *
 * @returns {UserStore} The user store with the current user state and a function to update it.
 */
export const useUserStore = create<UserStore>((set) => ({
  filters: {},
  setFilters: (filters) => set({ filters }),
}));
