import React, { createContext, useState, useEffect } from "react";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
// Create the context
export const NoteContext = createContext();

const firebaseConfig = {
  apiKey: "AIzaSyDnXTWlCNHuVk5DUHr5WoES04a0nAmcjhc",
  authDomain: "notepad-d3754.firebaseapp.com",
  databaseURL: "https://notepad-d3754-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "notepad-d3754",
  storageBucket: "notepad-d3754.appspot.com",
  messagingSenderId: "219557159206",
  appId: "1:219557159206:web:307cd5c7517a96461561e7",
  measurementId: "G-EMM1ZCDPGX"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);



const notesInDatabase = ref(database, "Notes");




export const NoteProvider =({children}) =>{


  const [color, setColor] = useState(3)
  const [isSaved, setIsSaved] = useState(false);
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [tags, setTags] = useState([])
  const [selectedOption, setSelectedOption] = useState('home');
  const [NotesData, setNotesData] = useState([])
  
  useEffect(() =>{
    onValue(notesInDatabase, (snapshot) => {
      const NotesData = snapshot.val();
      setNotesData(NotesData ? Object.entries(NotesData) : []);
      console.log(NotesData);   
    })
  },[])



  const handleUpload = () =>{
    push (notesInDatabase, {Title:title, Text: text, Tags:tags, Priority: selectedOption})
    setText('');
    setTitle('');
    setTags([]);
    setSelectedOption("home")

  }




  const handleColorChange = (index) =>{
    setColor(index);    
  }



  const states = {
    color,
    setColor,
    handleColorChange,
    isSaved,
    setIsSaved,
    text,
    setText,
    title,
    setTitle,
    tags,
    setTags,
    selectedOption,
    setSelectedOption,
    handleUpload,
    notesInDatabase,
    firebaseConfig,
    app,
    database,
    NotesData,

  }

  return(
    <NoteContext.Provider value={states}>
      {children}
    </NoteContext.Provider>
  )
}