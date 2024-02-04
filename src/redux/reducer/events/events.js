import { createReducer } from '@reduxjs/toolkit';

export const EventReducer = createReducer(
    {},
    {
        getUpcominEventsRequest: state => {
            state.loading = true;
            state.error = null
        },
        getUpcominEventsSuccess: (state, action) => {
            state.loading = false;
            state.Events = action.payload.data;
        },
        getUpcominEventsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getEventCategoryRequest: state => {
            state.loading = true;
            state.error = null
        },
        getEventCategorySuccess: (state, action) => {
            state.loading = false;
            state.EventCategory = action.payload.data;
        },
        getEventCategoryFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getComeBeLionPointRequest: state => {
            state.loading = true;
            state.error = null
        },
        getComeBeLionPointSuccess: (state, action) => {
            state.loading = false;
            state.LionPoint = action.payload.data;
        },
        getComeBeLionPointFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getAlbumRequest: state => {
            state.loading = true;
            state.error = null
        },
        getAlbumSuccess: (state, action) => {
            state.loading = false;
            state.album = action.payload.data;
        },
        getAlbumFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getAlbumImageRequest: state => {
            state.loading = true;
            state.error = null
            state.Images = []
        },
        getAlbumImageSuccess: (state, action) => {
            state.loading = false;
            state.Images = action.payload.data;
        },
        getAlbumImageFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getEventsDescriptionRequest: state => {
            state.loading = true;
            state.error = null
        },
        getEventsDescriptionSuccess: (state, action) => {
            state.loading = false;
            state.eventDescription = action.payload.data;
        },
        getEventsDescriptionFail: (state, action) => {
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
