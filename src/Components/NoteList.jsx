import React, {useState, useEffect, useContext} from 'react'
import Notes from './Notes'
import { v4 as uuid } from "uuid";
import { NoteContext } from './noteContext';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import "../App.css"

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



function NoteList() {
   const {color, setColor} = useContext(NoteContext);
   const {handleColorChange} = useContext(NoteContext); 
   const {notesInDatabase} = useContext(NoteContext);
   const {NotesData} = useContext(NoteContext);
   const {deletNote} = useContext(NoteContext);
   const {NotesId} = useContext(NoteContext);
    
    const [liked, setIsLiked] = useState(false);
    
    const handleLiked = () =>{

    }
    

    return (
        <div className=" notes w-full">
            {NotesData.map(data => {
                return (
                    <div key={data[0]} className="h-64 rounded-lg shadow-lg p-4 flex flex-col justify-between bg-gradient-to-r from-blue-200 to-purple-200">
                        <div className="flex flex-row justify-between items-center">
                            <div className='flex gap-2 w-full'>
                                <div className="flex flex-row justify-between w-full gap-2">
                                    <div className="text-green-400 uppercase font-bold text-lg">{data[1].Title}</div>
                                    <div className="bg-emerald-400 text-white rounded-full px-2 py-1 text-sm">{(data[1].Tags)}</div>
                                </div>
                            </div>
                            <svg
                            onClick={()=>deletNote(data[0])}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-400 hover:text-gray-500 cursor-pointer"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div className="w-full h-4/5 bg-inherit shadow-lg p-4 rounded-lg mt-2 overflow-auto">
                            <p className="text-gray-700  leading-relaxed">{data[1].Text}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-xs font-semibold text-gray-500">{data[1].Priority}</span>
                            <div className="flex items-center cursor-pointer transform hover:scale-110 transition-all duration-300">
                            <svg
                                className="w-6 h-6 mr-1 "
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M10 14.583l3.375 2.167-.875-3.812L16 8.75l-3.917-.334L10 5.417 7.917 8.416 4 8.75l3.125 2.188-.875 3.813L10 14.583zM10 18.333l-2.938 1.875L10 15.834l2.938 1.374L10 18.333z" clipRule="evenodd" />
                            </svg>
                            </div>
                        </div>
                    </div>
                )
            })}
            <Notes/>
        </div>
    )
}
export default NoteList