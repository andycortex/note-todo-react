import { Note } from "./types";

export const api = {
  notes: {
    list: () : Note[] => [
      {
        id: "1",
        title: "Nota",
        lastEdited: "10/10/10",
        archived: false,
        content: "Someone Content",
        categories: ["random"],
      },
      {
        id: "2",
        title: "Note Blank",
        lastEdited: "11/10/10",
        archived: false,
        content: "Someone Content",
        categories: ["random"],
      },
    ],
  },
};
