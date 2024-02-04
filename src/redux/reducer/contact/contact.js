import { createReducer } from '@reduxjs/toolkit';

export const ContactReducer = createReducer(
    {},
    {


        createContactRequest: state => {
            state.loading = true;
            state.message = null
            state.error = null

        },
        createContactSuccess: (state, action) => {
            state.loading = false;
            state.contact = action.payload.data;
            state.message = action.payload.message
        },
        createContactFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        clearError: state => {
            state.error = null;
        },
        clearMessage: state => {
            state.message = null;
        },
    }
);
