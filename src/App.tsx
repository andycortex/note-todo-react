import NoteCard from "./components/NoteCard"
import { useMemo, useState } from "react"
import { Note } from "../types"
import { api } from "../api"
import NoteModal from "./components/NoteModal"

function App() {
  const [notes, setNotes] = useState<Note[]>(api.notes.list)
  const [draft, setDraft] = useState<null | Partial<Note>>(null)
  const [view, setView] = useState<'active' | 'archived'>('active')
  const matches = useMemo(() => {
    return notes.filter((note) =>{
      if (view === 'active') {
        return !note.archived
      } else if (view === 'archived') {
        return note.archived
      }
    })
  }, [notes, view])

  function handleUpdate(note: Note) {
    setDraft(note)
  }

  function handleDelete(id: Note['id']) {
    setNotes((notes) => notes.filter((note) => note.id !== id))
  }

  function handleArchive(id: Note['id']) {
    setNotes((notes) =>
      notes.map((note) => {
        if (note.id !== id) return note;
        return {
          ...note,
          archived: !note.archived
        }
      })
    )
  }

  function handleDraftChange(field: string, value: string) {
    setDraft((draf) => ({
      ...draf,
      [field]: value
    }))
  }

  function handleSave() {
    if (draft?.id) {
      setNotes((notes) =>
      notes.map((note) => {
        if (note.id !== draft.id) return note;
        return {
          ...draft,
          lastEdited: new Date().toString(),
        } as Note
      })
      )
    } else {
      setNotes(notes => notes.concat({
        id: String(+new Date()),
        lastEdited: new Date().toString(),
        ...(draft as Omit<Note, 'id' | 'lastEdited'>)
      }))
    }
    setDraft(null)
  }

  return (
    <main>
      <div>
        <h1>My Notes</h1>
        <div>
          <button className='nes-btn' onClick={() => setDraft({})} style={{ marginBottom: 24 }}>Create Note</button>
          <button className='nes-btn' style={{ marginBottom: 24 }} onClick={() => setView(view === 'active' ? 'archived' : 'active')}>
            {view === 'active' ? 'Archivadas' : 'Activadas'}
          </button>
        </div>
      </div>
      <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))' }}>
        {matches.map((note) => (
          <NoteCard onDelete={handleDelete} onArchive={handleArchive} onUpdate={handleUpdate} key={note.id} note={note} />
        ))}
      </div>
      {draft && (
        <NoteModal onSave={handleSave} onChange={handleDraftChange} note={draft} onClose={() => setDraft(null)} />
      )}
    </main>
  )
}

export default App
