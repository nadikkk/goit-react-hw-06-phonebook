import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts/contactSlice";
import { filterReducer } from "./filter/filterSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const persistConfig = {
	key: 'root',
	storage,
 }
  
 const persistedReducer = persistReducer(persistConfig, contactReducer)

export const store = configureStore({
	reducer: {
		contact: persistedReducer,
		filter: filterReducer,
	},
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	 }),
})
export const persistor = persistStore(store)