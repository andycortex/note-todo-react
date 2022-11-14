export type Note = {
  id: string;
  title: string;
  lastEdited: string;
  archived: boolean;
  content: string;
  categories: string[];
};

export type NoteCardProps = {
  note: Note;
  onArchive: (id: Note["id"]) => void;
  onDelete: (id: Note["id"]) => void;
  onUpdate: (note: Note) => void;
};

export type NoteModalProps = {
  note: Partial<Note>;
  onClose: VoidFunction;
  onChange: (field: string, value: string) => void;
  onSave: VoidFunction;
};
