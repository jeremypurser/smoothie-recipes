import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { loadState, saveState } from '../app/localStorage';
import counterReducer from '../features/counter/counterSlice';
import { recipesReducer } from './recipesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    recipes: recipesReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
