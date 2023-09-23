/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid'
import { styles } from "../utils/styles";
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { movingNotes } from "../utils/motion";
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from "../redux/store";


function Todo() {

  const answer = useSelector((state: RootState) => state.theme.value)

  type Todo = {
    title: string;
    complete: boolean;
    id: string;
  };

  const [newTodo, setNewTodo] = useState<Todo>({
    title: "",
    complete: false,
    id: "",
  });
  const [notes, setNotes] = useState<Todo[]>([])
  const [completed, setCompleted] = useState<Todo[]>([])
  const [active, setActive ] = useState("All")
  const [draggedItemsForDiv, setDraggedItemsForDiv] = useState<Todo[]>([]);


  const createTodo = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Created Todo:", newTodo);
    // Reset the input field
    setNewTodo({
      title: "",
      complete: false,
      id: uuid(),
    });

    setNotes([...notes , newTodo]);
    store([...notes , newTodo]);

  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      createTodo(e); // Call your createTodo function with the event
    }
  };
  const deleteNote = (noteId : string) =>{
    const newArray =notes.filter((note)=>{
      return( note.id !== noteId)
    })
    setNotes(newArray);
    store(newArray)
  }

  useEffect(() => {
    // Retrieve data from localStorage when the component mounts
    const storedData = JSON.parse(localStorage.getItem("todo") || "[]");
    if (storedData.length > 0) {
      setNotes(storedData);
    }  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const store =( data : Todo[])=>{
    localStorage.setItem("todo", JSON.stringify(data));
  }
  useEffect(()=>{
    store(notes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[notes])
  


  const checking = (noteId: string) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === noteId) {
          // Toggle the completion state
          return { ...note, complete: !note.complete };
        }
        return note;
      });
    });
    store(notes)

  };
  
  const clearings = () => {
    const clearedNotes = notes.filter((note)=>{
      return( note.complete === false)
    })
    setNotes(clearedNotes)
  }

  const completedNotes = (mode) =>{
    const completedNotes = notes.filter((note)=>{
      return( note.complete === true)
    })
    setCompleted(completedNotes)
    setActive(mode)
  }
  const all = (mode) =>{
    setActive(mode)
  }

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDragOver = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  const handleDrop = (e, newIndex) => {
    e.preventDefault();
    const oldIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    const updatedItems = [...notes];
    const [movedItem] = updatedItems.splice(oldIndex, 1);
    updatedItems.splice(newIndex, 0, movedItem);
    setNotes(updatedItems);
  };
  
  

  return (
    <div className={` ${ answer ? "" : "dark-theme" } text-skin ${styles.padding} ${styles.padding2} md:pt-5 w-screen text-skin-main`}>
      <form onSubmit={createTodo} className="rounded-md h-10 relative ">
        
        <input
          type="text"
          onKeyDown={handleEnter}
          placeholder=""
          onChange={(e) =>
            setNewTodo({ ...newTodo, title: e.target.value })
          }
          value={newTodo.title}
          className=" rounded-md shadow-md absolute bg-skin-background2 inset-0 h-10 w-full"
        ></input>
      </form>


        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className=" w-full mt-5 flex flex-col rounded-md gap-3 bg-skin-background2"
          >
          { active == 'All' ? (<div>        
            {notes.map((note, index)=>{
              return(

                  <motion.div
                    key={note.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, index)}
                    variants={movingNotes} 
                    className="flex-col py-3 px-3 border-b-[2px] border-gray-200 "
                    >
                    <div  className="flex  w-full justify-between items-center ">
                      <div className="flex items-center gap-5">
                        <div className="relative w-5 flex items-center h-5">

                          <div className={` w-full h-full rounded-full flex items-center justify-center bg-gradient-to-r ${ note.complete? "from-check1 to-check2" : "" }  `}>
                            { note.complete === true ? (<img
                              src="/svg/icon-check.svg"
                              alt="check"
                              className="w-3 h-3 bg-check "
                            />) : (<div className=" border-2 bg-skin-background2 rounded-full w-full h-5 border-gray-600/80"></div>)}
                          </div>
                          <input onChange={()=>checking(note.id)} type="checkbox" checked={note.complete} className="absolute opacity-0 inset-0"/>
                        </div>
                        <div className={` ${note.complete? " line-through opacity-20" : ""} text-lg`}>{note.title}</div>
                      </div>
                      <div onClick={()=>deleteNote(note.id)} className="cursor-pointer">
                        <img
                          src="/svg/icon-cross.svg"
                          alt="cross"
                          className="w-5 h-5 bg-skin-cancelled"
                        />
                      </div>
                    </div>
                    
                  </motion.div>)}

              )
            }
          </div>) : active == "Completed" ? (
          <div>
            {completed.map((note)=>{
              return(
                <motion.div
                  
                  draggable={true}
                  variants={movingNotes} 
                  key={note.id} className="flex-col py-3 px-3 border-b-[2px] border-gray-200 "
                  >
                  <div  className="flex  w-full justify-between items-center ">
                    <div className="flex items-center gap-5">
                      <div className="relative w-5 flex items-center h-5">

                        <div className={` w-full h-full rounded-full flex items-center justify-center bg-gradient-to-r ${ note.complete? "from-check1 to-check2" : "" }  `}>
                          { note.complete === true ? (<img
                            src="/svg/icon-check.svg"
                            alt="check"
                            className="w-3 h-3 bg-check "
                          />) : (<div className=" border-2 bg-skin-background2 rounded-full w-full h-5 border-gray-600/80"></div>)}
                        </div>
                        <input onChange={()=>checking(note.id)} type="checkbox" checked={note.complete} className="absolute opacity-0 inset-0"/>
                      </div>
                      <div className={` ${note.complete? " line-through opacity-20" : ""} text-lg`}>{note.title}</div>
                    </div>
                    <div onClick={()=>deleteNote(note.id)} className="cursor-pointer">
                      <img
                        src="/svg/icon-cross.svg"
                        alt="cross"
                        className="w-5 h-5 bg-skin-cancelled"
                      />
                    </div>
                  </div>
                  
                </motion.div>
              )
            })}
          </div>) : <div className=""></div>}

        </motion.div>

        
      <div className="flex justify-between bg-skin-background2 py-4 px-3">
        <div className="">{` ${notes.length} items left`}</div>
        <div onClick={clearings} className="cursor-pointer">clear completed</div>
      </div>
      <div className={` ${styles.padding} mt-7 flex items-center h-10  justify-center gap-6 shadow-md bg-skin-background2`}>
        <div onClick={()=>all("All")} className={`${ active == "All" ? "text-cyan-600 font-bold" : " "} cursor-pointer`}>All</div>
        <div  className={`cursor-pointer `}>Active</div>
        <div onClick={()=>completedNotes("Completed")} className={`${ active == "Completed" ? "text-cyan-600 font-bold" : ""} cursor-pointer`}>Completed</div>
      </div>
    
    </div>
  );
}

export default Todo;
