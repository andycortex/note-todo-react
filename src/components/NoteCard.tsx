import { NoteCardProps } from '../../types'


function NoteCard({ note, onArchive, onDelete, onUpdate }: NoteCardProps) {
  return (
    <div className="nes-container with-title is-centered">
      <h3 className="title">{note.title}</h3>
      <p  >Last updated: {note.lastEdited}</p>
      <div style={{ display: 'flex', gap: 12 }}>
        <button className='nes-btn' onClick={() => onArchive(note.id)} >Archivar</button>
        <button className='nes-btn' onClick={() => onUpdate(note)}>Editar</button>
        <button className='nes-btn' onClick={() => onDelete(note.id)}>Borrar</button>
      </div>
    </div>
  );
}

export default NoteCard;