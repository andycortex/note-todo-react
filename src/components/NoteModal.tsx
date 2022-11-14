import { NoteModalProps } from "../../types";

function NoteModal({ note, onClose, onChange, onSave }: NoteModalProps) {
    return (
        <section className="nes-dialog" style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }} id="dialog-default">
            <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', width: '100%', height: '100%', position: 'absolute' }} />
            <form method="dialog" style={{ backgroundColor: 'white', zIndex: 1, padding: 12, border: '5px solid black' }}>
                <h1 className="title">Create / Update Note</h1>
                <div className="nes-field">
                    <label htmlFor="title">Title</label>
                    <input value={note.title} onChange={(event) => onChange('title', event.target.value)} type="text" id="title" className="nes-input" />
                </div>
                <label htmlFor="content">Textarea</label>
                <textarea id="content" className="nes-textarea" value={note.content} onChange={(event) => onChange('content', event.target.value)}></textarea>
                <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <button className="nes-btn" onClick={onClose}>Cancel</button>
                    <button className="nes-btn is-primary" onClick={onSave}>Save</button>
                </div>
            </form>
        </section>
    )
}

export default NoteModal;