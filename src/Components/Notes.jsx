import React, { useState, useEffect, useRef} from 'react'
import { useContext } from 'react';
import { NoteContext } from './noteContext';
import { v4 as uuid } from "uuid";

function Notes() {


    const {text, setText} = useContext(NoteContext);
    const {title, setTitle} = useContext(NoteContext);
    const {tags, setTags} = useContext(NoteContext);
    const {color, setColor} = useContext(NoteContext);
    const {isSaved, setIsSaved} =useContext(NoteContext);
    const {handleUpload} = useContext(NoteContext);
    const {onFocus} = useContext(NoteContext);
    const {selectedOption, setSelectedOption} =useContext(NoteContext);
    const [tagInput, setTagInput] = useState("");
    
    const colorToBgColor = {
        0: 'bg-yellow-400 text-white placeholder:text-white',
        1: 'bg-green-400 text-white placeholder:text-white',
        2: 'bg-blue-400 text-black placeholder:text-black',
        3: 'bg-white-400 text-black-200 ',
        4: "bg-inherit border-0 shadow-none",
    };

    const titleChange = (e) =>{
        const value = e.target.value;
        setTitle(value)
    }
    const textChange = (e) =>{
        const value = e.target.value;
        setText(value);
    }
    const tagChange = (e) =>{
        const value = e.target.value;
        setTags(value);
    }
    const handleOptionChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
    }

    const handleAddTag = () => {
        const newTags = tagInput.split(" ,").map((tag)=>{
            return tag.trim();
        });
        setTags([...tags, ...newTags]);
        setTagInput('');
    };
    const tagInputChange = (e) => {
        const value = e.target.value;
        setTagInput(value);
    };


  return (
    <>
        <div className="  h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg shadow-lg p-4 flex flex-col justify-between">
            <div className="flex  flex-row justify-between items-center">
                <div className=' flex  gap-2'>
                    
                    <div className='flex flex-col gap-2'>
                        
                        <input
                        type="text"
                        placeholder="Title"
                        className={`text-lg ${colorToBgColor[color]} w-40 h-10 border-2 rounded-lg pl-2 focus:outline-none font-serif font-semibold bg-white shadow-sm`}
                        value={title}
                        onChange={titleChange}
                        />
                        <select
                            onChange={handleOptionChange} 
                            className={`text-sm ${colorToBgColor[color]} w-32 h-6 border-2 text-slate-400 rounded-lg pl-2 focus:outline-none font-serif font-semibold bg-white shadow-sm`}
                        >
                            <option value="work" className="font-serif font-semibold text-sm">Work</option>
                            <option value="home" className="font-serif font-semibold text-sm">Home</option>
                            <option value="school" className="font-serif font-semibold text-sm">School</option>
                        </select>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <input
                            type="tag"
                            className={`border-2 ${colorToBgColor[color]} font-bold w-32 h-10 rounded-lg pl-2 pr-10 focus:outline-none bg-white shadow-sm`}
                            placeholder="Tags"
                            value={tagInput}
                            onChange={tagInputChange}
                            
                        />
                        <div className={`text-sm ${colorToBgColor[color]} w-32 flex h-7 border-2 text-slate-400 rounded-lg pl-2 focus:outline-none font-serif font-semibold bg-white shadow-sm`}>{tags.map((item)=>{return (<div key={uuid()} className='inline-block mt-1 mr-2 mb-2'><span className=' bg-gradient-to-r from-blue-500/50 to-teal-500/50 p-1 rounded-lg'>{item}</span></div> )})}</div>
                        <button onClick={handleAddTag} className='flex justify-end w-full h-3 font-extrabold -mt-2' type="button">+</button>
                    </div>
                </div>
            </div>
            <textarea
                className={`resize-none ${colorToBgColor[color]} ${isSaved ? "bg-inherit border-0 shadow-none" : "bg-white"} focus:outline-none w-full h-24 border-2 border-gray-200 rounded-lg p-2 pt-4 font-serif font-normal  bg-white shadow-sm`}
                placeholder="Add a note..."
                maxLength="100"
                value={text}
                onChange={textChange}
            ></textarea>
            <div className="flex items-center justify-between ">
                <span className="text-xs text-gray-500">Last saved 2 hours ago</span>
                <div onClick={handleUpload} className="h-5 w-5 text-2xl font-bold cursor-pointer">+</div>
            </div>
        </div>
    </>
  )
}

export default Notes