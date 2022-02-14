import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface IToDosState {
  [key: string]: ITodo[];
}

export const toDoState = atom<IToDosState>({
  key: "toDo",
  default: {
    "To Do": [],
    Doing: [],
    Done: [],
  },
});
