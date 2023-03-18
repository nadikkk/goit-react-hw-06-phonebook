import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	contacts: [],
}

const contactSlice = createSlice({
	name: 'contact',
	initialState,
	reducers: {
		addContact: (state, {payload}) => {
			state.contacts.push(payload)
		},
		deleteContact: (state, {payload}) => {
			state.contacts = state.contacts.filter(contact => contact.id !== payload)
		},
	}
})

export const {addContact, deleteContact} = contactSlice.actions;
export const contactReducer = contactSlice.reducer;