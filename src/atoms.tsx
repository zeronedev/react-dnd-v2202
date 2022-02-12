import { atom } from "recoil";

interface IToDosState {
  [key: string]: string[];
}

export const toDoState = atom<IToDosState>({
  key: "toDo",
  default: {
    "To Do": ["a", "b"],
    Doing: ["c", "d", "e"],
    Done: ["f"],
  },
});
