import { atom } from "recoil";

interface IToDosState {
  [key: string]: string[];
}

export const toDoState = atom<IToDosState>({
  key: "toDo",
  default: {
    to_do: ["a", "b"],
    doing: ["c", "d", "e"],
    done: ["f"],
  },
});
