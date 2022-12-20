import React, { useEffect, useState } from "react";
import CreateArea from '../components/CreateArea';
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

const App = function () {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        // Get the notes from local storage when the component mounts
        const savedNotes = localStorage.getItem("notes");
        if (savedNotes) {
            setNotes(JSON.parse(savedNotes));
        }
    }, []);

    useEffect(() => {
        // Save the notes to local storage when the notes state changes
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const addNote = function (newNote) {
        setNotes((prevValue) => {
            return [...prevValue, newNote];
        })
    }

    const deleteNote = function (id) {
        setNotes(prevNotes => {
            return prevNotes.filter((note, i) => {
                return i !== id;
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />

            {notes.map((note, i) => {
                return <Note
                    id={i}
                    key={i}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                />
            })}
            <Footer />
        </div>
    )
}

export default App;
