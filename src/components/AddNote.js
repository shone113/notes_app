import { useState } from "react";
import NotesList from "./NotesList";
import {nanoid} from 'nanoid';

const AddNote = ({handleAddNote}) => {

    const [noteText, setNoteText] = useState('');

    const textLimit = 200;

    const handleChange = (event) => {
        if(textLimit - noteText.length > 0){
            setNoteText(event.target.value);
        }
    }
    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
        }
        setNoteText('');
    }

    return(
        <div className="note new">
            <textarea  
            rows="8" 
            cols="10" 
            value={noteText}
            placeholder="Type to add a note..."
            onChange={handleChange}
            >
            </textarea>
            <div className="note-footer">
                <small>{textLimit - noteText.length} Remaining</small>
                <button onClick={handleSaveClick} className="save">Save</button>
            </div>
        </div>
    );
}

export default AddNote;