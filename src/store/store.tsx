import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import themeReducer from '../features/theme/themeSlice'
// ...

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    theme:themeReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {counter:counterReducer}
export type AppDispatch = typeof store.dispatch