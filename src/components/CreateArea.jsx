import Fab from '@material-ui/core/Fab';
import Zoom from "@material-ui/core/Zoom";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from 'react';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isExpanded, setExpanded] = useState(false);

    const handleChange = function (e) {
        const { name, value } = e.target;
        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value,
            }
        })
    }

    const submitNote = function (e) {
        e.preventDefault();
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
    }

    const expand = function () {
        setExpanded(true);
    }

    return (
        <form className="create-note">
            {
                isExpanded && <input
                    name="title"
                    value={note.title}
                    placeholder="Title"
                    onChange={handleChange}
                />
            }
            <textarea
                onClick={expand}
                name="content"
                value={note.content}
                placeholder="Take a note..."
                rows={isExpanded ? 3 : 1}
                onChange={handleChange}
            />
            <Zoom in={isExpanded ? true : false}>
                <Fab type="submit" onClick={submitNote}><AddIcon /></Fab>
            </Zoom>
        </form>
    );
}

export default CreateArea;
