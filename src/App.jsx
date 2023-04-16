import React from 'react';
import ReactDOM from 'react-dom';
import '../main.css';
import Note from './components/Note';
import NewNote from './components/NewNote';

class App extends React.Component {
  state = {
    notes: [
      { id: 1, text: ' kj fjk ebkew fjfk kbew bw jhwe ffjccj cbfwf kwf ewjf fwefwefw fwef wef' },
    ]
  }

  handleDelete = (id) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }

  render() {
    return (
      <div className='m-8'>
        <h2 className=' text-3xl font-medium inline-block mr-4'>Notes</h2>
        <button className=' bg-white border border-black rounded-full p-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWdth="1.5" stroke="currentColor" className="w-6 h-6 text-green-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </button>
        {this.state.notes.map(note => (
          <Note key={note.id} text={note.text} onDelete={() => this.handleDelete(note.id)} />
        ))}
        <NewNote />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));