type NoteCardProps = {
  note: Note,
};
function NoteCard({ note }: NoteCardProps) {
  return (
    <div>
      <div>
        <h3>Title</h3>
        <p>Last updated: 10/10/2015</p>
      </div>
      <div>
        <button>Archivo</button>
        <button>Editar</button>
        <button>Borrar</button>
      </div>
    </div>
  );
}

export default NoteCard;