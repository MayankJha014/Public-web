import { createReducer } from '@reduxjs/toolkit';

export const ResourceReducer = createReducer(
    {},
    {
        getResourceRequest: state => {
            state.loading = true;
            state.error = null
        },
        getResourceSuccess: (state, action) => {
            state.loading = false;
            state.points = action.payload.data;
        },
        getResourceFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getCollateralPDFRequest: state => {
            state.loading = true;
            state.error = null
        },
        getCollateralPDFSuccess: (state, action) => {
            state.loading = false;
            state.pdf = action.payload.data;
        },
        getCollateralPDFFail: (state, action) => {
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
