import React, { useEffect, useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Notes from './pages/Notes'
import CreateNote from './pages/CreateNote'
import EditNote from './pages/EditNote'
// import dummyNotes from './dummy_notes'



const App = () => {

  const [notes, setNotes]= useState (JSON.parse(localStorage.getItem('notes')) || [])
  console.log(notes);

  useEffect ( () =>{
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
   <main id='App'>
    <Router>
    <Routes>
       <Route path='/' element={<Notes  notes={notes}/>} />
       <Route path='/create-note' element={<CreateNote setNotes={setNotes}/>} />
       <Route path='/edit-note/:id' element={<EditNote notes={notes} setNotes={setNotes}/> } />
    </Routes>
   </Router>
   </main>
  )
}

export default App