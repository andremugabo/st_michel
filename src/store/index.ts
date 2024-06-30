// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit'

// Define an empty reducer object if you don't have any reducers yet
const rootReducer = {}

export const store = configureStore({
  reducer: rootReducer, // Ensure this is not empty
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
