import { createReducer } from '@reduxjs/toolkit';

export const clubReducer = createReducer(
    {},
    {
        getClubInfoRequest: state => {
            state.loading = true;
            state.error = null
        },
        getClubInfoSuccess: (state, action) => {
            state.loading = false;
            state.info = action.payload;
        },
        getClubInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        getLogoInfoRequest: state => {
            state.loading = true;
            state.error = null
        },
        getLogoInfoSuccess: (state, action) => {
            state.loading = false;
            state.logo = action.payload.data;

        },
        getLogoInfoFail: (state, action) => {
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
