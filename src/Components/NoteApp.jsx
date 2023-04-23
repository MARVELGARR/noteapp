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
          <div className="flex justify-center items-center w-11/12 pt-5 pb-5 rounded-xl h-10/12 bg-blue-300 mt-10 ">

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