import { createReducer } from '@reduxjs/toolkit';

export const WhatWeDoReducer = createReducer(
    {},
    {
        getOverviewRequest: state => {
            state.loading = true;
            state.error = null
        },
        getOverviewSuccess: (state, action) => {
            state.loading = false;
            state.overview = action.payload.data;
        },
        getOverviewFail: (state, action) => {
            state.loading = false;
            state.overview = null
            state.error = action.payload;
        },

        gettitleRequest: state => {
            state.loading = true;
            state.error = null
        },
        gettitleSuccess: (state, action) => {
            state.loading = false;
            state.title = action.payload.data;
        },
        gettitleFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getactiveRequest: state => {
            state.loading = true;
            state.error = null
        },
        getactiveSuccess: (state, action) => {
            state.loading = false;
            state.active = action.payload.data;
        },
        getactiveFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getImageRequest: state => {
            state.loading = true;
            state.error = null
        },
        getImageSuccess: (state, action) => {
            state.loading = false;
            state.image = action.payload.data;
        },
        getImageFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getCauseExplainRequest: state => {
            state.loading = true;
            state.error = null
        },
        getCauseExplainSuccess: (state, action) => {
            state.loading = false;
            state.explain = action.payload.data;
        },
        getCauseExplainFail: (state, action) => {
            state.loading = false;
            state.explain = null
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
