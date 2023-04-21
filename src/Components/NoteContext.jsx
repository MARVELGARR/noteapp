
import { createContext, useState } from 'react';

const NoteContext = createContext();

import firebase from "firebase/compat/app";
import "firebase/compat/database";
const { initializeApp } = firebase;

const firebaseConfig = {
    apiKey: "AIzaSyDnXTWlCNHuVk5DUHr5WoES04a0nAmcjhc",
    authDomain: "notepad-d3754.firebaseapp.com",
    databaseURL: "https://notepad-d3754-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "notepad-d3754",
    storageBucket: "notepad-d3754.appspot.com",
    messagingSenderId: "219557159206",
    appId: "1:219557159206:web:f460c89bbbfc31391561e7",
    measurementId: "G-K8CLPPP79W"
};

const app = initializeApp(firebaseConfig);
const database = firebase.database();

database.ref("notes").on("value", (snapshot) => {
    const notes = [];
    snapshot.forEach((childSnapshot) => {
      const note = childSnapshot.val();
      notes.push(note);
    });
    console.log(notes);
});

const NoteProvider = ({ children }) => {
  const [write, setWrite] = useState(false);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [charText, setCharText] = useState('0 / 100');
  const [readOnly, setReadOnly] = useState(true);  

  const handleClick = () => {
    setWrite(true);
  };

  const handleChange = (e) => {
    const textValue = e.target.value;
    setText(textValue);
  };

  const handleDoubleClick = (e) => {
    e.preventDefault();
    textAreaRef.current.removeAttribute('readonly');
    textAreaRef.current.setSelectionRange(-1, textAreaRef.current.value.length);
    textAreaRef.current.focus();
  };

  const handleBlur = () => {
    textAreaRef.current.setAttribute('readonly', true);
  };



  const titleChange = (e) => {
    const titlevalue = e.target.value;
    setTitle(titlevalue);
    console.log(titlevalue);
  };



  const contextValues = {
    write,
    setWrite,
    text,
    setText,
    title,
    setTitle,
    charText,
    setCharText,
    readOnly,
    setReadOnly,
    handleClick,
    handleChange,
    handleDoubleClick,
    handleBlur,
    titleChange,
  };

  return <NoteContext.Provider value={contextValues}>{children}</NoteContext.Provider>;
};

export { NoteProvider };
export default NoteContext;


