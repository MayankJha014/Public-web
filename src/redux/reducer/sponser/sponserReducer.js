import { createReducer } from '@reduxjs/toolkit';

export const SponserReducer = createReducer(
    {},
    {
        getGlobalSponserPointRequest: state => {
            state.loading = true;
            state.error = null
        },
        getGlobalSponserPointSuccess: (state, action) => {
            state.loading = false;
            state.sponser = action.payload.data;
        },
        getGlobalSponserPointFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getLocalSponserPointRequest: state => {
            state.loading = true;
            state.error = null
        },
        getLocalSponserPointSuccess: (state, action) => {
            state.loading = false;
            state.localsponser = action.payload.data;
        },
        getLocalSponserPointFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getPartnerWithUsOppourtunityRequest: state => {
            state.loading = true;
            state.error = null
        },
        getPartnerWithUsOppourtunitySuccess: (state, action) => {
            state.loading = false;
            state.Oppourtunity = action.payload.data;
        },
        getPartnerWithUsOppourtunityFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getPartnerWithUsBenefitRequest: state => {
            state.loading = true;
            state.error = null
        },
        getPartnerWithUsBenefitSuccess: (state, action) => {
            state.loading = false;
            state.benefits = action.payload.data;
        },
        getPartnerWithUsBenefitFail: (state, action) => {
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
