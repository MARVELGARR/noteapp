import React, { useState, useEffect, useRef} from 'react'
import { useContext } from 'react';
import { NoteContext } from './noteContext';


function Notes() {


    const {text, setText} = useContext(NoteContext);
    const {title, setTitle} = useContext(NoteContext);
    const {tags, setTags} = useContext(NoteContext);
    const {color, setColor} = useContext(NoteContext);
    const {isSaved, setIsSaved} =useContext(NoteContext);
    const {handleUpload} = useContext(NoteContext);
    const {onFocus} = useContext(NoteContext);
    const {selectedOption, setSelectedOption} =useContext(NoteContext);
    const [tagInput, setTagInput] = useState();
    
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
        console.log(tags)
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
                        <div className={`text-sm ${colorToBgColor[color]} w-32 h-6 border-2 text-slate-400 rounded-lg pl-2 focus:outline-none font-serif font-semibold bg-white shadow-sm`}>{tags}</div>
                        <button onClick={handleAddTag} className='flex justify-end w-full h-3 font-extrabold -mt-2' type="button">+</button>
                    </div>
                </div>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 -mt-16 text-gray-400 hover:text-gray-500 cursor-pointer"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
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
                <span className="text-xs text-gray-500">3 tags</span>
                <div className="flex items-center cursor-pointer transform hover:scale-110 transition-all duration-300" onClick={() => handleStar()}>
                    <svg
                        className={`w-6 h-6 mr-1 text-yellow-400 `}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        fillRule="evenodd"
                        d="M10 14.583l3.375 2.167-.875-3.812L16 8.75l-3.917-.334L10 5.417 7.917 8.416 4 8.75l3.125 2.188-.875 3.813L10 14.583zM10 18.333l-2.938 1.875L10 15.834l2.938 1.374L10 18.333z"
                        clipRule="evenodd"
                        />
                    </svg>
                    
                </div>
                <div onClick={handleUpload} className="h-5 w-5 text-2xl font-bold cursor-pointer">+</div>
            </div>
        </div>
    </>
  )
}

export default Notes