/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid'
import { styles } from "../utils/styles";
function Todo() {
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

    setNewTodo({
      title: "",
      complete: false,
      id: uuid(),
    });

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
    setNotes(storedData);
  }, []);

  const store =( data : Todo[])=>{
    localStorage.setItem("todo", JSON.stringify(data));
  }

  return (
    <div className={` ${styles.padding} w-screen text-skin-main`}>
      <form onSubmit={createTodo} className="rounded-md h-10 relative ">
        <div className=" border-[1px] rounded-full w-5 h-5 top-[10px] left-4 border-gray-600/80 absolute bottom-0 z-10"></div>
        <input
          type="text"
          onKeyDown={handleEnter}
          placeholder=""
          onChange={(e) =>
            setNewTodo({ ...newTodo, title: e.target.value })
          }
          value={newTodo.title}
          className=" rounded-md shadow-md absolute bg-skin-background inset-0 h-10 w-full"
        ></input>
      </form>
      <div className=" w-full mt-5 flex flex-col rounded-md gap-3 bg-skin-background">
        {notes.map((note)=>{
          return(
            <div key={note.id} className="flex-col shadow-md py-3 px-3 border-b-[2px] border-gray-200 ">

              <div  className="flex  w-full justify-between items-center ">
                <div className="flex gap-5">
                  <div className=" w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-r from-check1 to-check2  ">
                    <img
                      src="/svg/icon-check.svg"
                      alt="check"
                      className="w-3 h-3 bg-check "
                    />
                  </div>
                  <div className=" text-lg">{note.title}</div>
                </div>
                <div onClick={()=>deleteNote(note.id)} className="">
                  <img
                    src="/svg/icon-cross.svg"
                    alt="cross"
                    className="w-5 h-5 bg-skin-cancelled"
                  />
                </div>
              </div>
              
            </div>
          )
        })}
      </div>
      <div className="flex justify-between">
        <div className="">{` items left`}</div>
        <div className="">clear completed</div>
      </div>
    </div>
  );
}

export default Todo;
