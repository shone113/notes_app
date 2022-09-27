import Note from './Note';
import AddNote from './AddNote';
import { useState } from 'react';

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
    return(
        <>
            <div className="notes-list">
                {notes.map((note, index) => (
                        <Note key={index} note={note} handleDeleteNote={handleDeleteNote} />
                ))}
                <AddNote handleAddNote={handleAddNote}/>
            </div>
        </>
    );
}

export default NotesList;