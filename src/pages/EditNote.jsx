import {Link, useNavigate, useParams} from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { useState } from 'react';
import useCreateDate from '../components/useCreateDate';


const EditNote = ({notes, setNotes}) => {

  const {id} = useParams();
  const note = notes.find((item) => item.id === id);
  console.log(note);

  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details)
  const date = useCreateDate();
  const navigate = useNavigate();


  const handleForm = (e) => {
    e.preventDefault()

    if( title && details){
      const newNote = {...note, title, details, date}

      const newNotes = notes.map(item => {
        if(item.id === id){
          item = newNote;
        }
        return item;
      })

      setNotes(newNotes);
    }
    // redirect to home page 
    navigate('/')
  }

  const handleDelete = () =>{
    if(window.confirm('Are you sure..? You want to delete...?')){
      var deleteNotes = notes.filter(item => item.id !== id);
      setNotes(deleteNotes);
      navigate('/')
    }
  }

  return (
    <section>
      <header className="create-note__header">
       <Link to="/" className='btn'> <AiOutlineArrowLeft /> </Link>
       <button className="btn lg primary" onClick={handleForm}> Save</button>
       <button className="btn danger" onClick={handleDelete}><RiDeleteBin6Line /> </button>

      </header>
      <form className="create-note__form" onSubmit={handleForm}>
        <input type="text" placeholder='Text' value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
        <textarea rows="28" placeholder='Note details....' value={details} onChange={(e) => setDetails(e.target.value)} ></textarea>
      </form>
    </section>
  )
}

export default EditNote