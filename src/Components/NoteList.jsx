import React, {useState, useEffect, useContext} from 'react'
import Notes from './Notes'
import { v4 as uuid } from "uuid";
import { NoteContext } from './noteContext';



function NoteList() {
   const {color, setColor} = useContext(NoteContext);
   const {handleColorChange} = useContext(NoteContext); 
   const [noteList, setNoteList] = useState({id: uuid(), title: "", text: "",})
  return (
    <div className="">
        <Notes/>
    </div>
  )
}

export default NoteList