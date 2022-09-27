import { useEffect, useState } from "react";
import {nanoid} from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from './components/Header';

const App = () => {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: '28/02/2022'
    },
    {
      id: nanoid(),
      text: 'This is my second note!',
      date: '28/02/2022'
    },
    {
      id: nanoid(),
      text: 'This is my third note!',
      date: '28/02/2022'
    },
]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
  
    if(savedNotes){
      setNotes(savedNotes);
    }
    
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data', 
      JSON.stringify(notes)
      );
  }, [notes]);

const addNote = (noteText) => {

  const currentDate = new Date();
  const newDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

  const newNote = {
      id: nanoid(),
      text: noteText,
      date: newDate
  }
  setNotes(notes => [...notes, newNote]);
}

const deleteNote = (id) => {
  const newNotes = notes.filter(note => note.id !== id);
  setNotes(newNotes);
}

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
          notes={notes.filter(note => note.text.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))} 
          handleAddNote={addNote} 
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  )
};

export default App;