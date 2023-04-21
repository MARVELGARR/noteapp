import React, {useState, useEffect, useContext} from 'react'
import Notes from './Notes'
import { v4 as uuid } from "uuid";



function NoteList() {
    const [noteList, setNoteList] = useState([{id:uuid(), title:"", content:""}])

    const addNote = () =>{
        const newNote = {
            id: uuid(), // Generate a unique ID for the new note
            title: "",
            content: "",
        };
        setNoteList(()=>{

            return ([...noteList, newNote ])
        })
    }

  return (
    <div className="">
        <div onClick={addNote} className=" cursor-pointer">+</div>
        <div className="grid gap-5 grid-cols-3">
            {noteList.map((note)=>{
                return (
                    <Notes key={note.id} title={note.title} content={note.content}/>
                )
            })}

        </div>
    </div>
  )
}

export default NoteList