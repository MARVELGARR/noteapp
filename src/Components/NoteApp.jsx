import React from 'react'
import Header from './Header'
import NoteList from './NoteList'
import SideBar from './SideBar'
import { NoteProvider } from './noteContext'

function NoteApp() {


  return (

    <NoteProvider>

      <div className=" h-full w-full p-5 gap-5 bg-slate-300 rounded-xl">
        <div className=''>
          <div className="">

            <Header/>
          </div>
          <div className="flex justify-start items-center w-full p-5 rounded-xl h-full bg-blue-300 mt-10 ">

            <NoteList/>
          </div>
        </div>

        <div className=' absolute w-20 left-0 bottom-0 top-0'>
          <SideBar/>
        </div>
      </div>
    </NoteProvider>

  )
}

export default NoteApp