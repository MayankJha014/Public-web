import { createReducer } from '@reduxjs/toolkit';

export const DescriptionReducer = createReducer(
    {},
    {
        getDescriptionRequest: state => {
            state.loading = true;
            state.error = null
        },
        getDescriptionSuccess: (state, action) => {
            state.loading = false;
            state.description = action.payload.data;
        },
        getDescriptionFail: (state, action) => {
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
