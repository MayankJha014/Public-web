import { createReducer } from '@reduxjs/toolkit';

export const HomeReducer = createReducer(
    {},
    {
        getHomeAboutInfoRequest: state => {
            state.loading = true;
            state.error = null
        },
        getHomeAboutInfoSuccess: (state, action) => {
            state.loading = false;
            state.about = action.payload.data;
        },
        getHomeAboutInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getHomeExtraInfoRequest: state => {
            state.loading = true;
            state.error = null
        },
        getHomeExtraInfoSuccess: (state, action) => {
            state.loading = false;
            state.extra = action.payload.data;
        },
        getHomeExtraInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        getHomeWhatWeDoRequest: state => {
            state.loading = true;
            state.error = null
        },
        getHomeWhatWeDoSuccess: (state, action) => {
            state.loading = false;
            state.whatwedo = action.payload.data;
        },
        getHomeWhatWeDoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },




        getHomeOtherInfoRequest: state => {
            state.loading = true;
            state.error = null
        },
        getHomeOtherInfoSuccess: (state, action) => {
            state.loading = false;
            state.others = action.payload.data;
        },
        getHomeOtherInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        getFooterInfoRequest: state => {
            state.loading = true;
            state.error = null
        },
        getFooterInfoSuccess: (state, action) => {
            state.loading = false;
            state.footer = action.payload.data;
        },
        getFooterInfoFail: (state, action) => {
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
