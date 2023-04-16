import React from 'react';
import ReactDOM from 'react-dom';
import '../main.css';
import Note from './components/Note';
import NewNote from './components/NewNote';
import axios from 'axios';

class App extends React.Component {
  state = {
    notes: []
  }

  constructor(props) {
    super(props);
    this.getNotes = this.getNotes.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleCreateNote = this.handleCreateNote.bind(this);
    this.handleUpdateNotes = this.handleUpdateNotes.bind(this);
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes = () => {
    axios.get('http://localhost:7070/notes')
    .then(response => {
      console.log(response.data);
      this.setState( this.state.notes = response.data );
    })
    .catch(error => {
      console.log(error);
    });
  }

  handleDeleteNote = (id) => {
    /* this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    }); */

    axios.delete(`http://localhost:7070/notes/${id}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });

    this.getNotes();
  }

  handleCreateNote = (content) => {
    const note = { id: 0, content: content };
    axios.post('http://localhost:7070/notes', note)
      .then(response => {
        console.log(response.data);
        this.setState(prevState => ({
          notes: [...prevState.notes, { id: response.data.id, content: response.data.content }]
        }));
      })
      .catch(error => {
        console.log(error);
      });

    this.getNotes();
  };

  handleUpdateNotes = () => {
    this.getNotes();
  };

  render() {
    return (
      <div className='m-8'>
        <h2 className=' text-3xl font-medium inline-block mr-4'>Notes</h2>
        <button 
          className=' bg-white border border-black rounded-full p-2'
          onClick={ this.handleUpdateNotes }>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWdth="1.5" stroke="currentColor" className="w-6 h-6 text-green-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </button>
        {this.state.notes.map(note => (
          <Note key={ note.id } text={ note.content } onDelete={ () => this.handleDeleteNote(note.id) } />
        ))}
        { console.log('update')}
        <NewNote onAddNote={ this.handleCreateNote }/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));