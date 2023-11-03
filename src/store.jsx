import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './features/notes/notesSlice';

// export default configureStore({
//    reducer: {
//     notes: notesReducer,
//    }
// })
 const store =  configureStore({
   reducer: {
    notes: notesReducer,
   }
})

export default store