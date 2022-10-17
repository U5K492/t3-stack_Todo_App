import create from "zustand";
import { updateTaskInput } from "../schema/todo";

type state = {
  editedTask: updateTaskInput;
  updateEditedTask: (payload: updateTaskInput) => void;
  resetEditedTask: () => void;
};

const useStore = create<state>((set) => ({
  editedTask: { taskId: "", title: "", body: "" },
  updateEditedTask: (payload) =>
    set({
      editedTask: payload,
    }),
  resetEditedTask: () =>
    set({ editedTask: { taskId: "", title: "", body: "" } }),
}));

export default useStore;
