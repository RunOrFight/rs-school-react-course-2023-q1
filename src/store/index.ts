import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { formSlice, searchSlice } from './slices';
import { rickAndMortyApi } from 'api';

const rootReducer = combineReducers({
  search: searchSlice.reducer,
  form: formSlice.reducer,
  rickAndMorty: rickAndMortyApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const { setText: setSearchText } = searchSlice.actions;
export const { addSubmition: addFormSubmitions } = formSlice.actions;
