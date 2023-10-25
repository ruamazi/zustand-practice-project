import { create } from "zustand";

const store = (set) => ({
  tasks: [
    {
      title: "Read a book",
      state: "planned",
    },
  ],
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

export const useStore = create(store);
