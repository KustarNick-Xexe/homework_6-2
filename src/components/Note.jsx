import React from 'react';

const Note = ({ text, onDelete  }) => {

console.log(`Note: ${text}`);

const handleClick = () => { onDelete(); }

  return (
    <div className=' w-60 relative border border-black p-8 m-8'>
        <button 
          className=' bg-white border border-black rounded-full p-2 absolute -top-5 -right-5'
          onClick={ handleClick }>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <p className=' text-center'>{ text }</p>
    </div>
  )
};

 
export default Note;