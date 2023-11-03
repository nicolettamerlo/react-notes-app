import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const response = await axios.get('https://6537ca58a543859d1bb0d86b.mockapi.io/react-app-notes')
  const data = response.data
  return data
})

const initialState = {
  notes: [],
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    created: {
      reducer(state, action) {
        state.notes.push(action.payload)
    },
      prepare(noteTitle, noteContent, colorId) {
          return {
              payload: {
                  id:nanoid(),
                  title:noteTitle,
                  content:noteContent,
                  color:colorId,
                  createdAt:new Date().toISOString(),
              }
          }
      }
    },
    deleted: (state, action) => {
      const { noteId } = action.payload
      state.notes = state.notes.filter((note) => note.id !== noteId)
    },
    contentUpdated: (state, action) => {
      const { title, content, id } = action.payload
      const existingNote = state.notes.find((note) => note.id === id);
      if(existingNote) {
        existingNote.content = content;
        existingNote.title = title;
      }
    },
    colorChanged: (state, action) => {
      const { noteId, colorId} = action.payload
      const existingNote = state.notes.find((note) => note.id === noteId);
      if(existingNote) { existingNote.color = colorId;}
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNotes.pending, (state) => {
          state.status = 'loading'
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
          state.status = 'succeeded'
          state.notes = action.payload
      })
      .addCase(fetchNotes.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
      })
}
})

export const selectAllNotes = (state) => {
  if(state.notes.notes.length>0) {
    let orderedNotes = [...state.notes.notes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).reverse()
    return orderedNotes
  }
  return state.notes.notes
};

export const selectNoteById = (state, id) => id ? state.notes.notes.find(note => note.id===id) : null;


export const { created, deleted, contentUpdated, colorChanged } = notesSlice.actions;

export default notesSlice.reducer