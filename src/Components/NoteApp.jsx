import React from 'react'
import Header from './Header'
import NoteList from './NoteList'
import NoteContext from './noteContext'
import { NoteProvider } from './noteContext'

function NoteApp() {


  return (
    <NoteProvider>

      <div>
        <div className=" max-h-2/5 max-w-96  p-5 gap-5 bg-slate-300 rounded-xl">
          <Header/>
          <NoteList/>
        </div>
      </div>
    </NoteProvider>
  )
}

export default NoteApp