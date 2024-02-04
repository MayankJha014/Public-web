import { createReducer } from '@reduxjs/toolkit';

export const BannerReducer = createReducer(
    {},
    {

        getBannerRequest: state => {
            state.loading = true;
            state.error = null
        },
        getBannerSuccess: (state, action) => {
            state.loading = false;
            state.banner = action.payload.data;
        },
        getBannerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getSectionBannerRequest: state => {
            state.loading = true;
            state.error = null
        },
        getSectionBannerSuccess: (state, action) => {
            state.loading = false;
            state.sectionBanner = action.payload.data;
        },
        getSectionBannerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getLionBannerRequest: state => {
            state.loading = true;
            state.error = null
        },
        getLionBannerSuccess: (state, action) => {
            state.loading = false;
            state.lionbanner = action.payload.data;
        },
        getLionBannerFail: (state, action) => {
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
