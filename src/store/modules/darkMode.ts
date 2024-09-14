import { defineStore } from "pinia";
import  store  from "@/store";


export const useDarkModeStore = defineStore({
    id: "darkMode",
    state: () => ({
        darkMode: false,
    }),
    actions: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
        },
    },
});


export function useDarkMode() {
    return useDarkModeStore(store);
  }