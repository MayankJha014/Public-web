import { createReducer } from '@reduxjs/toolkit';

export const OtherReducer = createReducer(
    {},
    {
        getAllBannerRequest: state => {
            state.loading = true;
            state.error = null
        },
        getAllBannerSuccess: (state, action) => {
            state.loading = false;
            state.Allbanner = action.payload.data;
        },
        getAllBannerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


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




        getMemberFormRequest: state => {
            state.loading = true;
            state.error = null
        },
        getMemberFormSuccess: (state, action) => {
            state.loading = false;
            state.memberForm = action.payload.data;
            state.message = action.payload.message
        },
        getMemberFormFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        getTitleRequest: state => {
            state.loading = true;
            state.error = null
        },
        getTitleSuccess: (state, action) => {
            state.loading = false;
            state.title = action.payload.data;
        },
        getTitleFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getTitleAllRequest: state => {
            state.loading = true;
            state.error = null
        },
        getTitleAllSuccess: (state, action) => {
            state.loading = false;
            state.active = action.payload.data;
        },
        getTitleAllFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getDownloadRequest: state => {
            state.loading = true;
            // state.error = null
        },
        getDownloadSuccess: (state, action) => {
            state.loading = false;
            // state.title = action.payload.data;
        },
        getDownloadFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getActivePageRequest: state => {
            state.loading = true;
            state.error = null
        },
        getActivePageSuccess: (state, action) => {
            state.loading = false;
            state.activePage = action.payload.data;
        },
        getActivePageFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getOtherInfoRequest: state => {
            state.loading = true;
            state.error = null
        },
        getOtherInfoSuccess: (state, action) => {
            state.loading = false;
            state.detail = action.payload.data;
        },
        getOtherInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getDonateInfoRequest: state => {
            state.loading = true;
            state.error = null
        },
        getDonateInfoSuccess: (state, action) => {
            state.loading = false;
            state.donate = action.payload.data;
        },
        getDonateInfoFail: (state, action) => {
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
