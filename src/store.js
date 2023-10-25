import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
  tasks: [],
  draggedTask: null,
  addTask: (title, state) =>
    set((store) => ({ tasks: [...store.tasks, { title, state }] })),
  deleteTask: (title) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.title !== title),
    })),
  setDraggetTask: (title) => set({ draggedTask: title }),
  moveTask: (title, state) =>
    set((store) => ({
      tasks: store.tasks.map((t) => (t.title === title ? { title, state } : t)),
    })),
});

const log = (config) => (set, get, api) =>
  config(
    (...args) => {
      console.log(args);
      set(...args);
    },
    get,
    api
  );

export const useStore = create(
  persist(devtools(store), { name: "zustand-store" })
);
