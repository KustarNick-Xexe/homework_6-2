import React, { useState } from 'react';

const NewNote = ({ onAddNote }) => {
  const [noteText, setNoteText] = useState('');

  const handleNoteChange = (event) => {
    setNoteText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddNote(noteText);
    setNoteText('');
  }

  return (
    <form className='w-80 h-40 border border-black relative m-4' onSubmit={ handleSubmit }>
        <textarea className='w-full h-full outline-none p-4 resize-none'  value={noteText} onChange={ handleNoteChange } />
        <button className=' bg-white absolute bottom-4 right-4 border border-black rounded-full p-2 outline-none'  type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
        </button>
    </form>
  );
}

export default NewNote;