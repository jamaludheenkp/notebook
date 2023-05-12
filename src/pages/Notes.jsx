import React, { useEffect, useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import { Link } from 'react-router-dom'
import {GoPlus} from 'react-icons/go'


import NoteItem from '../components/NoteItem'


const Notes = ({notes}) => {

  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes)

  const handleSearch = () =>{
    setFilteredNotes(notes.filter(note => {
      if(note.title.toLowerCase().match(text.toLowerCase())){
        return note;
      }
    }))
  }

  useEffect (handleSearch, [text])


  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>My Notes </h2>}
        {showSearch && <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} autoFocus placeholder='Keyword....'/>}
        <button className='btn' onClick={() => setShowSearch(prevState => !prevState)} > {showSearch ? <IoMdClose/> : <BsSearch/>} </button>
      </header>
      <div className="notes__container">
        {filteredNotes.length === 0 && <p className='empty__notes'> Oops..! No notes found</p>}
        {
          filteredNotes.map(note => <NoteItem key={note.id} note={note} /> )
        }
      </div>
      <Link to={'/create-note'} className='btn add__btn'> <GoPlus/> </Link>
    </section>
  )
}

export default Notes