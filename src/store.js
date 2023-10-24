import { create } from "zustand";

const store = (set) => ({
  tasks: [
    {
      title: "TestTask",
      status: "planned",
    },
  ],
});

export const useStore = create(store);
