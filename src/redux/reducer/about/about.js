import { createReducer } from '@reduxjs/toolkit';

export const AboutReducer = createReducer(
    {},
    {
        getOverviewPointRequest: state => {
            state.loading = true;
            state.error = null
        },
        getOverviewPointSuccess: (state, action) => {
            state.loading = false;
            state.overview = action.payload.data;
        },
        getOverviewPointFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        getMissonAndDreamRequest: state => {
            state.loading = true;
            state.error = null
        },
        getMissonAndDreamSuccess: (state, action) => {
            state.loading = false;
            state.mission = action.payload.data;
        },
        getMissonAndDreamFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        getDreamsPointRequest: state => {
            state.loading = true;
            state.error = null
        },
        getDreamsPointSuccess: (state, action) => {
            state.loading = false;
            state.dreamsPoint = action.payload.data;
        },
        getDreamsPointFail: (state, action) => {
            state.loading = false;
            state.dreamsPoint = null
            state.error = action.payload;
        },




        getTeamInfoRequest: state => {
            state.loading = true;
            state.error = null
        },
        getTeamInfoSuccess: (state, action) => {
            state.loading = false;
            state.team = action.payload.data;
        },
        getTeamInfoFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getTestimonialRequest: state => {
            state.loading = true;
            state.error = null
        },
        getTestimonialSuccess: (state, action) => {
            state.loading = false;
            state.testimonial = action.payload.data;
        },
        getTestimonialFail: (state, action) => {
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
