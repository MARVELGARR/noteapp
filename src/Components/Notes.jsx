import React, { useState, useEffect, useRef } from 'react'


function Notes() {

    

    const [write, setWrite]= useState(false);
    const [text, setText]= useState("");
    const [title, setTitle]= useState("");
    const [charText, setCharText] = useState('0 / 100');
    const [readOnly, setReadOnly] = useState(true);
    const textAreaRef = useRef(null);

    const handleClick = () =>{
        setWrite(true);
    }
    const handleChange = (e) =>{
        const textValue = e.target.value;
        setText(textValue);
    }

    const handleDoubleClick = (e) => {
        e.preventDefault();
        textAreaRef.current.removeAttribute('readonly');
        textAreaRef.current.setSelectionRange(-1, textAreaRef.current.value.length);
        textAreaRef.current.focus();
    }
    
    const handleBlur = () => {
        textAreaRef.current.setAttribute('readonly', true);
    }

    const titleChange = (e) =>{
        const titlevalue = e.target.value;
        setTitle(titlevalue);
        console.log(titlevalue);
    }

    useEffect(() => {
        const characterCount = text.length;
        setCharText(`${characterCount} / 100`);
    }, [text]);


  return (
    <>
        <div className=" w-40 h-40 bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
            <div className="flex flex-row justify-between items-center">
                <input
                    type="text"
                    placeholder="Title"
                    className="text-md -mt-4 font-bold focus:outline-none w-4/5"
                    value={title}
                    onChange={titleChange}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 -mt-1 text-gray-400 hover:text-gray-500 cursor-pointer"
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
                className="resize-none  focus:outline-none w-full h-full"
                placeholder="Add a note..."
                value={text}
                onBlur={handleBlur}
                onDoubleClick={handleDoubleClick}
                onChange={handleChange}
                readOnly={readOnly}
                ref={textAreaRef}
            ></textarea>
            <div className="flex justify-between">
                <span className="text-sm">{charText}</span>
                <button className=' text-sm bg-slate-500 pl-2 pr-2 rounded-lg' >save</button>
            </div>
        </div>

    </>
  )
}

export default Notes